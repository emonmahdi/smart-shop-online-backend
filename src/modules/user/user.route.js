import express from "express";
import protect from "../../middlewares/auth.middleware.js";
import adminOnly from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.json({ message: "User profile", user: req.user });
});

router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin dashboard" });
});

export default router;
