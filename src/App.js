import './App.css';
import { getRecordBandFestival } from './data/get-record-band-festival.tsx';
import RecordBandFestivalList from './components/record-band-festival-list.tsx'

function App() {
  const recordList = getRecordBandFestival();

  return (
    <div className="App">
      <h1>Festival schedule for Bands in each Record Label:</h1>
      <RecordBandFestivalList recordBandList={recordList}/>
    </div>
  );
}

export default App;
