import festivals from "./fixtures/festivals.json";
import { merge, keys, values, concat } from "lodash";

// data response structure from API
interface MusicFestival {
  name: string
  bands: [Band]
}
interface Band {
  name: string
  recordLabel: string
}

// data structure required by frontend
export interface RecordBand {
  recordName: string;
  bandFestivals: BandFestival[];
}

interface BandFestival {
  bandName: string;
  festivals: string[]
}

// get data for fronted
export const getRecordBandFestival = (): RecordBand[] | {} => {
  let responseData: MusicFestival[] = [];

  try {
    responseData = festivals as MusicFestival[];
  } catch (error) {
    // TODO: should use proper logger
  }

  return transformToRecordBandFestival(responseData);
}

export const transformToRecordBandFestival = (responseData: MusicFestival[]): RecordBand[] => {
  let flatArr: object[] = [];
  let recordBandsObj: object = {};
  let recordBands: RecordBand[] = [];

  // flatten the response object to object array
  responseData?.map(festival => {
    const festName = festival.name;
    festival.bands.map(band => flatArr.push({ [band.recordLabel]: { [band.name]: festName } }))
  })

  // deep merge objects array
  flatArr.map(item => {
    const itemKey = keys(item)[0];
    const itemValue = values(item)[0];
    if (recordBandsObj[itemKey] === undefined) {
      recordBandsObj[itemKey] = itemValue;
    } else {
      const bandKey = keys(itemValue)[0];
      if (recordBandsObj[itemKey][bandKey] === undefined) {
        merge(recordBandsObj[itemKey], itemValue);
      } else {
        recordBandsObj[itemKey][bandKey] = concat(recordBandsObj[itemKey][bandKey], itemValue[bandKey])
      }
    }
  })

  // build JSON object required by frontend
  Object.entries(recordBandsObj).sort().forEach(record => {
    const [key, value] = record;

    // build band festival object array
    let bandFestivals: BandFestival[] = [];
    Object.entries(value).sort().forEach(band => {
      const [key, value] = band;
      const festivalsArr = typeof value === 'string' ? [value] : value;
      bandFestivals.push({ bandName: key, festivals: (festivalsArr as string[]).sort() })
    });

    recordBands.push({ recordName: key, bandFestivals: bandFestivals })
  });

  return recordBands;
}
