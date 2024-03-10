// require("dotenv").config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
const data = [
  {
    id: 1,
    title: "joke is awesome one",
    body: "joke is awesome one and you have",
  },
  {
    id: 2,
    title: "joke is awesome two",
    body: "joke is awesome two and you have",
  },
  {
    id: 3,
    title: "joke is awesome three",
    body: "joke is awesome three and you have",
  },
  {
    id: 4,
    title: "joke is awesome four",
    body: "joke is awesome four and you have",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on `);
});
