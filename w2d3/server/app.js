const http = require("http"); // import http module

const server = http.createServer((request, response) => {
  // console.log(request, response);
  request.on("data", (chunk) => console.log("req data", chunk));
  response.write("Hello world!");
  response.end();
}); // create a server

server.listen(3000, () =>
  console.log(`HTTP server started listening at http://localhost:3000`)
); // start listening on a port
