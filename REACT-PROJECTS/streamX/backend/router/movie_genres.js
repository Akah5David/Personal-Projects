import { Router } from "express";
import { getGenre } from "../controller/movie_genres.js";

const router = Router();

router.get("/movie/:genre", getGenre);

export default router;
