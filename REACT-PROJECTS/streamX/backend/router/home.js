import { Router } from "express";
import { getHomeFiles, Questions } from "../controller/home.js";

const router = Router();

router.get("/home", getHomeFiles);
router.get("/questions", Questions);

export default router;
