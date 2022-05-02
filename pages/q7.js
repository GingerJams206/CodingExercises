import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Container, Button } from 'semantic-ui-react'


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
    for (let obj of collection) {
      const keys = Object.keys(obj)
      if (!keys.includes(inputVal)) continue;
      const valueOfInputKey = obj[inputVal]
      const filteredCollection = collection.filter(item => item[inputVal] === valueOfInputKey)
      if (!Object.keys(filteredObj).includes(valueOfInputKey)) filteredObj[valueOfInputKey] = filteredCollection;
      continue;
    }
    setResultVal(filteredObj)
  }

  return (
    <Container>
      {
        !resultVal && collection.map((obj, i) => (
          <div key={i}>
            {
              Object.keys(obj).map((objKey, i) => (
                <h2 key={i}>{objKey}: {obj[objKey]}</h2>
              ))
            }
          </div>
        ))
      }
      {
        (resultVal && Object.keys(resultVal)?.length > 0) &&
        Object.values(resultVal).flat().map((val, i) => (
          <div key={i}>
            {
              Object.keys(val).map((objKey, i) => (
                <h2 key={i}>{objKey}: {val[objKey]}</h2>
              ))
            }
          </div>
        ))
      }
      <div className="bottom-row-actions">
        {
          collectionFilters &&
          collectionFilters.map((filterKey, i) => (
            <Button key={i} onClick={() => handleFilterCollection(filterKey)}>Filter By: {filterKey}</Button>
          ))
        }
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>


    </Container>
  );
}