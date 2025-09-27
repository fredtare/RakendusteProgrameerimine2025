const express = require("express");
const router = express.Router();
const catsController = require("../controllers/task.controller");
const {
  taskRouteMiddleware,
  taskGetRouteMiddleware,
  taskUpdateRouteMiddleware,
} = require("../middlewares/task.middlewares");

router.use(taskRouteMiddleware);


// /cats/ Get endpoint level middleware
router.get("/", taskGetRouteMiddleware, taskController.read);
router.post("/", taskController.create);
router.put("/", taskUpdateRouteMiddleware, taskController.update);
router.delete("/:id", taskController.delete);

module.exports = router;