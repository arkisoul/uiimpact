const process = require("process");
// console.log(process.env)
// require('dotenv').config();
const dotenv = require('dotenv');
const path = require("path");
// console.log(__dirname, path.join(__dirname, "..", ".env"));
dotenv.config({ path: path.join(__dirname, "..", ".env") });
// const fs = require('fs');
// const data = fs.readFileSync(path.join(__dirname, "..", ".env"));
// console.log(data.toString().split("\n"))
// console.log(process.env.DB_HOST, process.env.DB_USERNAME);
// console.log(process.version, process.versions, process.release, process.platform)
// console.log(process.memoryUsage())

// const Buffer = require("buffer");
// Uint8Array
// Uint32Array
// Buffer
const bf1 = Buffer.alloc(10)
console.log(bf1)
const bf2 = Buffer.alloc(10, 1);
console.log(bf2);
const hw = Buffer.from("Hello world", 'utf8');
console.log(hw)