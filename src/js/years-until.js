export default class YearsUntil {

  constructor(input, object){
    this.difference = parseInt(input - object.age);
  }

  onMercury(){
    return parseFloat((this.difference / 0.24).toFixed(2));
  }
}