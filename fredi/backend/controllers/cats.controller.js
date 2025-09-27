
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

const {v4: uuidv4} = require("uuid");

exports.create = (req, res) => {
      const { name } = req.body;
    const addedCat = {
      id: uuidv4(),
      name,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    }

    cats.push(addedCat);


    console.log("controller siin", addedCat);
    res.sendStatus(201);
};

exports.read = (req, res) => {
    res.send(cats);
  }

exports.update = (req, res) => {
  const { id, name } = req.body;

  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return res.status(404).json({ error: "Cat not found" });
  }

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Name must be a non-empty string" });
  }

  cat.name = name.trim();
  cat.updatedAt = Date.now();

  res.status(200).json(cat);
};


exports.delete = (req, res) => {};