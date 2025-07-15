export default async function CatgoryData() {
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
