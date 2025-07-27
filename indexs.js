const { MotorVehicle, createVehicle } = require('./vehiclemodel');
const { vehicles } = require('./vehicles');

console.log("Daftar kendaraan awal:");
console.log(vehicles);

vehicles.push(new MotorVehicle(3, 'listrik', true, 'silver'));

for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];

  if (vehicle.warna === 'biru') {
    continue; 
  }

  if (vehicle.warna === 'hitam') {
    break; 
  }

  console.log(`Kendaraan dengan warna ${vehicle.warna} aktif.`);
}

vehicles.push(createVehicle({
  type: 'plane',
  roda: 8,
  bahanBakar: 'avtur',
  setir: true,
  warna: 'abu-abu'
}));

console.log('\nSimulasi kendaraan bergerak:');
vehicles.forEach(vehicle => {
  vehicle.maju();
  vehicle.berhenti();
  vehicle.isiBahanBakar(20);
  vehicle.terbang?.();
});