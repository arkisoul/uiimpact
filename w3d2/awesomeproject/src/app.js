const http = require("http")
const express = require("express")

const PORT = 3000
const app = express()
const server = http.createServer(app)

app.get("/", (req, res) => {
    return res.send(`Welcome to Express Application`);
})

app.get("/test", (req, res) => {
    return res.send(`I am a test route`)
})

app.post("/", (req, res) => {
    return res.send(`I am a post request response`)
})

app.put("/", (req, res) => {
    return res.send(`I am a put request response`)
})

app.delete("/", (req, res) => {
    return res.send(`I am a delete request response`)
})

server.listen(PORT, () => console.log(`Express application running at http://localhost:${PORT}`));