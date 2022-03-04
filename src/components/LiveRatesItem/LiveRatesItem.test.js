import { render, screen } from "@testing-library/react";
import LiveRatesItem from "./LiveRatesItem";

const defaultProps = {
  currencyCode: "USD",
  currency: "US Dollars",
  amount: 1,
  rate: 1.5,
  buttonName: "Send",
};

test("Test that LiveRatesItem renders with default props", () => {
  //Arrange
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const { container } = render(<LiveRatesItem {...defaultProps} />, {
    container: document.body.appendChild(table).appendChild(tableBody),
  });
  //Act
  const row = screen.getByTestId("liverate-row");
  const rowChild1 = row.firstChild;
  const rowChild2 = rowChild1.nextSibling;
  const rowChild3 = rowChild2.nextSibling;
  const rowChild4 = rowChild3.nextSibling;
  //Assert
  expect(row).toBeInTheDocument();
  expect(rowChild1).toHaveTextContent("US Dollars");
  expect(rowChild2).toHaveTextContent("1");
  expect(rowChild3).toHaveTextContent("1.5");
  expect(rowChild4).toHaveTextContent("Send");
});
