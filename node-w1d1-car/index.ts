import {Car, CarBrand, CarManufacturer} from './car';

const car = new Car();
const carSpecs = car.getSpecs();

const tesla = new CarManufacturer('Tesla');
const teslaCarSpecs = tesla.getSpecs();
const teslaName = tesla.getName();

const roadster = new CarBrand('Tesla', 'Roadster', 100000);
const roadsterSpec = roadster.getSpecs();
const roadsterName = roadster.getName();
// roadster.sayHello('Hello world')
// roadster.sayHello(20)
console.log(`Roadster status ${roadster.isWorking}`)
roadster.isWorking = false;
console.log(`Roadster status now ${roadster.isWorking}`)

console.log(`
Car
    ${carSpecs}
Manufacturer
    ${teslaCarSpecs}
    ${teslaName}
Brand
    ${roadsterSpec}
    ${roadsterName}
`)

function helloWorld(): number;
function helloWorld(s: string): string;
function helloWorld(s?: string) {
  if (!s) {
    return Math.random();
  }
  return s;
}

// ❎ x is of type string
const x = helloWorld("test");
// ❎ y is of type number
const y = helloWorld();
console.log(x, y)