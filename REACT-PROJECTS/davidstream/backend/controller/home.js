import { promises as fs } from "fs";

import { __dirname } from "../util/path.js";

const getAllImages = async (req, res) => {
  try {
    const response = await fs.readFile(__dirname + "/category.json", "utf-8");

    if (!response) {
      throw new Error("File not found");
    }

    const resData = JSON.parse(response);
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

export default getAllImages;
