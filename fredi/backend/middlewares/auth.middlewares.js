const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "super-secret";

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Missing token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    if (decoded.role !== "root") throw new Error("Not admin");
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = { requireAdmin };
