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

module.exports = {ubahUangJajan}