import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form } from 'semantic-ui-react'

const isNullOrEmpty = (inputValue) => {
  if (!inputValue || inputValue.toString().length === 0) return true;
  console.log(inputValue);
  return false;
};

export default function Question7() {
  const [inputVal, setInputVal] = useState(null);
  const [collection, setCollection] = useState([
    { id: 1, name: 'bob' },
    { id: 2, name: 'sally' },
    { id: 3, name: 'bob', age: 30 }
  ]);
  const [resultVal, setResultVal] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
  };

  const handleFilterCollection = () => {
    if (!collection || collection?.length === 0) return
    let returnVal = {}
    for (let obj of collection) {
      const keys = Object.keys(obj)
      if (!keys.includes(inputVal)) continue;
      const valueOfInputKey = obj[inputVal]
      const filteredCollection = collection.filter(item => item[inputVal] === valueOfInputKey)
      if (!Object.keys(returnVal).includes(valueOfInputKey)) returnVal[valueOfInputKey] = filteredCollection;
      continue;
    }
    return returnVal
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const nullCheck = isNullOrEmpty(inputVal);
    if (!nullCheck) {
      console.log("clicked");
      const returnValue = handleFilterCollection();
      setResultVal(returnValue)
    }
    return;
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Field
            id='q1'
            name="inputVal"
            value={inputVal || ""}
            onChange={handleChange}
            control="input"
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
        {
          (resultVal && Object.keys(resultVal)?.length > 0) ?
            Object.entries(resultVal).map((parentVal) => (
              <div key={parentVal[0]}>
                <h2>{parentVal[0]}</h2>
              </div>
            )) :
            <h2>{"null"}</h2>
        }
      </Form>
    </Container>
  );
}