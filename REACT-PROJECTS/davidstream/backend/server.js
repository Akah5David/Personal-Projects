import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

import { __dirname } from "./util/path.js";
import homeRouter from "./router/home.js";
import questionRouter from "./router/question.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(homeRouter);
app.use(questionRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
