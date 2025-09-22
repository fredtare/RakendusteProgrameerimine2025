const express = require("express");
const app = express();
const port = 3000;

console.log("Siin .error tulemus");
console.error("Error juhtus");
  console.log("----------------------");
console.log("Siin .warn tulemus");
console.warn("Warn juhtus");
  console.log("----------------------");
console.log("Info Näide");
console.info("Teile infoks");
  console.log("----------------------");
console.log("Siin on näitetabel");
console.table([{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }]);
  console.log("----------------------");
console.log("time tulemus");
console.time("process");
  console.log("----------------------");
  console.log("timeEnd on: ");
  console.timeEnd("process");
  console.log("----------------------");
  console.log("Siin .assert tulemus kus 1 pannakse 2te");
  console.assert(1 === 2, "Assertion feilis");
  console.log("----------------------");
  console.group("mina olen grupi pea");
  console.log("Mina olen grupis");
  console.groupEnd();
  console.log("----------------------");
  console.log("Siin .count tulemus:");
  console.count("Minuluger");
  console.log("----------------------");

//GET
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//POST
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

//PUT
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

//DELETE
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})



app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
