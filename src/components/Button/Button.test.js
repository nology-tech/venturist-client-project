import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("Test that button renders with correct inner text", () => {
  //Arrange
  render(<Button buttonName="test button" />);
  //Act
  const button = screen.getByTestId("button");
  //Assert
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("test button");
});

test("Test that the button onClick={buttonFunction} calls the function passed in a prop", () => {
  //Arrange
  const onClick = jest.fn();
  render(<Button buttonFunction={onClick} />);
  const button = screen.getByTestId("button");
  //Act
  fireEvent.click(button);
  //Assert
  expect(onClick).toHaveBeenCalled();
});
