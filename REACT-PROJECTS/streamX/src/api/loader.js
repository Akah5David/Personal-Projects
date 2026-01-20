export async function homePage() {
  try {
    const response = await fetch("http://localhost:3000/");
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
  const response = await fetch("http://localhost:3000/questions");

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

const actionMovies = async () => {
  const res = await fetch("http://localhost:3000/action");

  if (!res.ok) {
    throw new Error("Unable to fetch the data");
  }

  const data = await res.json();
  const actionMovies = data;

  return actionMovies;
};

const ComponentLoaders = { homePage, questionLoader, actionMovies };

export default ComponentLoaders;

//error message will be the content of throw error

//when u use throw Response useRoute error will return Response object then use resObject.json() to convert to  javascript object

//when u use throw Error useRouteError will return javascript error object  then u can access the message property of the error.
