import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";
import UserCard from "./components/UserCard";

test("app renders without issues", () => {
    render(<App />);
})

// test('props displaying correctly', (data) => {
//   const { getByTestId } = render(<App />);
//   const display = getByTestId("country");
//   expect(display.textContent).toBe('Country: ' + data.country );
// })

test("dark mode working", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("dark")).toBeInTheDocument();
  const dark = getByTestId('dark');
  fireEvent.click(dark);
  expect(dark).toBeTruthy();
});