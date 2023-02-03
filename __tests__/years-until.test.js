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
    
})
