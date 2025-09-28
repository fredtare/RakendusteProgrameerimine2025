const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "super-secret";

const ADMIN = { 
    username: "root", 
    password: "1234"
};

// POST /auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN.username) return res.status(401).json({ error: "Kasutajanimi Või Parool On Vale" });
if (password !== ADMIN.password) return res.status(401).json({ error: "Kasutajanimi Või Parool On Vale" });



  const token = jwt.sign({ role: "root", username }, SECRET, { expiresIn: "2h" });
  res.json({ token });
});

module.exports = router;
