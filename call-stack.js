// const x = 10;
// const y = 20;

// const total = x + y;

// console.log(`${x} + ${y} = ${total}`);
setTimeout(() => {

    function multiply() {
      console.log("Multiply function");
      const value = divide();
      try {
        throw new Error("custom error in multiply");
      } catch (error) {
        console.log(error);
      }
      return value * 10;
    }
    
    function divide() {
      console.log("Divide function");
      try {
        new Promise(resolve => resolve('Promise resolved')).then(data => console.log(data));
        throw new Error("Custom error message");
      } catch (error) {
        console.log(error);
        return 100 / 10;
      }
    }
    
    function substract() {
      console.log("substract function");
      const value = multiply();
      try {
        throw new Error("custom error in substract");
      } catch (error) {
        console.log(error);
      }
      return value - 10;
    }
    
    function addition() {
      console.log("Addition function");
      setTimeout(() => console.log("Addition timeout"), 0);
      const value = substract();
      try {
        throw new Error("custom error in addition");
      } catch (error) {
        console.log(error);
      }
      return value + 10;
    }
    
    function printOut() {
      let count = 0;
      const intervalId = setInterval(() => {
        count++;
        console.log("Set interval");
        if(count >= 10) {
            clearInterval(intervalId);
        }
      }, 0);
      const value = addition();
      try {
        throw new Error("custom error in printout");
      } catch (error) {
        console.log(error);
      }
      console.log("final value", value);
    }
    // try {
    //   printOut();
    //   throw new Error("final error");
    // } catch (error) {
    //   console.log(error);
    // }
}, 0);
// let count = 0;
// console.time()
// while(count <= 10000000000) {
//     count++;
// }
// console.timeEnd();
// console.log("FINISH");

const fs = require("fs");

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile("./node-basics.txt", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
