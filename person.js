class Person {
    constructor() {
        this.name = null;
        this.age = null;
        this.height = null;
        this.weight = null;
    }

    init(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    greet() {
        console.log(
            `Hi I'm ${this.name}
            I'm ${this.age} years old.
            I'm ${this.height} cm tall.
            I weigh ${this.weight} kg.`
        )
    }
}

module.exports = new Person();