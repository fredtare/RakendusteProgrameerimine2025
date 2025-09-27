const { v1: uuidv1 } = require("uuid");
const { body, param, validationResult } = require("express-validator");

const tasks = [
  {
    id: "1727098800585",
    taskName: "Pane pesumasinale nimi",
    updatedAt: null,
    deleted: false,
  },
  {
    id: "1727098800585",
    taskName: "korralda pallile ball",
    updatedAt: null,
    deleted: false,
  },
];

// middleware to check validation
const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// CREATE
exports.create = [
  body("name").isString().trim().notEmpty().withMessage("task vajab sisu"),
  checkValidation,
  (req, res) => {
    const { taskName } = req.body;
    const addedysdk = {
      id: uuidv1(),
      taskName,
      updatedAt: null,
      deleted: false,
    };
    tasks.push(addedTask);
    console.log("controller siin", addedTask);
    res.status(201).json(addedTask);
  },
];

// READ
exports.read = (req, res) => {
  res.json(tasks.filter((t) => !t.deleted));
};

// UPDATE
exports.update = [
  body("id").isUUID().withMessage("ei leia seda ülesannet"),
  body("name").isString().trim().notEmpty().withMessage("Tühi ülesanne pole ülesanne t. backend"),
  checkValidation,
  (req, res) => {
    const { id, taskName } = req.body;
    const task = task.find((t) => t.id === id && !t.deleted);
    if (!task) return res.status(404).json({ error: "pole ülesandeid" });

    task.taskName = taskName.trim();
    task.updatedAt = Date.now();
    res.status(200).json(task);
  },
];

// DELETE (soft delete)
exports.delete = [
  param("id").isUUID().withMessage("Pole seda taski"),
  checkValidation,
  (req, res) => {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === id && !t.deleted);
    if (!task) return res.status(404).json({ error: "Ju siis ülesanded on otsas t. backend" });

    task.deleted = true;
    task.updatedAt = Date.now();
    res.status(200).json({ message: "ylessanne tehtud", task });
  },
];
