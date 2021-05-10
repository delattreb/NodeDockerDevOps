/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = 3000; // process.env.PORT;

const myObj = { name: "John", age: 30, car: null };

// première route test
app.get("/", (req, res) => {
  res.send("<h2>Hi there !!</h2>");
});

// seconde route test
app.get("/user", (req, res) => {
  res.send(myObj);
});

app.listen(port, () => console.log(`Server listen on port: ${port}`));
