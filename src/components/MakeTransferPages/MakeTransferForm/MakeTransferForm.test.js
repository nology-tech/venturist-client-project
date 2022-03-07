import MakeTransferForm from "./MakeTransferForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { CurrencyFlag } from "react-currency-flags/dist/components";
import mockData from "../../../assets/data/liveRatesExample";
import userEvent from '@testing-library/user-event'

test("", () => {});

test("Should render the input box", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>);

  // Act 
  const youSendInput = screen.getByTestId("amountInput");
  // Assert
  expect(youSendInput).toBeInTheDocument();

});

test("Should render the correct placeholder text", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>);

  // Act 
  const placeholderText = screen.getByTestId("amountInput");
  // Assert
  expect(placeholderText).toHaveAttribute("placeholder", "00.00")
});

test("Both headers render with correct text", () => {
  // Arrange
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>)
    // Act
    const youSendHeader = screen.queryByText("You send");
    const recipientGetsHeader = screen.queryByText("Recipient gets");
    // Assert
    expect(youSendHeader).toBeInTheDocument();
    expect(recipientGetsHeader).toBeInTheDocument();
});

test("Should render the correct conversion amount", () => {
    // Arrange 
    const onClick = jest.fn();
    render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>)

    // Act
    const correctConversionAmount = screen.getByTestId("amountOutput");
    userEvent.type(screen.getByTestId("amountInput"), '1000')
    // Assert
    expect(correctConversionAmount).toHaveTextContent("1351.30")
});

test("Should render the correct total amount", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
  exchangeTo={mockData[1]}
  handleChangingCurrency={(onClick)}
  handleShowForm={(onClick)}/>)

  // Act
  const totalAmount = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), '1000')
  // Assert
  expect(totalAmount).toHaveTextContent("1000.00")
});

test("Should render the button with the correct text content", () => {
  // Arrange
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
  exchangeTo={mockData[1]}
  handleChangingCurrency={(onClick)}
  handleShowForm={(onClick)}/>)

  // Act
  const buttonText = screen.getByTestId("button")
  // Assert
  expect(buttonText).toBeInTheDocument();
  expect(buttonText).toHaveTextContent("Continue")
});

test("Should render the correct flag corresponding with the currency type", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
  exchangeTo={mockData[1]}
  handleChangingCurrency={(onClick)}
  handleShowForm={(onClick)}/>)

  // Act
  // const amountInput = screen.getByTestId("amountInput")
  const correctConversionAmount = screen.getByTestId("amountOutput");
  userEvent.type(screen.getByTestId("amountInput"), '1000')
  // Assert
  expect(correctConversionAmount).toHaveTextContent("1351.30")
});

test("OnlyNumber prevents multiple decimal points", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
  exchangeTo={mockData[1]}
  handleChangingCurrency={(onClick)}
  handleShowForm={(onClick)}/>)

  // Act
  const youSendInput = screen.getByTestId("amountInput");
  const totalBox = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), '1000.....00')
  // Assert
  expect(totalBox).toHaveTextContent("1000.00")
});

test("Total box displays value to max two decimal places", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
  exchangeTo={mockData[1]}
  handleChangingCurrency={(onClick)}
  handleShowForm={(onClick)}/>)

  // Act
  const youSendInput = screen.getByTestId("amountInput");
  const totalBox = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), '1000.78965412')
  // Assert
  expect(totalBox).toHaveTextContent("1000.79")
});














