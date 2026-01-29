import { Router } from "express";
import { getGenre, nowPlaying, upComing, topRated, popular, getMovie } from "../controller/movie.js";

const router = Router();

router.get("/movie/:genre", getGenre);
router.get("/movie/:genre/:id", getMovie);
router.get("/nowPlaying/:id", nowPlaying);
router.get("/upComing/:id", upComing);
router.get("/popular/:id", popular);
router.get("/topRated/:id", topRated);

export default router;
