import React from "react";
import { screen, render } from "@testing-library/react";
import ToDoList from './ToDoList'

test ('renders a list of todos', () => {
  render(<ToDoList todoArray = {["first todo", "second todo"]}/>)
  const firsttodo = screen.getByText("first todo")
  const secondtodo = screen.getByText("second todo")
  screen.debug()
  expect(firsttodo).toBeInTheDocument();
  expect(secondtodo).toBeInTheDocument();
})