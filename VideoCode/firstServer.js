import express from "express";

const app = express();

app.listen(3300, () => {
  console.log("My first Express server is running on port 3300!");
  console.log("Get ready!");
});
