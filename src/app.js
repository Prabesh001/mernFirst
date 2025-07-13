import express from "express";
import { createUser } from "../src/controller/userController.js";
import userRoutes from "../src/routes/userRoutes.js";
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import cookieParser from "cookie-parser";

configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// const express = require('express')

connectDb();

app.get("/", (req, res) => {
  res.status(200).json({
    message: " this is thsw app.js",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`The port is running in the${port}`);
});
