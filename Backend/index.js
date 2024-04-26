import authRoutes from "./routes/auth.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import express from "express";

const app = express();
//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.listen(8800, () => {
  console.log("API working!");
});
