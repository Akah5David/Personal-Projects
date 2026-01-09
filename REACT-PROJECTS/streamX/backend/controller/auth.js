import pool from "../util/database.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const signUp = async (req, res, next) => {
  //checking what result the validation to signup route gave us.
  const errors = validationResult(req);
  console.log("Validation errors:", errors);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
  }

  const userName = req.body.userName;
  const userPassword = req.body.userPassword;
  const userEmail = req.body.userEmail;
  const saltRounds = 10;

  const [existing] = await pool.execute(
    "SELECT email FROM users WHERE email = ?",
    [userEmail]
  );

  if (existing.length > 0) {
    const error = new Error("User already exists with this email");
    error.status = 422;
    return next(error);
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(userPassword, salt);

  const values = [userName, userEmail, hashedPassword];
  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

  try {
    //query the database to add the user
    const [result] = await pool.execute(sql, values);
    console.log("User registered values:", result);

    res.status(201).json({
      message: "User registered successfully",
      singUpUser: { id: result.insertId.toString(), userName, userEmail },
    });
  } catch (err) {
    const error = new Error("Database query error");
    error.status = 500;
    error.data = err.message;
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    //login logic here
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    //query the database to check if the user exists
    const [verifyUser] = await pool.execute(
      "SELECT * FROM users WHERE email = ?",
      [userEmail]
    );

    if (verifyUser.length === 0) {
      const error = new Error("User not found with this email");
      error.status = 401;
      return next(error);
    }

    //compare the password
    const passwordMatch = await bcrypt.compare(
      userPassword,
      verifyUser[0].password
    );

    if (!passwordMatch) {
      const error = new Error("Invalid password");
      error.status = 401;
      return next(error);
    }

    //generate JWT token
    const token = jwt.sign(
      { email: userEmail, id: verifyUser[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookies("accessToken", token, {
      httpOnly: true,
      secure: false, // true only on HTTPS
      sameSite: "lax",
    });
    res.status(200).json({
      message: "Login successful",
    });
  } catch (err) {}
};

const auth = { signUp, login };

export default auth;
