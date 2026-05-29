const express = require("express");
const newsdata = require("./DATASET/news");

//console.log(newsdata);

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to news website");
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  for (let n = 0; n < newsdata.length; n++) {
    if (newsdata[n].id == id) {
      return res.json(newsdata[n].news);
    }
  }
  return res.json({ status: "not found" });
});

app.get("/news", (req, res) => {
  const limit = req.query.limit;
  const category = req.query.category;
  if (limit) {
    return res.json(newsdata.slice(0, limit));
  } else if (category) {
    const finalnews = [];
    for (let i = 0; i < newsdata.length; i++) {
      if (newsdata[i].category.toLowerCase() === category.toLowerCase()) {
        finalnews.push(newsdata[i].news);
      }
    }
    return res.json(finalnews);
  } else {
    return res.json(newsdata);
  }
});

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});
