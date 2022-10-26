const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//
// load all data necessary

//
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/", async (req, res) => {
  res.send(news_data);
});

app.get("/news", async (req, res) => {
  res.send("news");
});
