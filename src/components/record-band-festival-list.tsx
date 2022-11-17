import React from "react";
import { RecordBand } from "../data/get-record-band-festival";

type RecordBandFestivalListProps = {
  recordBandList: RecordBand[]
};

const RecordBandFestivalList = (props: RecordBandFestivalListProps) => {
  const recordBandList = props.recordBandList;

  return <div>
    {recordBandList.map(recordBand => {
      return recordBand.recordName
    })}
  </div>
}

export default RecordBandFestivalList;
