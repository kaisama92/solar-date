export default class EarthAge {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  findMercury() {
    let mercury = this.age / 0.24;
    this.mercury = parseFloat(mercury.toFixed(2));
  }

  findVenus() {
    let venus = this.age / 0.62;
    this.venus = parseFloat(venus.toFixed(2));
  }

  findMars() {
    
  }
}