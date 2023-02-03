import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('Should create an object with properties this.name and this.age', () => {
    const myEarthAge = new EarthAge("Kai", 25);
    expect(myEarthAge).toEqual({"name": "Kai", "age": 25});
  });

  test('Should find the mercury age of a person born on earth', () => {
    const myEarthAge = new EarthAge("kai", 25);
    myEarthAge.findMercury();
    expect(myEarthAge.mercury).toEqual(104.17);
  }); 

  test('Should find the venus age of a person born on earth', () => {
    const myEarthAge = new EarthAge("kai", 25);
    myEarthAge.findVenus();
    expect(myEarthAge.venus).toEqual(40.32);
  });

  test('should find the mars age of a person born on earth', () => {
    const myEarthAge = new EarthAge("kai", 25);
    myEarthAge.findMars();
    expect(myEarthAge.mars).toEqual(13.30)
  });
})