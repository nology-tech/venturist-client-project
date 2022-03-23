import { render, screen } from "@testing-library/react";
import AddBankDetails from "./AddBankDetails";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Add Bank Details Form", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(
      <Router>
        <AddBankDetails />
      </Router>
    );
    // Act
    const section = screen.getByTestId("addBankDetails-form");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
