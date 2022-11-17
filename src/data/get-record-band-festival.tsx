export interface RecordBand {
  recordName: string;
  bandFestivals: BandFestival[];
}

interface BandFestival {
  bandName: string;
  festivals: string[]
}

// get data for fronted
export const getRecordBandFestival = (): RecordBand[] => {

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
          bandName: 'Band 1',
          festivals: [
            'Alpha Festival',
            'Beta Festival',
          ],
        }
      ]
    }
  ];
}