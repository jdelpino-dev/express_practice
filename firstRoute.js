import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Welcome to the animal app running for good…");
});

app.get("/dogs", (request, response) => {
  return response.send("Dogs go brk brk!");
});

app.listen(3300, () => {
  console.log("App on port 3300");
});
