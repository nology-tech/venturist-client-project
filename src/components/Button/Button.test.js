import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Test that button renders with correct inner text", () => {
  //Arrange
  render(<Button buttonName="test button" />);
  //Act
  const button = screen.getByTestId("button");
  //Assert
  expect(button).toHaveTextContent("test button");
});
