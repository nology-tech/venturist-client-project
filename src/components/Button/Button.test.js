import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Test", () => {
  render(<Button buttonName="test button" />);
  expect(screen.getByTestId("button")).toHaveTextContent("test button");
});
