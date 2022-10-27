const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//
// load all data necessary
const courses = require("./data/course.json");
const cat = require("./data/course.categories.json");
// Below are test includes
// const id1 = require("./data/categories/web-development.json");
// const id2 = require("./data/categories/software-development.json");
// const id3 = require("./data/categories/ai.json");
// const id4 = require("./data/categories/data-science.json");
// const id5 = require("./data/categories/embedded.json");
// const id6 = require("./data/categories/uiux.json");
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

// Api for getting specifiv Course
app.get("/courses/get/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n.id == id);
  res.send(selectedCourse);
});

// Api for getting specific Category
app.get("/courses/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter((n) => n.id == id);
  res.send(categoryCourse);
});

// //for categories (TEST!)
// app.get("/courses/categories/1", async (req, res) => {
//   res.send(id1);
// });
// app.get("/courses/categories/2", async (req, res) => {
//   res.send(id2);
// });
// app.get("/courses/categories/3", async (req, res) => {
//   res.send(id3);
// });
// app.get("/courses/categories/4", async (req, res) => {
//   res.send(id4);
// });
// app.get("/courses/categories/5", async (req, res) => {
//   res.send(id5);
// });
// app.get("/courses/categories/6", async (req, res) => {
//   res.send(id6);
// });
