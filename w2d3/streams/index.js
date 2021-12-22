const fs = require("fs");

const readStream = fs.createReadStream("./w2d3/test.txt")
const writeStream = fs.createWriteStream("./w2d3/test2.txt");

// readStream.on('data', (chunk) => {
//     console.log("data", chunk);
// })

// readStream.on("open", function() {
//     console.log('file opened for streaming');
//     // readStream.pause();
//     // setTimeout(() => {
//     //   console.log("resuming stream after 3sec");
//     //   readStream.resume();
//     // }, 3000);
// })

// readStream.on("pause", function() {
//     console.log('stream paused')
// })

// readStream.on("resume", function() {
//     console.log('stream resumed is in flowing mode')
// })

// readStream.on("close", function() {
//     console.log('stream close')
// })

// readStream.on("end", function() {
//     console.log('stream end')
// })

// readStream.on("error", (error) => {
//     console.log(error)
// })
readStream.pipe(writeStream)
readStream.pipe(process.stdout)