const http = require("http");
const PORT = process.env.PORT || 5000;
const getReq = require("./methods/getReq");
const postReq = require("./methods/postReq");
const putReq = require("./methods/putReq");
const deleteReq = require("./methods/deleteReq");
let movies = require("./data/movies.json");

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route Not Found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is ready at PORT ${PORT}`);
});
