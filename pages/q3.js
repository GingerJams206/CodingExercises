import Link from 'next/link'
import { useState } from 'react'
import { Container, Button, Form, Segment } from 'semantic-ui-react'

const isValidTriangle = ({ sideA, sideB, sideC }) => {
  // a triangle is valid if sum of its two sides is greater than the third side
  // a + b > c
  // a + c > b
  // b + c > a
  if ((+sideA + +sideB > +sideC) && (+sideA + +sideC > +sideB) && (+sideB + +sideC > +sideA)) return true;
  return false;
};

export default function Question2() {
  const [triangle, setTriangle] = useState({ sideA: null, sideB: null, sideC: null });
  const [resultVal, setResultVal] = useState(null);


  const handleChange = (event) => {
    const { value, name } = event.target;
    setTriangle(prev => ({ ...prev, [name]: value }))
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
      <Segment>
        <Form>
          <Form.Group>
            <Form.Field
              id='q3_sideA'
              type="number"
              name="sideA"
              value={triangle['sideA'] || ""}
              onChange={handleChange}
              control="input"
            />
            <Form.Field
              id='q3_sideB'
              type="number"
              name="sideB"
              value={triangle['sideB'] || ""}
              onChange={handleChange}
              control="input"
            />
            <Form.Field
              id='q3_sideC'
              type="number"
              name="sideC"
              value={triangle['sideC'] || ""}
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
              <h2 key={i}>{resultVal}</h2> :
              <h2>{"null"}</h2>
          }
        </Form>
      </Segment>
    </Container>
  );
}