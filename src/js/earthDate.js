export default class EarthAge {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercuryAge = parseFloat((age / 0.24).toFixed(2));
    this.venusAge = parseFloat((age / 0.62).toFixed(2));
    this.marsAge = parseFloat((age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((age / 11.86).toFixed(2)); 
  }

  // findMercury() {
  //   let mercury = this.age / 0.24;
  //   this.mercury = parseFloat(mercury.toFixed(2));
  // }

  // findVenus() {
  //   let venus = this.age / 0.62;
  //   this.venus = parseFloat(venus.toFixed(2));
  // }

  // findMars() {
  //   let mars = this.age / 1.88;
  //   this.mars = parseFloat(mars.toFixed(2));
  // }

  // findJupiter() {
  //   let jupiter = this.age / 11.86;
  //   this.jupiter = parseFloat(jupiter.toFixed(2));
  // }
}