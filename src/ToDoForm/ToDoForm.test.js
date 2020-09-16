import React from "react";
import { screen, render } from "@testing-library/react";

import ToDoForm from "./ToDoForm";

test("There is a text box and submit button on the page", () => {
  render(<ToDoForm />);
  const textbox = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /Submit/ });

  expect(textbox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
