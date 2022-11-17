import React from "react";
import { RecordBand } from "../data/get-record-band-festival";
import styles from "./record-band-festival-list.module.css";

type RecordBandFestivalListProps = {
  recordBandList: RecordBand[]
};

const RecordBandFestivalList = (props: RecordBandFestivalListProps) => {
  const recordBandList = props.recordBandList;

  return <div>
    {recordBandList?.map(recordBand => {
      return (<>
        <h3 className={styles.h3}>{recordBand.recordName}</h3>
        {recordBand.bandFestivals?.map(bandFes => {
          return <>
            <h4 className={styles.h4}>{bandFes.bandName}</h4>
            {bandFes.festivals?.map(festival => {
              return <p className={styles.p}>{festival}</p>
            })}
          </>;
        })}
      </>);
    })}
  </div>
}

export default RecordBandFestivalList;
