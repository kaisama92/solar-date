import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('should create an object with properties this.name, this.age, this.mercuryAge, this.venusAge, this.marsAge, and this.jupiterAge', () => {
    const myEarthAge = new EarthAge("kai", 25);
    expect(myEarthAge).toEqual({"name": "kai", "age": 25, "mercuryAge": 104.17, "venusAge": 40.32, "marsAge": 13.30, "jupiterAge": 2.11})
  });

  

})