import express from "express";
import userRoutes from "../src/routes/userRoutes.js";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import constant from "./config/constant.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDb();

app.get("/", (req, res) => {
  res.status(200).send("<b><a style='color: white; background: black; padding: 2px'>Hello</a>, Welcome to my app!</b>");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);

const port = constant.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
