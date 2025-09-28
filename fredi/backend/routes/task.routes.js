const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const {
  taskRouteMiddleware,
  taskGetRouteMiddleware,
  taskUpdateRouteMiddleware,
} = require("../middlewares/task.middlewares");

router.use(taskRouteMiddleware);


// 
router.get("/", taskGetRouteMiddleware, taskController.read);
router.post("/", taskController.create);
router.put("/", taskUpdateRouteMiddleware, taskController.update);
router.delete("/:id", taskController.delete);
//admin
router.get("/all", taskController.readAll);
router.patch("/:id/restore", taskController.restore);

module.exports = router;