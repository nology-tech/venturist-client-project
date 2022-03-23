import { render, screen } from "@testing-library/react";
import CreateAccountPage from "./CreateAccountPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Create Account Page", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(
      <Router>
        <CreateAccountPage />
      </Router>
    );
    // Act
    const section = screen.getByTestId("createAccount");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
