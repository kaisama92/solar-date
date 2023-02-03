import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('Should create an object with properties this.name and this.age', () => {
    const myEarthAge = new EarthAge("Kai", 25);
    expect(myEarthAge).toEqual({"name": "Kai", "age": 25});
  });
})