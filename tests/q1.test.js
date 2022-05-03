import React from "react";
import { render, fireEvent, screen } from "./test-utils";
import Question1 from "../pages/q1";
import { act } from "react-dom/test-utils";


describe('Question1', () => {

  const q1Instance = render(<Question1 />)



  const input = screen.getByRole('textbox')
  const result = screen.getByRole('heading', { level: 2 })
  const button = screen.getByRole("button")

  test('Should render blank', () => {
    expect(input.value).toBe("")
  })

  test('Simulate user input', () => {
    const setState = jest.fn();
    const useStateMock = (useState) => [useState, setState]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    fireEvent.change(input, { target: { value: 'test' } })
    expect(setState).toHaveBeenCalled();
  })
})
