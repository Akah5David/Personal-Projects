import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);

import { safeFetch } from "../util/safeFetch.js";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
};

export const getGenre = async (req, res, next) => {
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
    const tvList = genreData.results;
    console.log("The list of Action Movies", tvList);

    //* Taking the first action Movie Object and using it's its details for hero section
    const heroTv = tvList[0];
    console.log("The list of Action Movies", heroTv);

    const heroDetailsRes = await safeFetch(
      `https://api.themoviedb.org/3/tv/${heroTv.id}?append_to_response=videos,images,credits,content_ratings&language=en-US`,
      { headers },
    );

    let heroDetails = await heroDetailsRes.json();

    // console.log("This is Hero Details: ", heroDetails);

    const heroGenres = heroDetails.genres.map((genre) => {
      return genre?.name;
    });

    console.log("This is the new Genre Id: ", heroGenres);
    console.log("Tv Hero for each id: ", {
      ...heroTv,
      ...heroDetails,
      heroGenres,
    });

    return res.status(200).json({
      hero: { ...heroTv, ...heroDetails, genres: heroGenres },
      tvList,
    });
  } catch (error) {
    console.log("Error From getMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch Movies form TDMB",
    });
  }
};

export const getTv = async (req, res, next) => {
  const { genre, id } = req.params;

  try {
    const resp = await safeFetch("https://api.themoviedb.org/3/genre/tv/list", {
      headers,
    });

    const data = await resp.json();
    const tvGenres = data.genres;
    console.log("This is Movie Genres: ", tvGenres);

    let selectedGenre = tvGenres.find(
      (tv) => tv.name.toLowerCase() === genre.toLowerCase(),
    );
    // console.log("Action Genre: ", selectedGenre);

    //* requesting for Tv that falls into a particular genre using the genre id
    const tvListRes = await safeFetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre.id}`,
      { headers },
    );

    const tvListData = await tvListRes.json();
    const tvList = tvListData.results;
    console.log("The list of Action Movies", tvList.slice(0, 2));

    //* Taking the first action Movie Object and using it's its details for hero section
    const heroTv = tvList.find((tv) => parseInt(tv.id) === parseInt(id));
    // console.log("heroTv", heroTv);

    const heroDetailsRes = await safeFetch(
      `https://api.themoviedb.org/3/tv/${heroTv.id}?append_to_response=videos,images,credits,content_ratings&language=en-US`,
      { headers },
    );

    let heroDetails = await heroDetailsRes.json();

    console.log("This is Hero Details: ", heroDetails);

    const heroDetailsGenres = heroDetails.genres.map((genre) => {
      return genre?.name;
    });

    // console.log("This is the new Genre Id: ", heroDetailsGenres);
    // console.log("Backend Hero", { ...heroTv, ...heroDetails })

    return res.status(200).json({
      hero: {...heroTv, ...heroDetails, genres: heroDetailsGenres},
      tvList,
    });
  } catch (error) {
    console.log("Error From getMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch Movies form TDMB",
    });
  }
};
