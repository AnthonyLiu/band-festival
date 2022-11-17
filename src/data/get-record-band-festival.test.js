import { getRecordBandFestival, transformToRecordBandFestival } from "./get-record-band-festival";
import festivals from "./fixtures/festivals.json";

describe('getRecordBandFestival', () => {
  test('should not return null', () => {
    const data = getRecordBandFestival();
    expect(data).not.toBeNull();
  });
})

describe('transformToRecordBandFestival', () => {
  test('should return correct data', () => {
    const result = transformToRecordBandFestival(festivals);
    expect(result).toEqual([{"bandFestivals": [{"bandName": "Band X", "festivals": ["Omega Festival"]}, {"bandName": "Band Y", "festivals": ["Alpha Festival"]}, {"bandName": "Band Z", "festivals": ["Omega Festival"]}], "recordName": "Record Label 1"}, {"bandFestivals": [{"bandName": "Band A", "festivals": ["Alpha Festival", "Beta Festival"]}], "recordName": "Record Label 2"}]);
  });
})