import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form, Segment } from 'semantic-ui-react'

export default function Question4() {
  const [inputVal, setInputVal] = useState([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4])
  const [resultVal, setResultVal] = useState(null);


  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value)
  };

  const findMode = () => {
    let duplicates = []
    for (let int of inputVal) {
      const filteredArr = inputVal.filter(val => val === +int)
      if (filteredArr.length > 0) {
        duplicates = [...duplicates, +int]
      }
    }
    debugger
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    findMode()
    return;
  };


  return (
    <Container>
      <Segment>
        <Form>
          <Form.Group>
            <Form.Field
              id='q4'
              name="arr_input"
              value={inputVal || ""}
              onChange={handleChange}
              control="input"
            />
          </Form.Group>
          <Button id="submit-btn" onClick={handleSubmit}>Submit</Button>
          <Link href="/">
            <Button id="rtn-btn">Return Home</Button>
          </Link>
          {
            resultVal ?
              <h2>{resultVal}</h2> :
              <h2>{"null"}</h2>
          }
        </Form>
      </Segment>
    </Container>
  );
}