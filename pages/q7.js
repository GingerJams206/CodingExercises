import { useState, useEffect } from 'react'
import { Container, Button, Segment, Form, Input } from 'semantic-ui-react'
import Question7DataCard from '../components/Q7DataCard';
import styles from '../styles/q7.module.css'

export default function Question7() {
  const [collection, setCollection] = useState([
    { id: 1, name: 'bob' },
    { id: 2, name: 'sally', occ: 'Clerk' },
    { id: 3, name: 'bob', age: 30 }
  ]);
  const [collectionFilters, setCollectionFilters] = useState(null)
  const [inputVal, setInputVal] = useState(null)
  const [resultVal, setResultVal] = useState(null);
  const [inputErr, setInputErr] = useState(false)

  const isNullOrEmpty = (inputValue) => {
    if (!inputValue || inputValue.toString().length === 0) {
      setInputErr(true)
      return true;
    }
    console.log(inputValue);
    setInputErr(false)
    return false;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
    setInputErr(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nullCheck = isNullOrEmpty(inputVal);
    if (!nullCheck) {
      console.log("clicked");
      handleFilterCollection(inputVal)
      setInputVal(null);
    }
    return;
  };

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
    if (Object.keys(filteredObj).length === 0) setInputErr(true)
  }

  return (
    <Container>
      <h3>Click a sort button or input a custom key to apply a sorting filter and only return the items with the attached key. The key buttons are dynamically generated from the collection.</h3>
      <Form error>
        <Form.Group>
          <Form.Field
            id='q1'
            role="input"
            name="inputVal"
            value={inputVal || ""}
            onChange={handleChange}
            control={Input}
            data-testid={"input"}
            className={styles.q1_input}
            error={inputErr && { content: "The key submitted is not present within the collection.", pointing: 'above' }}
          />
        </Form.Group>
        <Button disabled={inputErr} positive data-testid={"submit"} onClick={handleSubmit}>Submit</Button>
      </Form>
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
          {
            (resultVal && Object.keys(resultVal)?.length === 0) &&
            <>
              <h3>There seems to be nothing here...</h3>
            </>
          }
        </div>

        <div className="bottom-row-actions">
          {
            collectionFilters?.map((filterKey, i) => (
              <Button primary key={i} onClick={() => handleFilterCollection(filterKey)}>Filter By: {filterKey}</Button>
            ))
          }
        </div>
      </Segment>

    </Container>
  );
}