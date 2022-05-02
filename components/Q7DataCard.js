import { Segment, Table } from 'semantic-ui-react'
import styles from '../styles/q7.module.css'

export default function Question7DataCard({ cellData, parentKey }) {


  return (
    <Segment className={styles.q7_dataCard}>
      {
        Object.keys(cellData).map((objKey, i) => (
          <h3 key={`${parentKey}-${i}`}>{objKey}: {cellData[objKey]}</h3>
        ))
      }
    </Segment>
  );
}

