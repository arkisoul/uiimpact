"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const name = "Hello";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `I am ${this.name}. I am ${this.age} year old`;
    }
}
exports.Person = Person;
const person = new Person('John', 28);
exports.default = person;
