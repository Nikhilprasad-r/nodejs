require("dotenv").config();
const express = require("express");
const app = express();
const data = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" },
      ],
    },
  },
};
app.get("/", (req, res) => {
  res.send("<button>hello</button>");
});
app.get("/data", (req, res) => {
  res.json(data);
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
