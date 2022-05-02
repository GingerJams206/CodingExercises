import { useState } from 'react'
import { Container, Button, Form, Segment, Input, Message } from 'semantic-ui-react'
import styles from '../styles/q3.module.css'



export default function Question3() {
  const [triangle, setTriangle] = useState({ sideA: null, sideB: null, sideC: null });
  const [inputErr, setInputErr] = useState(false)
  const [resultVal, setResultVal] = useState(null);


  const isValidTriangle = ({ sideA, sideB, sideC }) => {
    // a triangle is valid if sum of its two sides is greater than the third side
    // a + b > c
    // a + c > b
    // b + c > a
    if ((+sideA + +sideB > +sideC) && (+sideA + +sideC > +sideB) && (+sideB + +sideC > +sideA)) {
      setInputErr(false)
      return true;
    }
    setInputErr(true)
    return false;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTriangle(prev => ({ ...prev, [name]: value }))
    setInputErr(false)
  };

  const computeTriangleArea = (triangle) => {
    const { sideA, sideB, sideC } = triangle
    // compute semi perimeter
    const sp = (+sideA + +sideB + +sideC) / 2
    // compute area
    const area = Math.sqrt(sp * (sp - +sideA) * (sp - +sideB) * (sp - +sideC))
    return area
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validCheck = isValidTriangle(triangle);
    if (validCheck) {
      console.log("is good!")
      const computedArea = computeTriangleArea(triangle)
      setResultVal(computedArea)
    }
    return;
  };


  return (
    <Container>
      <h3>Please enter 3 values to build a triangle. The Submit button will only fire and calculate the triangle area if the triangle is valid.</h3>
      <Segment className={styles.q3Body}>
        <div className={styles.q3Body_Left}>
          <Form error>
            <Form.Group>
              <Form.Field
                inline
                label="Side A"
                id='q3_sideA'
                type="number"
                name="sideA"
                value={triangle['sideA'] || ""}
                onChange={handleChange}
                control={Input}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                inline
                label="Side B"
                id='q3_sideB'
                type="number"
                name="sideB"
                value={triangle['sideB'] || ""}
                onChange={handleChange}
                control={Input}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                inline
                label="Side C"
                id='q3_sideC'
                type="number"
                name="sideC"
                value={triangle['sideC'] || ""}
                onChange={handleChange}
                control={Input}
              />
            </Form.Group>
            {inputErr &&
              <Message
                error
                header='Invalid Dimensions'
                content='The dimensions provided do not form a valid triangle. Please try again.'
              />
            }
            <Button disabled={inputErr} positive id="submit-btn" onClick={handleSubmit}>Submit</Button>

          </Form>
        </div>
        <div className={styles.q3Body_Right}>
          {
            resultVal ?
              <h2>{resultVal.toFixed(3)}</h2> :
              <h2>{"Triangle man, triangle man..."}</h2>
          }
        </div>

      </Segment>
    </Container>
  );
}