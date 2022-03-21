import { render, screen } from "@testing-library/react";
import AddBankDetails from "./AddBankDetails";

describe("Testing Add Bank Details Form", () => {
  test("Test to render form on screen", () => {
    // Arrange
    render(<AddBankDetails />);
    // Act
    const section = screen.getByTestId("addBankDetails-form");
    // Assert
    expect(section).toBeInTheDocument();
  });
});
