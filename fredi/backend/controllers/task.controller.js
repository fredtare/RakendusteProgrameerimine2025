const tasks = [
  {
    id: "1",
    taskName: "Poleeri Keeglikuule",
    updatedAt: null,
    deleted: false,
  },
    {
    id: "2",
    taskName: "Vii rembranti maal louvre tagasi",
    updatedAt: null,
    deleted: false,
  },
];

const { v4: uuidv4 } = require("uuid");

//PUT
exports.create = (req, res) => {
  const { taskName } = req.body;

  if (typeof taskName !== "string" || taskName.trim() === "") {
    return res.status(400).json({ error: "ülesande sisu puudub" });
  }

  const newTask = {
    id: uuidv4(),
    taskName: taskName.trim(),
    updatedAt: null,
    deleted: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

//GET
exports.read = (req, res) => {
  const activeTasks = tasks.filter((task) => !task.deleted);
  res.status(200).json(activeTasks);
};

//PATCH
exports.update = (req, res) => {
  const { id, taskName } = req.body;

  const task = tasks.find((t) => t.id === id && !t.deleted);

  if (!task) {
    return res.status(404).json({ error: "ülesannet ei leitud" });
  }

  if (typeof taskName !== "string" || taskName.trim() === "") {
    return res.status(400).json({ error: "ülesande sisu puudub" });
  }

  task.taskName = taskName.trim();
  task.updatedAt = Date.now();

  res.status(200).json(task);
};

//DELET
exports.delete = (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === id && !t.deleted);

  if (!task) {
    return res.status(404).json({ error: "ülesannet ei leitud" });
  }

  task.deleted = true;
  res.status(200).json({ message: "ülesanne tehtud!", task });
};

//REVERT - ADMIN ONLY
exports.restore = [
  param("id").isUUID().withMessage("ülesannet ei leitud, vale ID"),
  checkValidation,
  (req, res) => {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === id);
    if (!task) return res.status(404).json({ error: "ülesannet ei leitud" });

    task.deleted = false;
    task.updatedAt = Date.now();
    res.status(200).json({ message: "Task prügikastist välja korjatud", task });
  },
];

//GET ALL - admin only
exports.readAll = (req, res) => {
  res.json(tasks);  
};