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

  console.log("Req Params: ", req.params);

  try {
    const resp = await safeFetch("https://api.themoviedb.org/3/genre/tv/list", {
      headers,
    });

    const data = await resp.json();
    const tvGenres = data.genres;
    console.log("This is Movie Genres: ", tvGenres);
    const reqParams = req.params;

    let selectedGenre = tvGenres.find(
      (tv) => tv.name.toLowerCase() === reqParams.genre.toLowerCase(),
    );
    console.log("Action Genre: ", selectedGenre);

    //* requesting for movies that falls into a particular genre using the genre id
    const genreRes = await safeFetch(
      `https://api.themoviedb.org/3/discover/tv?with_genres=${selectedGenre.id}`,
      { headers },
    );

    const genreData = await genreRes.json();
    const genres_in_tv = genreData.results;
    console.log("The list of Action Movies", genres_in_tv);

    //* Taking the first action Movie Object and using it's its details for hero section
    const heroTv = genres_in_tv[0];

    const heroDetailsRes = await safeFetch(
      `https://api.themoviedb.org/3/tv/${heroTv.id}?append_to_response=videos,images,credits,content_ratings&language=en-US`,
      { headers },
    );

    let heroDetails = await heroDetailsRes.json();

    console.log("This is Hero Details: ", heroDetails);

    const newGenreId = heroTv["genre_ids"]
      .map((genreId) => {
        const genre = tvGenres.find((g) => genreId === g.id);
        return genre?.name;
      })
      .filter(Boolean);

    console.log("This is the new Genre Id: ", newGenreId);

    return res.status(200).json({
      hero: { ...heroTv, ...heroDetails, genres: newGenreId },
      genres_in_tv,
    });
  } catch (error) {
    console.log("Error From getMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch Movies form TDMB",
    });
  }
};
