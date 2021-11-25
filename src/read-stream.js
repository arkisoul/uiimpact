const fs = require("fs");

// fs.readFile("bigfile.txt", {encoding: 'utf8'}, (err, data) => console.log(data))
const readStream = fs.createReadStream("bigfile.txt", {encoding: 'utf8'});

readStream.pipe(process.stdout);

console.log('reading is complete');