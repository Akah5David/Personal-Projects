import express from "express";

import getAllQuestions from "../controller/question";

const router = express.Router();

router.get("/", getAllQuestions);

export default router;
