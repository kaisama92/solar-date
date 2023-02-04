import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('should create an object with properties this.name, this.age, this.mercuryAge, this.venusAge, this.marsAge, and this.jupiterAge', () => {
    const myEarthAge = new EarthAge("kai", 25);
    expect(myEarthAge).toEqual({"name": "kai", "age": 25, "mercuryAge": "Mercury: 104.17", "venusAge": "Venus: 40.32", "marsAge": "Mars: 13.3", "jupiterAge": "Jupiter: 2.11"})
  });

  

})