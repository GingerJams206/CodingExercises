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
          <input
            id='q1'
            role="input"
            name="inputVal"
            value={inputVal || ""}
            onChange={handleChange}
            control="input"
            data-testid={"input"}
          />
        </Form.Group>
        <button data-testid={"submit"} onClick={handleSubmit}>Submit</button>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
        <h2 data-testid={"result_val"}>{newVal || "null"}</h2>
      </Form>
    </Container>
  );
}