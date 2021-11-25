const { Writable, Readable, Duplex } = require("stream");
// const { createReadStream, fstat } = require("fs");
// class MyWriteable extends Writable {

// }

// const readStream = new Readable({
//     read(size) {
//         this.push(String.fromCharCode(this.currentCharCode++));
//         if(this.currentCharCode > 90) {
//             this.push(null)
//         }
//     }
// })

// const myOutStream = new Writable({
//     write(chunk, encoding, callback) {
//         console.log('writable stream data:: ', chunk.toString());
//         callback();
//     }
// })

// readStream.currentCharCode = 65

// readStream.pipe(myOutStream)

const inoutStream = new Duplex({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
  write(chunk, encoding, callback) {
    console.log("writable stream data:: ", chunk.toString());
    callback();
  },
});

inoutStream.currentCharCode = 65;

process.stdin.pipe(inoutStream).pipe(process.stdout);