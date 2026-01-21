import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import homeRouter from "./router/home.js";
import authRouter from "./router/auth.js";
import movieGenreRouter from "./router/movie_genres.js";
import tvGenreRouter from "./router/tv_genres.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//  Middleware
app.use(express.json());
app.use(cors());

//  API Routes (must come BEFORE static files)
app.use("/auth", authRouter);
app.use("/api", homeRouter);
app.use("/api", movieGenreRouter);
app.use("/api", tvGenreRouter);

// Path to React build
const distPath = path.join(__dirname, "../dist"); // Adjust if needed

//  Serve React static files (CSS, JS, images)
app.use(express.static(distPath));

// React Router fallback - serve index.html for all non-API routes
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Error handling
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});


//  Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
