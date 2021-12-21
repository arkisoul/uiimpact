// A function that we provide as an argument to an another function, is known as a callback function.

// fs.readFile("", function(err, data) {

// })

function demo(callback) {
    console.log(callback);
    setTimeout(function() {
        const total = 10 + 20;
        callback(total);
    }, 1000)
}

demo(function aFun(sum) {
  console.log("I am inside callback function", sum);
});

function aPromise(shouldReject) {
    const promise = new Promise(function(resolve, reject) {
        if(shouldReject) {
            reject("I am rejected");
        }
        resolve("I am resolved");
    })
    return promise;
}

aPromise(false).then(function(data) {
    console.log('then', data);
}).catch(function(error) {
    console.error('catch', error);
})

/**
 * 
 * Example of Callback (callback hell situation)
readUserFromDB((data1) => {
    // manipulating data
    readUserDetail((data2) => {
        readUserComments((data3) => {
            writeThisToaFile(() => {

            })
        })
    })
})

example of promise. chaining of promises
readUserFromDB().then(data1 => {
      // manipulating data
      readUserDetail().then(data2 => {
          readUserComments().then(data3 => {
            writeThisToaFile().then(() => {});
        });  
      });
    };
}).catch()

// promises are handled using async await sytanx
try {
    const data1 = await readUserFromDB()
    const data2 = await readUserDetail()
    const data3 = await readUserComments()
    const data4 = await writeThisToaFile()
} catch (error) {
    
}
 * 
 * 
 * 
 */