import YearsSince from "../src/js/years-since";
import EarthAge from "../src/js/earthDate";

describe('YearsSince', () => {
  const myAge = new EarthAge("kai", 25);
  const sinceTwelve = new YearsSince(12, myAge);


  test('should create an object that contains the key this.difference', () => {
    expect(sinceTwelve.difference).toEqual(13);
  });

  test('should determine what the difference equates to in Mercury years', () => {
    expect(sinceTwelve.onMercury()).toEqual(54.17);
  });

  test('should determine what this.difference equates to in Venus years', () => {
    expect(sinceTwelve.onVenus()).toEqual(20.97);
  });

  test('should determine what this.difference equates to in Mars years', () => {
    expect(sinceTwelve.onMars()).toEqual(6.91)
  });

  test('should determine what this.difference equates to in Mars years', () => {
    expect(sinceTwelve.onJupiter()).toEqual(1.10);
  });
})