const http = require("http");
const express = require("express");

const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.get("/", (request, response) => {
    return response.json({success: true, message: 'Welcome to the Express server', data: []})
})

server.listen(PORT, () => {
    console.log(`Express application started listening at http://localhost:${PORT}`);
})
