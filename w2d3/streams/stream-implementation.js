const { Writable, Readable, Duplex } = require("stream");
const fs = require("fs");

function writeStreamImplementation() {
    // const readStream = fs.createReadStream("./w2d3/sample.txt");
    // class MyWriteable extends Writable {
    //   write(chunk, encoding, callback) {
    //     console.log("writable stream data using custom class:: ", chunk.toString());
    //     callback();
    //   }
    // }
    
    // const myOutStreamInstance = new MyWriteable();
    
    // preferred way
    const myOutStream = new Writable({
        write(chunk, encoding, callback) {
            console.log('writable stream data:: ', chunk.toString());
            callback();
        }
    })
    
    // readStream.on('data', (chunk) => {
    //     myOutStream.write(chunk);
    //     myOutStreamInstance.write(chunk, 'utf8', () => {});
    // })
    // readStream.pipe(myOutStream);
    // process.stdin.pipe(myOutStream)
}

function readStreamImplementation() {
    // class MyReadableStream extends Readable {}
    const readStream = new Readable({
        read(size) {
            this.push(String.fromCharCode(this.currentCharCode++));
            // 90 => Z
            if(this.currentCharCode > 100) {
                this.push(null)
            }
        }
    })
    // readStream.push("Some data")
    // readStream.push("Some more data")
    // readStream.push(null);
    readStream.currentCharCode = 65 // A

    readStream.on('data', (chunk) => {console.log('Readstream chunk', chunk.toString())})
    
    // readStream.pipe(process.stdout)
}
readStreamImplementation();



// const inoutStream = new Duplex({
//   read(size) {
//     this.push(String.fromCharCode(this.currentCharCode++));
//     if (this.currentCharCode > 90) {
//       this.push(null);
//     }
//   },
//   write(chunk, encoding, callback) {
//     console.log("writable stream data:: ", chunk.toString());
//     callback();
//   },
// });

// inoutStream.currentCharCode = 65;

// process.stdin.pipe(inoutStream).pipe(process.stdout);
