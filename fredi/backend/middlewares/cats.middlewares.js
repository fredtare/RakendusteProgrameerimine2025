const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("middleware siin");
  next();
};

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware };