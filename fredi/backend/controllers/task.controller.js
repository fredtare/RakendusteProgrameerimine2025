const tasks = [
  {
    id: "1",
    taskName: "Sample Task",
    updatedAt: null,
    deleted: false,
  },
];

const { v4: uuidv4 } = require("uuid");

exports.create = (req, res) => {
  const { taskName } = req.body;

  if (typeof taskName !== "string" || taskName.trim() === "") {
    return res.status(400).json({ error: "Task name must be a non-empty string" });
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

exports.read = (req, res) => {
  const activeTasks = tasks.filter((task) => !task.deleted);
  res.status(200).json(activeTasks);
};

exports.update = (req, res) => {
  const { id, taskName } = req.body;

  const task = tasks.find((t) => t.id === id && !t.deleted);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (typeof taskName !== "string" || taskName.trim() === "") {
    return res.status(400).json({ error: "Task name must be a non-empty string" });
  }

  task.taskName = taskName.trim();
  task.updatedAt = Date.now();

  res.status(200).json(task);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === id && !t.deleted);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.deleted = true;
  res.status(200).json({ message: "Task marked as deleted", task });
};