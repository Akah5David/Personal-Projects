import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("controller directory:", __dirname);
// Log the file path for debugging
export const getHomefiles = async (req, res, next) => {
  try {
    const categoryPromise = await fs.readFile(
      path.join(__dirname, "..", "util", "category.json"),
      "utf-8"
    );

    const questionsPromise = await fs.readFile(
      path.join(__dirname, "..", "util", "question.json"),
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

    console.log("Response Data:", resData);

    return res.status(200).json({ resData });
  } catch (error) {
    console.error("Error reading file:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to read the file",
    });
  }
};
