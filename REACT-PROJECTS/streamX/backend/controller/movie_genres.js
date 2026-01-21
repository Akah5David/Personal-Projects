import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);

import { safeFetch } from "../util/safeFetch.js";

export const getGenre = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };


  try {
    const resp = await safeFetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        headers,
      },
    );

    const data = await resp.json();
    const movieGenres = data.genres;
    console.log("This is Movie Genres: ", movieGenres);
    const reqParams = req.params

    let selectedGenre = movieGenres.find((movie) => movie.name.toLowerCase() === reqParams.genre.toLowerCase());
    

    //! requesting for movies that has genre id that represents action genre
    const actionRes = await safeFetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre.id}`,
      { headers },
    );

    const movieResData = await actionRes.json();
    const actionMovies = movieResData.results;
    // console.log("The list of Action Movies", actionMovies);

    //* Taking the first action Movie Object and using it's its details for hero section
    const heroMovie = actionMovies[0];
    const heroDetailsRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${heroMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers },
    );

    let heroDetails = await heroDetailsRes.json();

    console.log("This is Hero Details: ", heroDetails);

    const newGenreId = heroMovie["genre_ids"]
      .map((genreId) => {
        const genre = movieGenres.find((g) => genreId === g.id);
        return genre?.name;
      })
      .filter(Boolean);

    console.log("This is the new Genre Id: ", newGenreId);

    return res.status(200).json({
      hero: { ...heroMovie, ...heroDetails, genres: newGenreId },
      actionMovies,
    });
  } catch (error) {
    console.log("Error From getActionMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch ActionMovies form TDMB",
    });
  }
};

