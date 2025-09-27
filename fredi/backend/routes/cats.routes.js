const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
  catsUpdateRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);


// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", catsController.create);
router.put("/", catsUpdateRouteMiddleware, catsController.update);
router.delete("/:id", catsController.delete);

module.exports = router;