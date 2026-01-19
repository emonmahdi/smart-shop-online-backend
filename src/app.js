import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRoutes from "./modules/product/product.route.js";
import AuthRoutes from "./modules/auth/auth.route.js";
import UserRoutes from "./modules/user/user.route.js";

const app = express();

dotenv.config();
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", ProductRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
