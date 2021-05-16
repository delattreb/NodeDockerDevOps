import express from "express";
interface Player {
  id: number;
  name: string;
  team: number;
}

const app = express();
const port = 3000;
let user = { name: "Bruno", age: 45, sex: "M" };
let p1: Player = { id: 0, name: "Bruno", team: 12 };

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.get("/player", (req, res) => {
  res.send(p1);
});

app.listen(port);
console.log("Server listen on port: " + port);

app.on("error", onError);

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }
}
