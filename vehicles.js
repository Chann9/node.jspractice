const { MotorVehicle } = require('./vehiclemodel');

const vehicles = [];

vehicles.push(new MotorVehicle('car', 4, 'bensin', true, 'merah'));
vehicles.push(new MotorVehicle('bike', 2, 'bensin', false, 'hitam'));
vehicles.push(new MotorVehicle('bus', 6, 'solar', true, 'biru'));
vehicles.push(new MotorVehicle('plane', 6, 'avtur', true, 'putih'));

module.exports = { vehicles };