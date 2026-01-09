// import { promises as fs } from "fs";
// import path from "path";

// import { __dirname } from "../util/path.js";

// const getAllQuestions = async (req, res, next) => {


//   if (!response) {
//     throw new Response(JSON.Stringify({ message: "File not found" }), {
//       status: 404,
//     });
//   }

//   const resData = await JSON.parse(jsonString);
//   console.log(resData);
//   return res.status(200).json(resData);
// };

// export default getAllQuestions;

//when using fetch use json.parse(), when using fs to readfile use JSON.parse()

// export async function getAllQuestions(req, res, next) {
//   const jsonFilePath = path.join(__dirname, "..", "/util/question.json");

//   const jsonString = await fs.readFile(jsonFilePath, "utf-8");

//   if (!response) {
//     throw new Response(JSON.Stringify({ message: "File not found" }), {
//       status: 404,
//     });
//   }

//   const resData = await JSON.parse(jsonString);
//   console.log(resData);
//   return res.status(200).json(resData);
// }
