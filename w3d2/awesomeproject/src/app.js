const http = require("http");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const client = new MongoClient("mongodb://localhost:27017");
let db;

const connectMongo = async () => {
  try {
    const mongoClient = await client.connect();
    db = mongoClient.db("uiimpact");
    console.log(`Successfully connected to mongodb server`);
  } catch (error) {
    console.error(`Error connecting to mongodb server ${error.message}`);
  }
};

app.get("/", (req, res) => {
  return res.send(`Welcome to Express Application`);
});

app.get("/test", (req, res) => {
  return res.send(`I am a test route`);
});

app.get('/users', async (req, res) => {
    console.log('/users',req.query.age, req.query.height);
    const users = await db.collection('users').find({}).toArray();
    return res.json({success: true, msg: 'Users list', data: users})
})

app.get('/users/:id', async (req, res) => {
    console.log('with userId', req.query.age, req.query.height, req.params);
    const user = await db.collection('users').findOne({_id: ObjectId(req.params.id)});
    return res.json({success: true, msg: 'Users list', data: user})
})

app.post("/users", async (req, res) => {
    try {
        const newUser = { name: 'Kamal', email: 'kamal@mailinator.com', phone: 0987582900, age: 34, height: 167, weight: 60}
        const inserted = await db.collection("users").insertOne(newUser);
        return res.json({success: true, msg: 'User created', data: inserted});
    } catch (error) {
        return res.json({ success: false, msg: error.message, data: null });
    }
})

app.post("/", (req, res) => {
  return res.send(`I am a post request response`);
});

app.put("/", (req, res) => {
  return res.send(`I am a put request response`);
});

app.delete("/", (req, res) => {
  return res.send(`I am a delete request response`);
});

server.listen(PORT, async () => {
  await connectMongo();
  console.log(`Express application running at http://localhost:${PORT}`);
});
