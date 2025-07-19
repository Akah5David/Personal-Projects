import { promises as fs } from "fs";
import path from "path";

import { __dirname } from "../util/path.js";
import path from "path";

const getAllQuestions = async (req, res, next) => {
  const path = path.join(__dirname, "..", "/util/question.json");

  const jsonString = await fs.readFile(path, "utf-8");

  if (!response) {
    throw new Response(JSON.Stringify({ message: "File not found" }), {
      status: 404,
    });
  }

  const resData = await JSON.parse(response);
  console.log(resData);
  return res.status(200).json(resData);
};

export default getAllQuestions;

//when using fetch use json.parse(), when using fs to readfile use JSON.parse()
