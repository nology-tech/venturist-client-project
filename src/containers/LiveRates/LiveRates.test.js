import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
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

test("Test that LiveRates renders with default props", async () => {
  //Arrange
  render(<LiveRates {...defaultProps} />);
  let table;
  //Act

  await act(() => {
    table = screen.getByTestId("liverate-loading");
  });

  //Assert
  expect(table).toBeInTheDocument();
  expect(table).toContainElement(table);
});
