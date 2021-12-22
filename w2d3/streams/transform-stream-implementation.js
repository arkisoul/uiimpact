const { Transform } = require('stream');
const { createWriteStream, writeFile, createReadStream } = require('fs');
const zlib = require('zlib');

const toUpperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().toUpperCase();
        console.log(transformedData);
        callback();
    }
})

const fileWriteStream = createWriteStream("test.txt");

// process.stdin.pipe(toUpperCaseStream).pipe(process.stdout);

createReadStream("README.md")
  .on("data", (chunk) => console.log(chunk.toString()))
  .on("end", () => console.log("reading end"))
  .pipe(zlib.createGzip())
  .on("end", () => console.log("compression completed"))
  .pipe(createWriteStream("README.md.gz"));

// createReadStream("README.md.gz").pipe(zlib.createDeflate()).pipe(createWriteStream('README2.md'))