import { API_BASE } from "../config/api";

export async function homePage() {
  console.log("API URL:", API_BASE);

  try {
    const response = await fetch(`${API_BASE}/api/home`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Overall Data:", data);
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching category data:", error);

    // Return safe defaults instead of null
    return {
      data: {
        movieGenres: [],
        tvGenres: [],
        popularMovies: [],
        popularTvs: [],
        topRatedMovies: [],
        upComingMovies: [],
        nowPlayingMovies: [],
      },
      error: error.message,
    };
  }
}

export async function questionLoader() {
  const response = await fetch(`${API_BASE}/api/questions`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Network response was not ok" }),
      { status: 404 },
    );
  }

  const data = await response.json();

  console.log("Questions Data:", data.questionData);
  return data.questionData;
}

const movies = async ({ params }) => {
  const dynamicUrl = params.id ? `${params.genre}/${params.id}` : params.genre;

  console.log("dynamicUrl: ", dynamicUrl);
  const res = await fetch(`${API_BASE}/api/movie/${dynamicUrl}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  console.log("movies loader", data);

  return data;
};

const tvGenres = async ({ params }) => {
  const { genre, id } = params;
  const dynamicRoute = id ? `${genre}/${id}` : genre;

  console.log("dynamicRoute", dynamicRoute)
  const res = await fetch(`${API_BASE}/api/tv/${dynamicRoute}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();

  return data;
};

const nowPlaying = async ({ params }) => {
  console.log("Params: ", params.id);
  const res = await fetch(`${API_BASE}/api/nowPlaying/${params.id}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  const nowPlaying = data;

  console.log("NowPlaying: ", nowPlaying);

  return nowPlaying;
};

//*Top Rated
const topRated = async ({ params }) => {
  console.log("Params: ", params.id);
  const res = await fetch(`${API_BASE}/api/topRated/${params.id}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  const topRated = data;

  console.log("NowPlaying: ", topRated);

  return topRated;
};

//*UpComing
const upComing = async ({ params }) => {
  console.log("Params: ", params.id);
  const res = await fetch(`${API_BASE}/api/upComing/${params.id}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  const upComing = data;

  console.log("NowPlaying: ", upComing);

  return upComing;
};

//*Popular
const popular = async ({ params }) => {
  console.log("Params: ", params.id);
  const res = await fetch(`${API_BASE}/api/popular/${params.id}`);

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  const popular = data;

  console.log("NowPlaying: ", popular);

  return popular;
};

const ComponentLoaders = {
  homePage,
  questionLoader,
  movies,
  tvGenres,
  nowPlaying,
  topRated,
  popular,
  upComing,
};

export default ComponentLoaders;

//error message will be the content of throw error

//when u use throw Response useRouteError will return Response object then use resObject.json() to convert to  javascript object

//when u use throw Error useRouteError will return javascript error object  then u can access the message property of the error.
