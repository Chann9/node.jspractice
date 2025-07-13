class Person{
    name;
    birthYear;
    height;
    weight;
    energy = 80;

    constructor(name, birthYear, height, weight, energy) {
        this.name = name;
        this.birthYear = birthYear;
        this.height = height;
        this.weight = weight;
        this.energy = energy;
    }
    getAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;
        console.log(`${this.name} is ${age} years old1`);
    }

    walk(length) {
        console.log(`${this.name} walks for ${length} km,`)
        this.energy = this.energy - (length * 2);
        console.log(`Energy is now ${this.energy}`);
    };

    sleep(duration) {
        console.log(`${this.name} sleep for ${duration} hours,`)
        this.energy = this.energy + (duration * 10);
        console.log(`Energy is now ${this.energy}`);
    };

    eat(amount) {
        console.log(`${this.name} eats ${amount} food,`)
        this.energy = this.energy + (amount * 5);
        console.log(`Energy is now ${this.energy}`);
        }
    }

module.exports = {person}