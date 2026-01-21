import { Router } from "express";
import { getGenre } from "../controller/tv_genres.js";


const router = Router();

router.get("/tv/:genre", getGenre);

export default router
