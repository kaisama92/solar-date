import {yearsSince} from "../src/js/years-since";
import EarthAge from "../src/js/earthDate";

describe('YearsSince', () => {

  test('should determine how many years have occured since two given times', () => {
    const earthAge = new EarthAge("kai", 25);
    expect(yearsSince(5, earthAge)).toEqual(20);
  });
})