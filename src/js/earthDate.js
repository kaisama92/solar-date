export default class EarthAge {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercuryAge = "Mercury: " + parseFloat((age / 0.24).toFixed(2));
    this.venusAge = "Venus: " + parseFloat((age / 0.62).toFixed(2));
    this.marsAge = "Mars: " + parseFloat((age / 1.88).toFixed(2));
    this.jupiterAge = "Jupiter: " + parseFloat((age / 11.86).toFixed(2)); 
  }


  
}