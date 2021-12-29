const http = require("http");
const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const LoggerMiddleware = require("./middlewares/LoggerMiddleware");
const userRouter = require("./routes/users");

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const client = new MongoClient("mongodb://localhost:27017");
let db;

mongoose.connect("mongodb://localhost:27017/uiimpact");

const connectMongo = async () => {
  try {
    const mongoClient = await client.connect();
    db = mongoClient.db("uiimpact");
    console.log(`Successfully connected to mongodb server`);
  } catch (error) {
    console.error(`Error connecting to mongodb server ${error.message}`);
  }
};

// application level Middlewares
app.use(LoggerMiddleware);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.db = db;
  next();
})

app.get("/", (req, res, next) => {
  console.log(
    "I am in a middleware function",
    req.anewprop,
    res.anothernewprop
  );
  next();
}, (req, res) => {
  console.log(req.anewprop, res.anothernewprop)
  return res.send(`Welcome to Express Application`);
});

app.get("/test", (req, res) => {
  return res.send(`I am a test route`);
});

app.post("/", (req, res) => {
  return res.send(`I am a post request response`);
});

app.put("/", (req, res) => {
  return res.send(`I am a put request response`);
});

app.delete("/", (req, res) => {
  return res.send(`I am a delete request response`);
});

app.use("/api", userRouter);

// Error handler middleware aka Global error handler in express application
app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.statusMessage = 'Internal Server Error'
  return res.send(err.message);
})

server.listen(PORT, async () => {
  await connectMongo();
  console.log(`Express application running at http://localhost:${PORT}`);
});
