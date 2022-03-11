import { render, screen } from "@testing-library/react";
import LiveRatesItemEdit from "./LiveRatesItemEdit";

// To Do: If this component is developed further, more tests will need to be written

const defaultProps = {
  buttonFunction: jest.fn(),
  buttonName: "confirm",
  codes: ["usd", "gbp", "eur"],
  handleCurrency: jest.fn(),
  handleAmount: jest.fn()
};

test("Test that LiveRatesItemEdit renders with default props", () => {
  //Arrange
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const { container } = render(<LiveRatesItemEdit {...defaultProps} />, {
    container: document.body.appendChild(table).appendChild(tableBody),
  });
  //Act
  const row = screen.getByTestId("liverate-row-edit");

  //Assert
  expect(row).toBeInTheDocument();
});


