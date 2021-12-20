// function expression
const greet1 = (name) => {
    console.log(`Hello! ${name}`);
}
greet1()
const greet3 = function(name) {
    console.log(`Hello!! ${name}`);
}
greet3()
// function declration
function greet2(name) {
    console.log(`Hello!!! ${name}`);
}
greet2();

// module.exports = greet1;
module.exports.gr1 = greet1;
module.exports.gr2 = greet2;
module.exports.gr3 = greet3;