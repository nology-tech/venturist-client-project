import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BillingAddress from "./BillingAddress";

describe("Testing Billing Address Form", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(
      <Router>
        <BillingAddress />
      </Router>
    );
    // Act
    const section = screen.getByTestId("billingAddress");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
