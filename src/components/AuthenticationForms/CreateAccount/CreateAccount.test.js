import { render, screen } from "@testing-library/react";
import CreateAccount from "./CreateAccount";

describe("Testing Create Account", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(<CreateAccount />);
    // Act
    const section = screen.getByTestId("createAccount-form");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
