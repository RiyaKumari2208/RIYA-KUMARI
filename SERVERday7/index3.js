const express = require("express");
const news = require("./Dataset/news2");

const app = express();

const { searchByTerm, searchByCategory } = require("./Module/utils");

app.get("/", (req, res) => {
  res.send("Welcome to news website");
});

app.get("/news2", (req, res) => {
  const { search, category, limit } = req.query;
  let filternews = news;
  if (search) {
    filternews = searchByTerm(search, news);
  }
  if (category) {
    filternews = searchByCategory(category, filternews);
  }
  if (limit) {
    filternews = filternews.slice(0, limit);
  }
  if (filternews.length > 0) {
    return res.send(filternews);
  } else {
    return res.send("News Not Found, please try some different filters");
  }
});

app.get("/news2/:id", (req, res) => {
  const id = req.params.id;
  for (let n = 0; n < news.length; n++) {
    if (news[n].id == id) {
      return res.json(news[n].news);
    }
  }
  return res.json({ status: "not found" });
});

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});
