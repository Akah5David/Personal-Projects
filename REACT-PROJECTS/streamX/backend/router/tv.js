import { Router } from "express";
import { getGenre, getTv } from "../controller/tv.js";


const router = Router();

router.get("/tv/:genre", getGenre);
router.get("/tv/:genre/:id", getTv);

export default router
