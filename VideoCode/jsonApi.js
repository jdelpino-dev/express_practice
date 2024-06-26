import express from "express";

const app = express();

app.use(express.json());

const CANDIES = [
  { name: "snickers", qty: 43, price: 1.5 },
  { name: "skittles", qty: 26, price: 0.99 },
];

app.get("/candies", (req, res) => {
  res.json(CANDIES);
});

app.post("/candies", (req, res) => {
  if (req.body.name.toLowerCase() === "circus peanuts") {
    console.log("CANDIES: ", CANDIES);
    return res
      .status(403) // 403 FORBIDDEN
      .json({ msg: "HORRIBLE CHOICE.  CIRCUS PEANUTS FORBIDDEN!" });
  }
  CANDIES.push(req.body);
  console.log("CANDIES: ", CANDIES);
  res.status(201).json(CANDIES); // 201 CREATED
});

app.listen(3300, () => {
  console.log("Server running on port 3300");
});
