const fs = require("fs");

console.log('Before write');
fs.writeFile(
  "./w2d2/test.txt",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo?",
  (err) => {
    console.error(err)
    console.log('Write op completed')
    console.log("Read First");
    fs.readFile("./w2d2/test.txt", (err, data) => {
      console.log(err, data.toString());
      console.log("Read first op completed");
    });
    console.log("After Read First");
  }
);
console.log('After write');


console.log('Before append')
fs.appendFile("./w2d2/test.txt", "\n\n I am appending some data to an existing file", (err, data) => {
  console.log(err, data);
  console.log("Append op completed");
  console.log("Read Second");
  fs.readFile("./w2d2/test.txt", (err, data) => {
    console.log(err, data.toString());
    console.log("Read second op completed");
  });
  console.log("After Read Second");
});
console.log("After append");


// console.log("Before file open function");
// fs.open("./sample.txt", 'r', function(err, fileHandler) {
//     if(err) {
//         return console.error('Error during opening the file', err);
//     }

//     console.log('File open for reading');
//     console.log("Before file read function");
//     fs.read(
//       fileHandler,
//       (err, bytes, buffer) => {
//         if (err) {
//           return console.error("Error during writing to the file", err);
//         }

//         console.log(bytes, buffer.toString());
//       }
//     );
//     console.log("After file read function");
// });
// console.log('After file open function');

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("./w2d2/test.txt", (err, data) => {
      if(err) reject(err)
      resolve(data)
    });
  })
}

function appendFilePromise(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile("./w2d2/test2.txt", data, (err) => {
    if(err) reject(err)
    resolve('data appended successfully')
  })
  })
}

readFilePromise()
  .then(data => 
    appendFilePromise(data).then(res => console.log(res)))
.catch(error => console.error(error))
