import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoForm from "./ToDoForm";

test("There is a text box and submit button on the page", () => {
  render(<ToDoForm />);
  const textbox = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /Submit/ });

  expect(textbox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("You can submit the form to add a new test", () => {
  render(<ToDoForm />);
  const textbox = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /Submit/ });
  userEvent.type(textbox, "Do washing");
  userEvent.click(button);
  const todo = screen.getByText("Do washing");
  expect(todo).toBeInTheDocument();
});
