const english = require('./english');
const spanish = require('./spanish');
const person = require('../person');

module.exports = {
    en: english,
    es: spanish,
    greetPerson: () => person.greet()
}