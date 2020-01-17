import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";

test("app renders without issues", () => {
    render(<App />);
})

test("dark mode working", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("dark")).toBeInTheDocument();
  const dark = getByTestId('dark');
  fireEvent.click(dark);
  expect(getByTestId("dark")).toBeTruthy();
});