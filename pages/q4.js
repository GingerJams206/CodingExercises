import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form, Segment } from 'semantic-ui-react'

const isValid = (inputValue) => {
  const re = /^[0-9, ]*[0-9]$/;
  if (re.test(inputValue)) return true;
  return false;
};

export default function Question4() {
  const [inputVal, setInputVal] = useState(null)
  const [resultVal, setResultVal] = useState(null);


  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value)

  };

  const findMode = (arr) => {
    let mode = []
    let modeCount = 0
    for (let int of arr) {
      const filteredArr = arr.filter(val => val === +int)
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

  const convertStringIntsToInts = (stringIntArr) => {
    let convertedInts = []
    for (let stringInt of stringIntArr) {
      stringInt.trim();
      const castInt = +stringInt
      convertedInts = [...convertedInts, castInt]
    }
    return convertedInts
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInputValid = isValid(inputVal)
    if (isInputValid) {
      const arrayFromInput = inputVal.split(',')
      const convertedIntArr = convertStringIntsToInts(arrayFromInput)
      setInputVal(convertedIntArr)
      const returnedMode = findMode(convertedIntArr)
      setResultVal(returnedMode)
    }
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