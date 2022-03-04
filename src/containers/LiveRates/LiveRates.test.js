import { render, screen } from "@testing-library/react";
import LiveRates from "./LiveRates";

const defaultProps = {
  rates: [
    {
      currencyName: "British Pound",
      currencyCode: "GBP",
      liveRate: 1.0,
      changeOfRate: 0.0,
      currencySymbol: "£",
    },
  ],
};

test("Test that LiveRates renders with default props", () => {
  //Arrange
  render(<LiveRates {...defaultProps} />);
  //Act
  const table = screen.getByTestId("liverate-table");

  //Assert
  expect(table).toBeInTheDocument();
  expect(table).toHaveTextContent("Currency Amount Rate GBP 10 Edit");
});
