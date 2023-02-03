import YearsSince from "../src/js/years-since";
import EarthAge from "../src/js/earthDate";

describe('YearsSince', () => {

  test('should create an object that contains the key this.difference', () => {
    const myAge = new EarthAge("kai", 25);
    const sinceFive = new YearsSince(5, myAge);
    expect(sinceFive.difference).toEqual(20);
  });

  test('should determine what the difference equates to in Mercury years', () => {
    const myAge = new EarthAge("kai", 25);
    const sinceFive = new YearsSince(5, myAge);
    expect(sinceFive.onMercury()).toEqual(83.33);
  });

  // test('should determine how many years have occured since two given times', () => {
  //   const earthAge = new EarthAge("kai", 25);
  //   expect(yearsSince(5, earthAge)).toEqual(20);
  // });
})