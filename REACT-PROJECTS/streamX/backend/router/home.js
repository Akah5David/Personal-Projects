import {
  getHomeFiles,
  Questions,
  getActionMovies,
} from "../controller/home.js";
import { Router } from "express";

const router = Router();

router.get("/", getHomeFiles);
router.get("/questions", Questions);
router.get("/action", getActionMovies);

export default router;
