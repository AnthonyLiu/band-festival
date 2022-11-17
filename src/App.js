import './App.css';
import { getRecordBandFestival } from './data/get-record-band-festival.tsx';
import RecordBandFestivalList from './components/record-band-festival-list.tsx'

function App() {
  const recordList = getRecordBandFestival();

  return (
    <div className="App">
      <RecordBandFestivalList recordBandList={recordList}/>
    </div>
  );
}

export default App;
