const {isString, isValid} = require("./utils/validator")
function someFun() {
    console.log('Some fun')
}
console.log(isString(""));
// exports = someFun
// module.exports = someFun;
module.exports.aFun = someFun;
module.exports.bFun = someFun;
// module.exports = { aFun: someFun }