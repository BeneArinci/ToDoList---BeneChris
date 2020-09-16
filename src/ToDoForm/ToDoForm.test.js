import React from "react";
import { screen, render } from "@testing-library/react";

import ToDoForm from "./ToDoForm";

test("There is a text box and submit button on the page", () => {
  render(<ToDoForm />);
  const textbox = screen.getAllByRole("textbox");
  const button = screen.getAllByRole("button", { name: /Submit/ });

  expect(textbox).ToBeInTheDocument();
  expect(button).ToBeInTheDocument();
});
