import { getRecordBandFestival } from "./get-record-band-festival";

describe('get getRecordBandFestival', () => {
  test('should not return null', () => {
    const data = getRecordBandFestival();
    expect(data).not.toBeNull();
  });
})