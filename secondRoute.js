import express from "express";

const app = express();

// Middleware function that runs for every request
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}\n\n`);
  console.log("Original URL:\n", req.originalUrl, "\n\n");
  console.log("Headers::\n", req.headers, "\n\n");
  console.log("Path:\n", req.path, "\n\n");
  console.log("Parameters:\n", req.params, "\n\n");
  console.log("Query String Object:\n", req.query, "\n\n");
  console.log("Body:\n", req.body, "\n\n");
  console.log("Hostname:\n", req.hostname, "\n\n");
  console.log("IP:\n", req.ip, "\n\n");
  console.log("Protocol:\n", req.protocol, "\n\n");
  console.log("Secure?:\n", req.secure, "\n\n");
  console.log("Cookies:\n", req.cookies, "\n\n");
  console.log("Signed Cookies:\n", req.signedCookies, "\n\n");
  next(); // Pass control to the next handler
});

// Routes
app.get("/", (req, res) => {
  return res.send("<h1>Welcome to the animal app running for good…</h1>");
});

app.get("/dogs", (req, res) => {
  return res.send("but what about these doggies???");
});

app.post("/dogs", function createDog(req, res) {
  return res.send("You created a doggggyyyy!");
});

// this second /dogs route will never get matched, because
// it is after the first / dogs route
app.get("/dogs", (req, res) => {
  return res.send("Dogs go brk brku");
});

//  Beacause the are different verbs, both chickens routes will work!
app.get("/chickens", function createChicken(req, res) {
  return res.send("BOCK BOCK BOCK! It's a chicken and a get request!");
});

app.post("/chickens", function createChicken(req, res) {
  return res.send("You created a chicken!");
});

const greetings = {
  en: "Hello",
  fr: "Bonjour",
  ic: "Halló",
  js: "konnichiwa",
  ic: "Halló",
  es: "Hola",
  ya: "Yahallo",
};

app.get("/greet/:language", (req, res) => {
  const lang = req.params.language;
  const greeting = greetings[lang];
  if (!greeting) {
    return res.send("Invalid language");
  }
  return res.send(greeting);
});

app.get("/search", (req, res) => {
  let { term, sort = "top" } = req.query;
  if (!term) {
    return res.send("Nothing found if nothing searched!");
  }
  if (!sort) {
    sort = "top"; // force default value if sort value is ""
  }
  return res.send(`Search Page! Term is ${term} and sort is ${sort}.`);
});

app.listen(3300, () => {
  console.log("App on port 3300");
});
