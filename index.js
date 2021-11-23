const person = require('./person');
const greet = require('./greet');
// person.greet();
person.init('John Doe', 28, 172, 65);
person.greet();
greet.greetPerson();
// greet.en();
// greet.es();
// const process = require('process');
// const args = process.argv
// console.log(args);
// const env = process.env
// // console.log(env)
// const pid = process.pid
// process.on('beforeExit', (code) => console.log(code))
// process.on('exit', (code) => console.log(code))

// console.log('this get printed first');