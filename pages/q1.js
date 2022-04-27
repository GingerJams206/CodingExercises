import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form } from 'semantic-ui-react'

const isNullOrEmpty = (inputValue) => {
  if (!inputValue || inputValue.toString().length === 0) return true;
  console.log(inputValue);
  return false;
};

export default function Question1() {
  const [inputVal, setInputVal] = useState(null);
  const [newVal, setNewVal] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nullCheck = isNullOrEmpty(inputVal);
    if (!nullCheck) {
      console.log("clicked");
      setNewVal(inputVal);
      setInputVal(null);
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
        <h2>{newVal || "null"}</h2>
      </Form>
    </Container>
  );
}