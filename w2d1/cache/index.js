const Patient = require("./patient");
// const patient = require("./patient");
const printName = require('./main');
const fruits = require('./fruits');
const {person} = require('./person');

const patient = new Patient();

console.log(patient.getName());
patient.setName('Ramesh');
console.log(patient.getName());
printName();

console.log('Index', fruits)
fruits.push("Orange", "Pineapple");
console.log("Index", fruits);
printName.printFruits();

console.log(person.name, person.age);
person.age = 28;
console.log(person.name, person.age);
printName.printPerson();