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

    // Fetch Movie List concurrently (only 3 at a time)
    const optionalResults = await Promise.allSettled([
      safeFetch("https://api.themoviedb.org/3/movie/popular?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/movie/top_rated?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/movie/upcoming?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/movie/now_playing?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/trending/movie/day?page=1", {
        headers,
      }),
    ]);

    await delay(500);

    // Fetch All TV Series Lists concurrently (only 3 at a time)
    const TVSeriesResult = await Promise.allSettled([
      safeFetch("https://api.themoviedb.org/3/tv/airing_today?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/tv/on_the_air?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/tv/popular?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/tv/top_rated?page=1", {
        headers,
      }),
      safeFetch("https://api.themoviedb.org/3/trending/tv/day?page=1", {
        headers,
      }),
    ]);

    await delay(500);

    // Fetch Trending Movies and TV concurrently (only 3 at a time)
    const TrendingRequest = await Promise.allSettled([]);

    // Extracting the response of Movie Lists request
    const [
      popularMoviesRes,
      topRatedMoviesRes,
      upComingMoviesRes,
      nowPlayingMoviesRes,
      trendingMovieRes,
    ] = optionalResults.map((r) => (r.status === "fulfilled" ? r.value : null));

    //Extracting TV series response if Successful
    const [
      airingTodayTVRes,
      onTheAirTVRes,
      popularTVRes,
      topRatedTVRes,
      trendingTVRes,
    ] = TVSeriesResult.map((r) => (r.status === "fulfilled" ? r.value : null));
    console.log("TV series List: ", {
      airingTodayTVRes,
      onTheAirTVRes,
      popularTVRes,
      topRatedTVRes,
      trendingTVRes,
      trendingMovieRes,
    });

    //Parse the Trending Responses

    console.log("Trending List: ", {
      trendingMovies,
      trendingTvs,
    });

    // Parse critical movie data
    const movieGenres = await movieGenreRes.json();
    const popularMovies = popularMoviesRes
      ? await popularMoviesRes.json()
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
    const trendingMovies = trendingMovieRes
      ? trendingMovieRes.json()
      : { results: [] };

    // Parsing critical TV data
    const tvGenres = await tvGenreRes.json();
    const airingTodayTV = airingTodayTVRes
      ? await airingTodayTVRes.json()
      : { results: [] };
    const onTheAirTV = onTheAirTVRes
      ? await onTheAirTVRes.json()
      : { results: [] };
    const popularTV = popularTVRes
      ? await popularTVRes.json()
      : { results: [] };
    const topRatedTV = topRatedTVRes
      ? await topRatedTVRes.json()
      : { results: [] };
    const trendingTvs = trendingTVRes ? trendingTVRes.json() : { results: [] };

    console.log("parsed TV series List: ", {
      airingTodayTV,
      onTheAirTV,
      popularTV,
      topRatedTV,
      trendingTvs,
      trendingMovies,
    });

    // Rest of your code...
    const movieGenreCards = await Promise.allSettled(
      movieGenres.genres.map(async (genre) => {
        const moviesRes = await safeFetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
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
          `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
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
      movie: {
        movieGenres: filteredMovieGenres,
        popularMovies: popularMovies.results,
        topRatedMovies: topRatedMovies.results,
        upComingMovies: upComingMovies.results,
        nowPlayingMovies: nowPlayingMovies.results,
        trendingMovies: trendingMovies.results,
      },
      tv: {
        tvGenres: filteredTvGenres,
        tvSeries: {
          airingTodayTv: airingTodayTV.results,
          onTheAirTv: onTheAirTV.results,
          popularTv: popularTV.results,
          topRatedTv: topRatedTV.results,
          trendingTvShows: trendingTvs.results,
        },
      },
      trending: {
        trendingMovies: trendingMovies.results,
        trendingTvShows: trendingTvs.results,
      },
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
