const Patient = require("./patient");
// const patient = require("./patient");
const printName = require('./main');

const patient = new Patient();

console.log(patient.getName());
patient.setName('Ramesh');
console.log(patient.getName());
printName();