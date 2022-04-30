import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form, Segment } from 'semantic-ui-react'

const isNullOrEmptyOrNaN = (inputValue) => {
  if (!inputValue || inputValue.toString().length === 0 || isNaN(inputValue) || +inputValue === 0) return true;
  console.log(inputValue);
  return false;
};

export default function Question2() {
  const [inputVal, setInputVal] = useState(null);
  const [resultVal, setResultVal] = useState(null);


  const handleChange = (event) => {
    const { value } = event.target;
    const valLength = value.toString().length
    if (valLength < 9) setInputVal(value)
    return;
  };

  const findDivisors = (input) => {
    let divisors = []
    for (let i = 1; i <= input; i++) {
      if (input % 2 !== 0) {
        if (i % 2 === 0) continue;
      }
      const remainder = input % i;
      if (remainder === 0) divisors = [...divisors, i];
      continue;
    }
    return (divisors)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const nullCheck = isNullOrEmptyOrNaN(inputVal);
    if (!nullCheck) {
      const divisors = findDivisors(inputVal)
      setResultVal(divisors)
      setInputVal(null)
    }
    return;
  };


  return (
    <Container>
      <Segment>
        <Form>
          <Form.Group>
            <Form.Field
              id='q2'
              type="number"
              name="inputVal"
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