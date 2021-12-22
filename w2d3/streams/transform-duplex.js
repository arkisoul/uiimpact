const { createWriteStream, createReadStream } = require("fs");
const zlib = require("zlib");

// .zip, .rar, .tar, .tar.gz, .7zip

createReadStream("./w2d3/test.txt", {start: 10, end: 40})
//   .on("data", (chunk) => console.log(chunk.toString()))
//   .on("end", () => console.log("reading end"))
  .pipe(zlib.createGzip())
//   .on("end", () => console.log("compression completed"))
  .pipe(createWriteStream("./w2d3/test.txt.gz"));
