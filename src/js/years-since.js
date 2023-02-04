export default class YearsSince{

  constructor(input, object) {
    this.difference = object.age - input;
  }

  onMercury(){
    return "Mercury: " + parseFloat((this.difference / 0.24).toFixed(2));
  }

  onVenus(){
    return "Venus: " + parseFloat((this.difference / 0.62).toFixed(2));
  }

  onMars(){
    return "Mars: " + parseFloat((this.difference / 1.88).toFixed(2));
  }

  onJupiter(){
    return "Jupiter: " + parseFloat((this.difference / 11.86).toFixed(2));
  }
}