import { render, screen } from '@testing-library/react';
import RecordBandFestivalList from './record-band-festival-list.tsx';

test('render correct list with passed in data', () => {
  const recordNameTxt = 'Record Label 1';
  const bandNameTxt = 'Band X';
  const festivalTxt = 'Omega Festival';

  const dataList = [{
      recordName: recordNameTxt,
      bandFestivals: [
        {
          bandName: bandNameTxt,
          festivals: [
            festivalTxt
          ]
        }
      ]
    }]
  render(<RecordBandFestivalList recordBandList={dataList}/>);

  const recordName = screen.getByText(recordNameTxt);
  const bandName = screen.getByText(bandNameTxt);
  const festival = screen.getByText(festivalTxt);
  expect(recordName).toBeInTheDocument();
  expect(bandName).toBeInTheDocument();
  expect(festival).toBeInTheDocument();
});
