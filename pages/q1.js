import { useState } from 'react'
import { Container, Button, Form, Segment, Input } from 'semantic-ui-react'
import styles from '../styles/q1.module.css'



export default function Question1() {
  const [inputVal, setInputVal] = useState(null);
  const [inputErr, setInputErr] = useState(false)
  const [newVal, setNewVal] = useState(null);

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
      setNewVal(inputVal);
      setInputVal(null);
    }
    return;
  };

  return (
    <Container>
      <h3>Please enter a value. The Submit button will only fire and trigger a state change when the input is not null or empty.</h3>
      <Segment className={styles.q1Body}>
        <div className={styles.q1Body_Left}>
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
                error={inputErr && { content: "This failed the null/empty check. Please enter a value and try again.", pointing: 'above' }}
              />
            </Form.Group>
            <Button disabled={inputErr} positive data-testid={"submit"} onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
        <div className={styles.q1Body_Right}>
          <h2 data-testid={"result_val"}>{newVal || "Type to Begin..."}</h2>
        </div>
      </Segment>
    </Container>
  );
}