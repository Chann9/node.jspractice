class MotorVehicle {
  roda;
  bahanBakar;
  setir;
  warna;

  constructor(roda, bahanBakar, setir, warna) {
    this.roda = roda;
    this.bahanBakar = bahanBakar;
    this.setir = setir;
    this.warna = warna;
  }
  maju() {
    console.log(`${this.constructor.name} maju ke depan.`);
  }
  mundur() {
    console.log(`${this.constructor.name} mundur ke belakang.`);
  }
  terbang() {
    console.log(`${this.constructor.name} mencoba terbang...`);
  }
  berhenti() {
    console.log(`${this.constructor.name} berhenti.`);
  }
  isiBahanBakar(jumlah) {
    console.log(`${this.constructor.name} mengisi bahan bakar sebanyak ${jumlah} liter.`);
  }
  terbang() {
    console.log(`${this.constructor.name} terbang tinggi di udara!`);
  }
}

function createVehicle({ type, roda, bahanBakar, setir, warna }) {
  return new MotorVehicle(type,roda,bahanBakar,setir,warna);
}

module.exports = {MotorVehicle,createVehicle};