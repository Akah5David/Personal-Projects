import { promises as fs } from "fs";
import { __dirname } from "../util/path.js";

console.log("directory name", __dirname); // returns the directory(util) of path.js file where __dirname is defined
const getHomefiles = async (req, res) => {
  try {
    
    const categoryPromise = await fs.readFile(
      __dirname + "/category.json",
      "utf-8"
    );

    const questionsPromise = await fs.readFile(
      __dirname + "/question.json",
      "utf-8"
    );

    if (!categoryPromise || !questionsPromise) {
      throw new Error("File not found");
    }

    const categoryData = JSON.parse(categoryPromise);
    const questionData = JSON.parse(questionsPromise);

    const resData = {
      categoryData,
      questionData,
    };

    // console.log("Response Data:", resData);

    return res.status(200).json({ resData });
  } catch (error) {
    console.error("Error reading file:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to read the file",
    });
  }
};

export default getHomefiles;
