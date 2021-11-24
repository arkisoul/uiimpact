import en from "./en.json";

const name = "Hello";

export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `I am ${this.name}. I am ${this.age} year old`;
  }
}

const person = new Person('John', 28);
export default person;
