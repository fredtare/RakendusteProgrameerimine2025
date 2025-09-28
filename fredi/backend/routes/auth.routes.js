const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "super-secret";

// For demo, a single hard-coded admin user
const ADMIN = { username: "root", passwordHash: "1234"};

// POST /auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN.username) return res.status(401).json({ error: "Kasutajanimi Või Parool On Vale" });

  const ok = await bcrypt.compare(password, ADMIN.passwordHash);
  if (!ok) return res.status(401).json({ error: "Kasutajanimi Või Parool On Vale" });

  const token = jwt.sign({ role: "admin", username }, SECRET, { expiresIn: "2h" });
  res.json({ token });
});

module.exports = router;
