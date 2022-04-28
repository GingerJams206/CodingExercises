import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form, Segment } from 'semantic-ui-react'


export default function Question4() {
  const [inputVal, setInputVal] = useState([1, 2, 3, 4, 5, 1, 6, 7])
  const [resultVal, setResultVal] = useState(null);


  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value)
  };

  const findMode = () => {
    let mode = []
    let modeCount = 0
    for (let int of inputVal) {
      const filteredArr = inputVal.filter(val => val === +int)
      if (filteredArr.length > 0) {
        const returnedArrCount = filteredArr.length
        if (returnedArrCount < modeCount) continue;
        if (returnedArrCount > modeCount) {
          modeCount = returnedArrCount;
          mode = []
        }
        if (!mode.includes(filteredArr[0])) mode = [...mode, filteredArr[0]]
        continue;
      }
    }
    return mode
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const returnedMode = findMode()
    setResultVal(returnedMode)
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
            resultVal?.length > 0 ?
              resultVal.map((val, i) => <h2 key={i}>{val}</h2>) :
              <h2>{"null"}</h2>
          }
        </Form>
      </Segment>
    </Container>
  );
}