import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Welcome to the animal app running for good…</h1>");
});

app.get("/dogs", (req, res) => {
  return res.send(["Bulldog", "Beagle", "Labrador"]);
});

app.listen(3300, () => {
  console.log("App on port 3300");
});
