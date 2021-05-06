const express = require("express");

const app = express();
const port = 3000; // process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h2>Hi there!!!</h2>");
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listen on port ${port}`));
