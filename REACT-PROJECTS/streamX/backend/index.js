import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import homeRouter from "./router/home.js";
import authRouter from "./router/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Server directory:", __dirname); // Log the server directory
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/auth", authRouter);
app.use(homeRouter);
// app.use(questionRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
