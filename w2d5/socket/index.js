const http = require("http");
const express = require("express");
const fs = require("fs");
const { join } = require("path");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
//   socket.broadcast.emit("hi", "Hi, welcome to our chat application");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
})
// server.on('request', (request, response) => {
//     response.writeHead(200, "Ok", {
//       "Content-Type": "text/html",
//       "Accept-Type": "text/plain, text/html, text/*",
//     });
//     const readStream = fs.createReadStream(join(__dirname, 'public', 'index.html'));
//     readStream.pipe(response);
// })

server.listen(3000, () =>
  console.log(`HTTP server started listening at http://localhost:3000`)
);
