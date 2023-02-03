import EarthAge from './../src/js/earthDate.js'

describe('EarthAge', () => {

  test('should create an object with properties this.name, this.age, this.mercuryAge, this.venusAge, this.marsAge, and this.jupiterAge', () => {
    const myEarthAge = new EarthAge("kai", 25);
    expect(myEarthAge).toEqual({"name": "kai", "age": 25, "mercuryAge": 104.17, "venusAge": 40.32, "marsAge": 13.30, "jupiterAge": 2.11})
  })

  // test('Should find the mercury age of a person born on earth', () => {
  //   const myEarthAge = new EarthAge("kai", 25);
  //   myEarthAge.findMercury();
  //   expect(myEarthAge.mercury).toEqual(104.17);
  // }); 

  // test('Should find the venus age of a person born on earth', () => {
  //   const myEarthAge = new EarthAge("kai", 25);
  //   myEarthAge.findVenus();
  //   expect(myEarthAge.venus).toEqual(40.32);
  // });

  // test('should find the mars age of a person born on earth', () => {
  //   const myEarthAge = new EarthAge("kai", 25);
  //   myEarthAge.findMars();
  //   expect(myEarthAge.mars).toEqual(13.30)
  // });

  // test('should find the jupiter age of a person born on earth', () => {
  //   const myEarthAge = new EarthAge("kai", 25);
  //   myEarthAge.findJupiter();
  //   expect(myEarthAge.jupiter).toEqual(2.11);
  // });
})