import express from "express";
import { ExpressError } from "./expressError.js";

const app = express();

function attemptToSaveToDB() {
  throw "Connection Error!";
}

const USERS = [
  { username: "StacysMom", city: "Reno" },
  { username: "Rosalia", city: "R" },
];

app.get("/users/:username", function (req, res, next) {
  try {
    const user = USERS.find((u) => u.username === req.params.username);
    if (!user) throw new ExpressError("invalid username", 404); // 404 Not Found
    return res.status(200).send({ user }); // 200 OK
  } catch (e) {
    next(e);
  }
});

app.get("/secret", (req, res, next) => {
  try {
    if (req.query.password != "popcorn") {
      throw new ExpressError("invalid password", 403); // 403 Forbidden
    }
    return res.status(200).send("CONGRATS YOU KNOW THE PASSWORD"); // 200 OK
  } catch (e) {
    next(e);
  }
});

app.get("/savetodb", (req, res, next) => {
  try {
    attemptToSaveToDB();
    return res.status(201).send("SAVED TO DB!"); // 201 Created
  } catch (e) {
    return next(new ExpressError("Database Error", 503)); // 503 Service Unavailable
  }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404); // 404 Not Found
  next(e);
});

// Error handler
app.use(function (err, req, res, next) {
  //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3300, () => {
  console.log("Server running on port 3300");
});
