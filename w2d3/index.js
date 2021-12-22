const fs = require('fs');
const fsPromise = require("fs/promises");

fsPromise.writeFile("./w2d3/sample.txt", "Hello world")
    .then(() => {return fsPromise.readFile("./w2d3/sample.txt")})
    .then(bufferData => {return fsPromise.appendFile("./w2d3/sample-copy.txt", bufferData)})
    .then(res => console.log('append res'))
    .catch(error => console.error(error))

async function asynchronusFunction() {
    try {
        const writeRes = await fsPromise.writeFile(
          "./w2d3/sample-async.txt",
          "Hello world"
        );
        const bufferData = await fsPromise.readFile("./w2d3/sample-async.txt");   
        const appendRes = await fsPromise.appendFile(
          "./w2d3/sample-async-copy.txt",
          bufferData
        );
    } catch (error) {
        console.error(error);
    }
}
asynchronusFunction();

function writeFilePromise(path) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo?", (err) => {
        if (err) reject(err);
        resolve(path);
      });
    });
}

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function appendFilePromise(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile("./w2d3/test2.txt", data, (err) => {
      if (err) reject(err);
      resolve("data appended successfully");
    });
  });
}

writeFilePromise("./w2d3/test.txt")
  .then((path) =>
    readFilePromise(path)
        .then((data) =>
            appendFilePromise(data)
                .then((res) => console.log(res))
    )
  ).catch((error) => console.error(error));
