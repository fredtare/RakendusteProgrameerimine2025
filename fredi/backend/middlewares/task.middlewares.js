const taskRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const taskGetRouteMiddleware = (req, res, next) => {
  next();
};

const taskUpdateRouteMiddleware = (req, res, next) => {
  const { id, name } = req.body;

  if (!id || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      error: "Update requires a valid 'id' and non-empty 'name'",
    });
  }

  console.log(`Update request for task ${id} → new name: ${name}`);
  next();
};

module.exports = { taskRouteMiddleware, taskGetRouteMiddleware, taskUpdateRouteMiddleware };