const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});
server.listen(3000, () => {
  console.log("Server run on port 3000");
});

const iseven = require("./Module/iseven");
iseven(23);

const isodd = require("./Module/isodd");
isodd(25);

const isprime = require("./Module/isprime");
isprime(27);

const M = require("./Module/All");
M.iseven(22);
M.isodd(23);
M.isprime(7);
