const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/date", (req, res) => {
  const date = new Date();
  res.send(date.toString());
});

app.listen(port, () => console.log(`Example app listening at ${port}`));
