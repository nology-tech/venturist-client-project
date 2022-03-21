import { render, screen } from "@testing-library/react";
import CreateAccountPage from "./CreateAccountPage";

describe("Testing Create Account Page", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(<CreateAccountPage />);
    // Act
    const section = screen.getByTestId("createAccount");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
