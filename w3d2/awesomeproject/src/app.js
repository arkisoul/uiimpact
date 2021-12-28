const http = require("http")
const express = require("express")
const MongoClient = require("mongodb").MongoClient

const PORT = 3000
const app = express()
const server = http.createServer(app)
const client = new MongoClient("mongodb://localhost:27017");
client.connect()
    .then(async (mongoClient) => {
        const db = mongoClient.db("uiimpact");
        const users = await db.collection('users').find({}).toArray();
        console.log(users)
    })

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