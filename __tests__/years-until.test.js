import EarthAge from '../src/js/earthDate';
import YearsUntil from '../src/js/years-until';

describe('YearsUntil', () => {
  let myAge;
  let until35;

  beforeEach(() =>{
    myAge = new EarthAge("kai", 25);
  });
  beforeEach(() => {
    until35 = new YearsUntil(35, myAge)
  });

  test('should create an object with the key this.difference that determines how many years until the given age', () => {
    expect(until35.difference).toEqual(10);
  });

  test('should determine how many Mercury years this.difference equates to', () => {
    expect(until35.onMercury()).toEqual(41.67);
  });
  
  test('should determine how many Venus years this.difference equates to', () => {
    expect(until35.onVenus()).toEqual(16.13);
  });

  test('should determine how many Venus years this.difference equates to', () => {
    expect(until35.onMars()).toEqual(5.32);
  });

  test('should determine how many Jupiter years this.difference equates to', () => {
    expect(until35.onJupiter()).toEqual(0.84);
  });
})
