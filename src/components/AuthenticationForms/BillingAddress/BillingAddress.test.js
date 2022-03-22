import { render, screen } from "@testing-library/react";
import BillingAddress from "./BillingAddress";

describe("Testing Billing Address Form", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(<BillingAddress />);
    // Act
    const section = screen.getByTestId("billingAddress");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
