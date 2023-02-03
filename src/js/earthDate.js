export default class EarthAge {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  findMercury() {
    let mercury = this.age / 0.24;
    this.mercury = parseFloat(mercury.toFixed(2));
  }
}