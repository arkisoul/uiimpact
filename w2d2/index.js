const fs = require("fs");

fs.readFile("./sample.txt", (err, data) => {
    console.log(err, data);
})
fs.writeFile(
  "./w2d2/test.txt",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo? Ratione neque aperiam necessitatibus maxime illum facilis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo? Ratione neque aperiam necessitatibus maxime illum facilis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo? Ratione neque aperiam necessitatibus maxime illum facilis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium minus, nemo quod incidunt aspernatur molestias, provident et rerum dolor ipsam illo? Ratione neque aperiam necessitatibus maxime illum facilis blanditiis!",
  
  (err) => {
      console.error(err)
  }
);

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

