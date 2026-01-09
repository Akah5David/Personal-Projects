import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);

import { safeFetch } from "../util/safeFetch.js";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import { json } from "stream/consumers";

export const getHomeFiles = async (req, res, next) => {
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    };

    // Fetch movie and TV genres concurrently
    const [
      movieGenreRes,
      tvGenreRes,
      popularMoviesRes,
      topRatedMoviesRes,
      upComingMoviesRes,
      nowPlayingMoviesRes,
    ] = await Promise.all([
      safeFetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/genre/tv/list?language=en", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/movie/popular", { headers }),
      safeFetch("https://api.themoviedb.org/3/movie/top_rated", { headers }),
      safeFetch("https://api.themoviedb.org/3/movie/upcoming", { headers }),
      safeFetch("https://api.themoviedb.org/3/movie/now_playing", { headers }),
    ]);

    if (
      !movieGenreRes.ok ||
      !tvGenreRes.ok ||
      !popularMoviesRes.ok ||
      !topRatedMoviesRes.ok ||
      !upComingMoviesRes.ok ||
      !nowPlayingMoviesRes.ok
    ) {
      throw new Error("Failed to fetch genres");
    }

    const movieGenres = await movieGenreRes.json();
    const tvGenres = await tvGenreRes.json();
    const popularMovies = await popularMoviesRes.json();
    const topRatedMovies = await topRatedMoviesRes.json();
    const upComingMovies = await upComingMoviesRes.json();
    const nowPlayingMovies = await nowPlayingMoviesRes.json();

    // ! searching for movies according to genre Id
    const movieGenreCards = await Promise.all(
      movieGenres.genres.map(async (genre) => {
        const moviesRes = await safeFetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&sort_by=popularity.desc`,
          { headers }
        );

        if (!moviesRes.ok) {
          throw new Error("Failed to Fetch Data");
        }

        const data = await moviesRes.json();
        const movie = data.results?.[0];

        return {
          ...genre,
          image: movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : null,
        };
      })
    );

    // ! searching for tv according to genre Id
    const tvGenreCards = await Promise.all(
      tvGenres.genres.map(async (genre) => {
        const tvRes = await safeFetch(
          `https://api.themoviedb.org/3/discover/tv?with_genres=${genre.id}&sort_by=popularity.desc`,
          { headers }
        );

        if (!tvRes.ok) {
          throw new Error("Failed to Fetch Data");
        }

        const data = await tvRes.json();
        const tv = data.results?.[0];

        return {
          ...genre,
          image: tv?.poster_path
            ? `https://image.tmdb.org/t/p/original${tv.backdrop_path}`
            : null,
        };
      })
    );

    const resData = {
      movieGenres: movieGenreCards,
      tvGenres: tvGenreCards,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      upComingMovies: upComingMovies.results,
      nowPlayingMovies: nowPlayingMovies.results,
    };

    console.log("Response Data:\n", resData);

    return res.status(200).json(resData);
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return res.status(502).json({
      error: "TMDB service unavailable",
      message: "Failed to read data from TDMB",
    });
  }
};

//Reading Data from question.json file in util folder
// Todo: I will work on Scaling it by Moving it to the database later
export const Questions = async (req, res, next) => {
  try {
    const questionsPromise = await fs.readFile(
      path.join(__dirname, "..", "util", "question.json"),
      "utf-8"
    );

    if (!questionsPromise) {
      throw new Error("File not found");
    }

    const questionData = JSON.parse(questionsPromise);

    console.log("Response Data:", questionData);

    return res.status(200).json({ questionData });
  } catch (error) {
    console.error("Error reading file:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to read the file",
    });
  }
};

export const getActionMovies = async (req, res, next) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
  };

  try {
    const resp = await safeFetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        headers,
      }
    );

    const data = await resp.json();
    const movie = data.genres;

    // console.log("This is Movie Genres: ", movie);

    const movieRes = await safeFetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${movie[0].id}`,
      { headers }
    );
    const movieResData = await movieRes.json();
    const actionMovies = movieResData.results;
    // console.log("The list of Action Movies", actionMovies);

    const heroMovie = actionMovies[0];

    const heroDetailsRes = await safeFetch(
      `https://api.themoviedb.org/3/movie/${heroMovie.id}?append_to_response=videos,images,credits,release_dates`,
      { headers }
    );

    let heroDetails = await heroDetailsRes.json()

    
    console.log("This is Hero Details: ", heroDetails);

    const newGenreId = heroMovie["genre_ids"]
      .map((genreId) => {
        const genre = movie.find((g) => genreId === g.id);
        return genre?.name;
      })
      .filter(Boolean);

    console.log("This is the new Genre Id: ", newGenreId);

    return res.status(200).json({
      hero: { ...heroMovie, ...heroDetails, genre_ids: newGenreId },
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
