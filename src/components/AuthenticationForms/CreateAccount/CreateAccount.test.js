import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CreateAccount from "./CreateAccount";

describe("Testing Create Account", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(
      <Router>
        <CreateAccount />
      </Router>
    );
    // Act
    const section = screen.getByTestId("createAccount-form");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
