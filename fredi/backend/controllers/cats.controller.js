const { v4: uuidv4 } = require("uuid");
const { body, param, validationResult } = require("express-validator");

const cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
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
  body("name").isString().trim().notEmpty().withMessage("Name must be a non-empty string"),
  checkValidation,
  (req, res) => {
    const { name } = req.body;
    const addedCat = {
      id: uuidv4(),
      name,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
    cats.push(addedCat);
    console.log("controller siin", addedCat);
    res.status(201).json(addedCat);
  },
];

// READ
exports.read = (req, res) => {
  res.json(cats.filter((c) => !c.deleted));
};

// UPDATE
exports.update = [
  body("id").isUUID().withMessage("Invalid cat ID"),
  body("name").isString().trim().notEmpty().withMessage("Name must be a non-empty string"),
  checkValidation,
  (req, res) => {
    const { id, name } = req.body;
    const cat = cats.find((c) => c.id === id && !c.deleted);
    if (!cat) return res.status(404).json({ error: "Cat not found" });

    cat.name = name.trim();
    cat.updatedAt = Date.now();
    res.status(200).json(cat);
  },
];

// DELETE (soft delete)
exports.delete = [
  param("id").isUUID().withMessage("Invalid cat ID"),
  checkValidation,
  (req, res) => {
    const { id } = req.params;
    const cat = cats.find((c) => c.id === id && !c.deleted);
    if (!cat) return res.status(404).json({ error: "Cat not found" });

    cat.deleted = true;
    cat.updatedAt = Date.now();
    res.status(200).json({ message: "Cat marked as deleted", cat });
  },
];
