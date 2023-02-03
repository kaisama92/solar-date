import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('Should create an object with properties this.name and this.age', () => {
    const myEarthAge = new EarthAge("Kai", 25);
    expect(myEarthAge).toEqual({"name": "Kai", "age": 25});
  });

  test('Should find the mercury age of a person born on earth', () => {
    const myEarthAge = new EarthAge("kai", 25);
    myEarthAge.findMercury();
    expect(myEarthAge.mercury).toEqual(104.16);
  });
})