import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Welcome to the animal app running for good…</h1>");
});

app.get("/dogs", function (req, res) {
  return res.send("Dogs go brk brk");
});

// this will never get matched
app.get("/dogs", function (req, res) {
  return res.send("but what about these dogs???");
});

app.listen(3000, function () {
  console.log("App on port 3300");
});
