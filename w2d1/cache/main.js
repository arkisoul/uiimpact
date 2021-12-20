const Patient = require("./patient");
// const patient = require("./patient");

const patient = new Patient();

const printName = () => {
    console.log(patient.getName());
}

module.exports = printName;