const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  next();
};

const catsUpdateRouteMiddleware = (req, res, next) => {
  const { id, name } = req.body;

  // Basic validation
  if (!id || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      error: "Update requires a valid 'id' and non-empty 'name'",
    });
  }

  console.log(`Update request for cat ${id} → new name: ${name}`);
  next();
};

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware, catsUpdateRouteMiddleware };