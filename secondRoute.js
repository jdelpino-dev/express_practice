import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Welcome to the animal app running for good…</h1>");
});

app.get("/dogs", (req, res) => {
  return res.send("but what about these dogs???");
});

// this second /dogs route will never get matched, because
// it is after the first / dogs route
app.get("/dogs", (req, res) => {
  return res.send("Dogs go brk brk");
});

//  Beacause the are different verbs, both chickens routes will work!
app.get("/chickens", function createChicken(req, res) {
  return res.send("BOCK BOCK BOCK! It's a chicken and a get request!");
});

app.post("/chickens", function createChicken(req, res) {
  return res.send("You created a chicken!");
});

app.listen(3300, () => {
  console.log("App on port 3300");
});
