//importing modules
const {person} = require('./personmodel');

const person1 = new Person('Ihsan', 2000, 170, 55, 80);
console.log(person1);
person1.getAge();
console.log(person1.energy);
person1.walk(20);
person1.walk(20);
person1.sleep(8);
person1.eat(5);
person1.walk(10);