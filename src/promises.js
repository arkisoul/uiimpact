const { error } = require("console");
const fs = require("fs");

function readFilePromisify(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        // console.error(`Error reading file`, error);
        reject(error);
      }
    //   console.log(data.toString());
      resolve(data.toString());
    });
  });
}

async function fun() {
    const data = await readFilePromisify("README.md");
    console.log(data)
}

fun();
