const process = require("process");

console.log(process.env)
// require('dotenv').config();
const dotenv = require('dotenv');
const path = require("path");
dotenv.config({ path: path.join(__dirname, "..", ".env") });
console.log(process.env.DB_HOST, process.env.DB_USERNAME);