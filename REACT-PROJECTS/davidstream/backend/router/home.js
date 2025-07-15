import getAllImages from "../controller/home.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllImages);

export default router;
