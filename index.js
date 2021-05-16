"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var user = { name: "Bruno", age: 45, sex: "M" };
var p1 = { id: 0, name: "Bruno", team: 56 };
app.get("/", function (req, res) {
    res.send("Hi there Salut");
});
app.get("/user", function (req, res) {
    res.send(user);
});
app.get("/player", function (req, res) {
    res.send(p1);
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
