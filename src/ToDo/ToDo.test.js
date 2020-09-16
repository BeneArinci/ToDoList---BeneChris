import React from "react";
import { screen, render } from "@testing-library/react";
import ToDo from './ToDo'

test ('renders the todo', () => {
  render(<ToDo todo = {"first todo"}/>)
  const todo = screen.getByText("first todo");
  expect(todo).toBeInTheDocument();
})