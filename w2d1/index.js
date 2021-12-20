// const someFun = require("./someFun");
// console.log(someFun);
const CONFIG = require("./config/index")
console.log(CONFIG);
const MYVAR = 'Hello World!';

const myFun = () => {
    return MYVAR;
}
// const obj = {};
// obj.akey = 'avalue';
// obj.anotherkey = 'another value';
// console.log(exports, require, module, __filename, __dirname)
console.log(module.exports)
// exports.aFun = myFun
// exports.aVar = MYVAR
// module.exports = myFun
module.exports.aFun = myFun
// module.exports.aVar = MYVAR
// module.exports = {
//     myFun,
//     MYVAR
// }