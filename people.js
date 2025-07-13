const {Person} = require('./personmodel')

const people = [];

people.push(new Person('channn,2006,155,40'));
people.push(new Person('ruto,2003,180,55'));
people.push(new Person('ikul,2008,180,55'));
people.push(new Person('budi,2007,180,55'));
people.push(new Person('yanto,2004,180,55'));

module.exports = {people,};