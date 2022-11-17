import { getRecordBandFestival, transformToRecordBandFestival } from "./get-record-band-festival";
import festivals from "./fixtures/festivals.json";

describe('getRecordBandFestival', () => {
  test('should not return null', () => {
    const data = getRecordBandFestival();
    expect(data).not.toBeNull();
  });
})

describe.only('transformToRecordBandFestival', () => {
  test('should return correct data', () => {
    const result = transformToRecordBandFestival(festivals);
    expect(result).not.toBeNull();
  });
})