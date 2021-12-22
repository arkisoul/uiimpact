const { createWriteStream, createReadStream } = require("fs");
const zlib = require("zlib");

createReadStream("README.md")
  .on("data", (chunk) => console.log(chunk.toString()))
  .on("end", () => console.log("reading end"))
  .pipe(zlib.createGzip())
  .on("end", () => console.log("compression completed"))
  .pipe(createWriteStream("README.md.gz"));
