const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//
// load all data necessary
const courses = require("./data/course.json");
const cat = require("./data/course.categories.json");
//End of data loading
//

app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/", async (req, res) => {
  res.send("Programming-Hero Assignment10 Server Side");
});

app.get("/courses", async (req, res) => {
  res.send(courses);
});

app.get("/courses/categories", async (req, res) => {
  res.send(cat);
});
