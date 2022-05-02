import { useState } from 'react'
import { Container, Button, Form, Segment, Input } from 'semantic-ui-react'
import styles from '../styles/q1.module.css'

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
      <h3>Please enter a value! The Submit button will only fire and trigger a state change when the input is not null or empty.</h3>
      <Segment className={styles.q1Body}>
        <div className={styles.q1Body_Left}>
          <Form>
            <Form.Group>
              <Form.Field
                id='q1'
                role="input"
                name="inputVal"
                value={inputVal || ""}
                onChange={handleChange}
                control={Input}
                data-testid={"input"}
                className = {styles.q1_input}
              />
            </Form.Group>
            <Button positive data-testid={"submit"} onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
        <div className={styles.q1Body_Right}>
          <h2 data-testid={"result_val"}>{newVal || "null"}</h2>
        </div>
      </Segment>
    </Container>
  );
}