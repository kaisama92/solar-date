export default class YearsSince{

  constructor(input, object) {
    this.difference = object.age - input;
  }

  onMercury(){
    return parseFloat((this.difference / 0.24).toFixed(2));
  }

  onVenus(){
    return parseFloat((this.difference / 0.62).toFixed(2));
  }

  onMars(){
    
  }
}