const https = require('https')
const http = require('http');
const fs = require('fs');

const secureServer = https.createServer({
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
})

const server = http.createServer();

secureServer.on("request", (req, res) => {
  res.writeHead(200, "success", "Content-Type: text/plain");
  res.write("Welcome to node secure server");
  return res.end();
});

server.on("request", (req, res) => {
  res.writeHead(200, "success", "Content-Type: text/plain");
  res.write("Welcome to node secure server");
  return res.end();
});

secureServer.listen(8443, () => {
    console.log("node https server is listening at port 8443");
})
server.listen(8000, () => {
    console.log("node http server is listening at port 8000");
})