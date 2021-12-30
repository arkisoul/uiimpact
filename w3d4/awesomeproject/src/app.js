const http = require("http");
const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const {join} = require("path");

const LoggerMiddleware = require("./middlewares/LoggerMiddleware");
const webRouter = require("./routes/web");
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
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "public")))

app.use("/", webRouter);
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
