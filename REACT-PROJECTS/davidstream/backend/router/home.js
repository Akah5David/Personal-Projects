import { getHomefiles } from "../controller/home.js";
import { Router } from "express";

const router = Router();

router.get("/", getHomefiles);

export default router;
