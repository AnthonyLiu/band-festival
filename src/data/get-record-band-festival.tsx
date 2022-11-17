import * as festivals from "./fixtures/festivals.json";

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
  let responseData: MusicFestival[] | null = null;

  try {
    responseData = festivals as MusicFestival[];
  } catch (error) {
    // should use proper logger
    console.log(error);
  }

  return [
    {
      recordName: 'Record Label 1',
      bandFestivals: [
        {
          bandName: 'Band X',
          festivals: [
            'Omega Festival',
          ]
        },
        {
          bandName: 'Band Y',
          festivals: [],
        }
      ]
    }, {
      recordName: 'Record Label 2',
      bandFestivals: [
        {
          bandName: 'Band A',
          festivals: [
            'Alpha Festival',
            'Beta Festival',
          ],
        }
      ]
    }
  ];
}
