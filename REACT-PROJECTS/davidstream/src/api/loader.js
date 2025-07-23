export async function CategoryData() {
  try {
    const response = await fetch("http://localhost:3000/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Category Data:", data.resData.categoryData);
    return { data: data.resData.categoryData, error: null };
  } catch (error) {
    console.error("Error fetching category data:", error);
    return { data: null, error: error.message };
  }
}

export async function QuestionLoader() {
  const response = await fetch("http://localhost:3000/");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Network response was not ok" }),
      { status: 404 }
    );
  }

  const data = await response.json();

  console.log("Questions Data:", data.resData.questionData);
  return data.resData.questionData;
}

async function RootDatas() {
  const categResponse = await CategoryData();
  const questionsResponse = await QuestionLoader();

  if (!categResponse || !questionsResponse) {
    throw new Response(
      JSON.stringify({ message: "Network response was not ok" }),
      { status: 404 }
    );
  }
  console.log("Root Categ Data:", categResponse.data);
  console.log("Root Quest Data:", questionsResponse);
  return { categData: categResponse.data, questionsData: questionsResponse };
}

const ComponentLoaders = {
  CategoryLoader: CategoryData,
  OuestionLoader: QuestionLoader,
  RootLoader: RootDatas,
};

export default ComponentLoaders;

//error message will be the content of throw error

//when u use throw Response useRoute error will return Response object then use resObject.json() to convert to  javascript object

//when u use throw Error useRouteError will return javascript error object  then u can access the message property of the error.
