export async function CatgoryData() {
  try {
    const response = await fetch("http://localhost:3000/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Category Data:", data);
    return data.resData;
  } catch (error) {
    console.error("Error fetching category data:", error.message);
  }
}

export async function QuestionsData() {
  const response = await fetch("http://localhost:3000/");

  if (!response.ok) {
    throw new Response(
      JSON.strignify({ message: "Network response was not ok" }),
      { status: 404 }
    );
  }

  const questionsData = await response.json();

  console.log("Questions Data:", questionsData);
  return questionsData.resData;
}
