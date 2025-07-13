//importing modules
const {Person,creatperson} = require('./personmodel');
const {people} = require('./people');

console.log(people);

people.push(new Person('dudi',1999,189,70));

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.name === 'ruto') {
        continue; // melanjutkan ke iterasi berikutnya jika nama ruto ditemukan
    }
    if (person.name === 'yanto') {
        break; // menghentikan iterasi jika nama yanto ditemukan
    }
    console.log(`Name: ${person.name} is present.`);
}

people.push (creatperson({
    name: 'siti',
    birthYear: 2002,
    height: 159,
    weight: 55,
}))