const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
  process.nextTick(() => console.log("Next tick"));
});


// setTimeout(() => {
//   console.log("timeout");
// }, 100);
// setImmediate(() => {
//   console.log("immediate");
// });
// process.nextTick(() => console.log('Next tick'))