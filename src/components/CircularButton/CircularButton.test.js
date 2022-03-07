import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CircularButton from "./CircularButton";

describe ("Testing for circular button component", () => {
  test("Test to render on screen", () => {
    // Arrange
    render(<CircularButton content="Test"/>);
    // Act
    const button = screen.getByTestId("circular-button");
    // Assert
    expect(button).toBeInTheDocument();
  });
  test("Test that button renders supplied text", () => {
    // Arrange
    render(<CircularButton content="Test"/>);
    // Act
    const button = screen.getByText("Test");
    // Assert
    expect(button).toBeInTheDocument();
  });
});