import React from "react";
import { render, fireEvent } from "./test-utils";
import Question1 from "../pages/q1";
import { act } from "react-dom/test-utils";




describe('Question1', () => {
  const q1Instance = render(<Question1 />)

  const input = q1Instance.getByTestId('input')
  const result = q1Instance.getByTestId('result_val')
  const button = q1Instance.getByTestId("submit")

  const mockCallBack = jest.fn();
  test('Should render blank', () => {
    expect(input.value).toBe("")
  })

  test('Simulate user input', () => {
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe("test")
  })

  
})
