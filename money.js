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

const nama ='channn'
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

 module.exports = {person}