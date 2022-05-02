import { useState, useEffect } from 'react'
import { Container, Button, Segment } from 'semantic-ui-react'
import Question7DataCard from '../components/Q7DataCard';
import styles from '../styles/q7.module.css'

export default function Question7() {
  const [collection, setCollection] = useState([
    { id: 1, name: 'bob' },
    { id: 2, name: 'sally', occ: 'Clerk' },
    { id: 3, name: 'bob', age: 30 }
  ]);
  const [collectionFilters, setCollectionFilters] = useState(null)
  const [resultVal, setResultVal] = useState(null);

  useEffect(() => {
    const handleMakeFilterBtns = () => {
      let keys = []

      for (let obj of collection) {
        const objKeys = Object.keys(obj)
        for (let objK of objKeys) {
          if (!keys.includes(objK)) keys = [...keys, objK]
          continue;
        }
      }
      setCollectionFilters(keys)
    }

    handleMakeFilterBtns()
  }, [])


  const handleFilterCollection = (inputVal) => {
    if (!collection || collection?.length === 0) return
    let filteredObj = {}
    const collectionArr = [...collection]
    for (let obj of collectionArr) {
      const keys = Object.keys(obj)
      if (!keys.includes(inputVal)) continue;
      const valueOfInputKey = obj[inputVal]
      const filteredCollection = collectionArr.filter(item => item[inputVal] === valueOfInputKey)
      if (!Object.keys(filteredObj).includes(valueOfInputKey)) filteredObj[valueOfInputKey] = filteredCollection;
      continue;
    }
    setResultVal(filteredObj)
  }

  return (
    <Container>
      <h3>Click a button to apply a sorting filter and only return the items with the attached key!</h3>
      <Segment className={styles.q7Body}>
        <div className={styles.q7Body_Top}>
          {
            !resultVal && collection.map((val, i) => (
              <Question7DataCard key={i} cellData={val} parentKey={i} />
            ))
          }
          {
            (resultVal && Object.keys(resultVal)?.length > 0) &&
            Object.values(resultVal).flat().map((val, i) => (
              <Question7DataCard key={i} cellData={val} parentKey={i} />
            ))
          }
        </div>

        <div className="bottom-row-actions">
          {
            collectionFilters?.map((filterKey, i) => (
              <Button positive key={i} onClick={() => handleFilterCollection(filterKey)}>Filter By: {filterKey}</Button>
            ))
          }
        </div>
      </Segment>

    </Container>
  );
}