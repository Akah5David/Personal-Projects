import express from "express";
import auth from "../controller/auth.js";
import { body } from "express-validator";

const router = express.Router();
router.post(
  "/signup",
  [
    body("username")
      .notEmpty({ ignore_white: true })
      .withMessage("Username is required"),
  ],
  auth.signUp
);

router.post(
  "/login",
  [
    body("userEmail")
      .notEmpty({ ignore_white: true })
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
    body("userPassword")
      .notEmpty({ ignore_white: true })
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  auth.login
);

export default router;
