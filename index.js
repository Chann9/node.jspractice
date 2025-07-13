console.log('Hello world!');

function ubahUangJajan(sekolah){
    let uangJajan;

if(sekolah === 'SD') {
    uangJajan = 1000;
} else if(sekolah === 'SMP'){
    uangJajan = 3000;
} else if(sekolah === 'SMA') {
    uangJajan = 5000;
} else {
    uangJajan =10000;
}
    return uangJajan;
}

const nama ='Muhammad Ihsan'
let sekolah ='SD'

let uangJajan = ubahUangJajan(sekolah);

console.log('Nama saya adalah ' + nama);
console.log('Saya bersekolah di ' + sekolah);
console.log('uang jajan saya adalah ' + uangJajan);

sekolah = 'SMP';

uangJajan = ubahUangJajan(sekolah)

console.log('uang jajan saya adalah ' + uangJajan)

sekolah = 'SMA';

uangJajan = ubahUangJajan(sekolah)

console.log('uang jajan saya adalah ' + uangJajan)

console.log('----------------------------------------')
console.log('TIPE DATA OBJECT')

const person ={
    nama: 'Tika',
    level: 'SMA',
    Age: 20,
    pocketMoney: 0,
}

person.pocketMoney = ubahUangJajan(person.level);

console.log(person)
 person.level = 'Universitas';

 person.pocketMoney = ubahUangJajan(person.level);

 console.log(person)
 console.log('----------------------------------------')
 console.log('class')

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
        this.energy`` = this.energy + (amount * 5);
        console.log(`Energy is now ${this.energy}`);
        }
    };

const person1 = new Person('Ihsan', 2000, 170, 55, 80);
console.log(person1);
person1.getAge();
console.log(person1.energy);
person1.walk(20);
person1.walk(20);
person1.sleep(8);
person1.eat(5);
person1.walk(10);