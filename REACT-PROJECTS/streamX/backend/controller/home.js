import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);

import { safeFetch } from "../util/safeFetch.js";

// TODO I will Review the getHomeFiles since i don't understand what happened there.
export const getHomeFiles = async (req, res, next) => {
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    };

    // Helper to delay between requests
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Fetch critical endpoints first with delays
    const movieGenreRes = await safeFetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      { headers },
    );
    await delay(500);

    const tvGenreRes = await safeFetch(
      "https://api.themoviedb.org/3/genre/tv/list?language=en",
      { headers },
    );
    await delay(500);

    // Fetch optional data concurrently (only 3 at a time)
    const optionalResults = await Promise.allSettled([
      safeFetch("https://api.themoviedb.org/3/movie/popular?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/tv/popular?page=1", { headers }),
      safeFetch("https://api.themoviedb.org/3/movie/top_rated?page=1", {
        headers,
      }),
    ]);
    await delay(500);

    const remainingResults = await Promise.allSettled([
      safeFetch("https://api.themoviedb.org/3/movie/upcoming?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/movie/now_playing?page=1", {
        headers,
      }),
    ]);

    // Combine results
    const [popularMoviesRes, popularTvRes, topRatedMoviesRes] =
      optionalResults.map((r) => (r.status === "fulfilled" ? r.value : null));
    const [upComingMoviesRes, nowPlayingMoviesRes] = remainingResults.map(
      (r) => (r.status === "fulfilled" ? r.value : null),
    );

    // Parse critical data
    const movieGenres = await movieGenreRes.json();
    const tvGenres = await tvGenreRes.json();
    const popularMovies = popularMoviesRes
      ? await popularMoviesRes.json()
      : { results: [] };
    const popularTvs = popularTvRes
      ? await popularTvRes.json()
      : { results: [] };
    const topRatedMovies = topRatedMoviesRes
      ? await topRatedMoviesRes.json()
      : { results: [] };
    const upComingMovies = upComingMoviesRes
      ? await upComingMoviesRes.json()
      : { results: [] };
    const nowPlayingMovies = nowPlayingMoviesRes
      ? await nowPlayingMoviesRes.json()
      : { results: [] };

    // Rest of your code...
    const movieGenreCards = await Promise.allSettled(
      movieGenres.genres.map(async (genre) => {
        const moviesRes = await safeFetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&sort_by=popularity.desc`,
          { headers },
        );
        const data = await moviesRes.json();
        const movie = data.results?.[0];

        return {
          ...genre,
          image: movie?.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : null,
        };
      }),
    );

    const filteredMovieGenres = movieGenreCards
      .filter((r) => r.status === "fulfilled")
      .map((r) => r.value);

    const tvGenreCards = await Promise.allSettled(
      tvGenres.genres.map(async (genre) => {
        const tvRes = await safeFetch(
          `https://api.themoviedb.org/3/discover/tv?with_genres=${genre.id}&sort_by=popularity.desc`,
          { headers },
        );
        const data = await tvRes.json();
        const tv = data.results?.[0];

        return {
          ...genre,
          image: tv?.poster_path
            ? `https://image.tmdb.org/t/p/original${tv.poster_path}`
            : null,
        };
      }),
    );

    const filteredTvGenres = tvGenreCards
      .filter((r) => r.status === "fulfilled")
      .map((r) => r.value);

    const resData = {
      movieGenres: filteredMovieGenres,
      tvGenres: filteredTvGenres,
      popularMovies: popularMovies.results,
      popularTvs: popularTvs.results,
      topRatedMovies: topRatedMovies.results,
      upComingMovies: upComingMovies.results,
      nowPlayingMovies: nowPlayingMovies.results,
    };

    console.log("Response Data:\n", resData);
    return res.status(200).json(resData);
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return res.status(502).json({
      error: error.message,
      message: "Failed to read data from TMDB",
    });
  }
};

//Reading Data from question.json file in util folder
// Todo: I will work on Scaling it by Moving it to the database later
export const Questions = async (req, res, next) => {
  try {
    const questionsPromise = await fs.readFile(
      path.join(__dirname, "..", "util", "question.json"),
      "utf-8",
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

