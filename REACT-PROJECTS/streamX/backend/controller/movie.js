import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getHomeFiles } from "./home.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);

import { safeFetch } from "../util/safeFetch.js";
import { delay } from "framer-motion";

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
    const reqParams = req.params;
    console.log("reqParams: ", reqParams);

    let selectedGenre = movieGenres.find(
      (movie) => movie.name.toLowerCase() === reqParams.genre.toLowerCase(),
    );

    console.log("selectedGenre: ", selectedGenre);

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

export const nowPlaying = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };

  try {
    const movieId = parseInt(req.params.id);
    console.log("Movie Id: ", movieId);

    //* Fetching the list of now playing movies
    const nowPlayingRes = await safeFetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      { headers },
    );

    const resData = await nowPlayingRes.json();
    const nowPlayingList = resData.results;

    console.log("Now Playing List: ", nowPlayingList);

    const clickedMovie = nowPlayingList.find((movie) => movie?.id === movieId);
    console.log("clickedMovie: ", clickedMovie);

    //* Fetching the details of the clicked movie Id
    const clickedMovieRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${clickedMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers },
    );

    let clicked_movie_details = await clickedMovieRes.json();
    console.log("This is Hero Details: ", clicked_movie_details);

    const formattedGenre = clicked_movie_details.genres.map(
      (genre) => genre.name,
    );

    console.log("formattedGenre: ", formattedGenre);

    return res.status(200).json({
      hero: { ...clicked_movie_details, genres: formattedGenre },
      nowPlaying: nowPlayingList,
    });
  } catch (error) {
    console.log("Error From getActionMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch ActionMovies form TDMB",
    });
  }
};
export const popular = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };

  try {
    const movieId = parseInt(req.params.id);
    console.log("Movie Id: ", movieId);

    //* Fetching the list of now playing movies
    const nowPlayingRes = await safeFetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      { headers },
    );

    const resData = await nowPlayingRes.json();
    const nowPlayingList = resData.results;

    console.log("Now Playing List: ", nowPlayingList);

    const clickedMovie = nowPlayingList.find((movie) => movie?.id === movieId);
    console.log("clickedMovie: ", clickedMovie);

    //* Fetching the details of the clicked movie Id
    const clickedMovieRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${clickedMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers },
    );

    let clicked_movie_details = await clickedMovieRes.json();
    console.log("This is Hero Details: ", clicked_movie_details);

    const formattedGenre = clicked_movie_details.genres.map(
      (genre) => genre.name,
    );

    console.log("formattedGenre: ", formattedGenre);

    return res.status(200).json({
      hero: { ...clicked_movie_details, genres: formattedGenre },
      popular: nowPlayingList,
    });
  } catch (error) {
    console.log("Error From getActionMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch ActionMovies form TDMB",
    });
  }
};

//* Upcoming
export const upComing = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };

  try {
    const movieId = parseInt(req.params.id);
    console.log("Movie Id: ", movieId);

    //* Fetching the list of now playing movies
    const nowPlayingRes = await safeFetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      { headers },
    );

    const resData = await nowPlayingRes.json();
    const nowPlayingList = resData.results;

    console.log("Now Playing List: ", nowPlayingList);

    const clickedMovie = nowPlayingList.find((movie) => movie?.id === movieId);
    console.log("clickedMovie: ", clickedMovie);

    //* Fetching the details of the clicked movie Id
    const clickedMovieRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${clickedMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers },
    );

    let clicked_movie_details = await clickedMovieRes.json();
    console.log("This is Hero Details: ", clicked_movie_details);

    const formattedGenre = clicked_movie_details.genres.map(
      (genre) => genre.name,
    );

    console.log("formattedGenre: ", formattedGenre);

    return res.status(200).json({
      hero: { ...clicked_movie_details, genres: formattedGenre },
      upComing: nowPlayingList,
    });
  } catch (error) {
    console.log("Error From getActionMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch ActionMovies form TDMB",
    });
  }
};


//* Top Rated
export const topRated = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };

  try {
    const movieId = parseInt(req.params.id);
    console.log("Movie Id: ", movieId);

    //* Fetching the list of now playing movies
    const nowPlayingRes = await safeFetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      { headers },
    );

    const resData = await nowPlayingRes.json();
    const nowPlayingList = resData.results;

    console.log("Now Playing List: ", nowPlayingList);

    const clickedMovie = nowPlayingList.find((movie) => movie?.id === movieId);
    console.log("clickedMovie: ", clickedMovie);

    //* Fetching the details of the clicked movie Id
    const clickedMovieRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${clickedMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers },
    );

    let clicked_movie_details = await clickedMovieRes.json();
    console.log("This is Hero Details: ", clicked_movie_details);

    const formattedGenre = clicked_movie_details.genres.map(
      (genre) => genre.name,
    );

    console.log("formattedGenre: ", formattedGenre);

    return res.status(200).json({
      hero: { ...clicked_movie_details, genres: formattedGenre },
      topRated: nowPlayingList,
    });
  } catch (error) {
    console.log("Error From getActionMovies: ", error);
    return res.status(502).json({
      error: error.message,
      message: "Unable to Fetch ActionMovies form TDMB",
    });
  }
};


