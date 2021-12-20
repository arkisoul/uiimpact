const Patient = require("./patient");
// const patient = require("./patient");
const fruits = require("./fruits");
const {person} = require('./person');

const patient = new Patient();

const printName = () => {
    console.log(patient.getName());
}

const printFruits = () => {
    console.log('Main', fruits)
}

const printPerson = () => {
    console.log(person.name, person.age);
}

module.exports = printName;
module.exports.printFruits = printFruits;
module.exports.printPerson = printPerson;