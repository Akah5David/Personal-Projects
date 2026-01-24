import { Router } from "express";
import { getGenre } from "../controller/tv.js";


const router = Router();

router.get("/tv/:genre", getGenre);

export default router
