import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("The header component renders on the main page", () => {
  render(<App />);
  const header = screen.getByText("Add your notes here");
  expect(header).toBeInTheDocument();
});
