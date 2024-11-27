const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // Set header content type
  res.setHeader("Content-Type", "text/html");
  res.write("<head><link rel='stylesheet' href='#'></head>");
  res.write("<h1>Hello, World!</h1>");
  res.write("<p>Hello again Ninjas</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening on port 3000");
});
