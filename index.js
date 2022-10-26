const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//
// load all data necessary
const news = require("./data/news.json");

//End of data loading
//

app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/", async (req, res) => {
  res.send("Programming-Hero Assignment10 Server Side");
});

app.get("/news", async (req, res) => {
  res.send(news);
});
