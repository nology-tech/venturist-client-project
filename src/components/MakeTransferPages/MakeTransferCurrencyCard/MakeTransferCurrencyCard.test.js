import MakeTransferCurrencyCard from "./MakeTransferCurrencyCard";
import currency from "./../../../assets/data/liveRatesExample";
import { fireEvent, render, screen } from "@testing-library/react";

test('Check it renders the currency name', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferCurrencyCard currency={currency[0]} handleChangingCurrency={(onClick)}/>);

  //Act
  const currencyName = screen.queryByText("British Pound");

  //Assert
  expect(currencyName).toBeInTheDocument();
});

test('Check it renders the currency flag', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferCurrencyCard currency={currency[0]} handleChangingCurrency={(onClick)}/>);

  //Act
  const flagSpan = screen.queryByTestId("currency-flag");

  //Assert
  expect(flagSpan).toBeInTheDocument();
})

test('Check it renders the currency rate', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferCurrencyCard currency={currency[0]} handleChangingCurrency={(onClick)}/>);

  //Act
  const currencyRate = screen.queryByText("1.0000");

  //Assert
  expect(currencyRate).toBeInTheDocument();
});

test('Check the overlay exists', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferCurrencyCard currency={currency[0]} handleChangingCurrency={(onClick)}/>);

  //Act
  const overlay = screen.getByTestId("overlay")

  //Assert
  expect(overlay).toBeInTheDocument();
});

test('Check the overlay click works', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferCurrencyCard currency={currency[0]} handleChangingCurrency={(onClick)}/>);

  //Act
  const overlay = screen.getByTestId("overlay")
  fireEvent.click(overlay);

  //Assert
  expect(onClick).toHaveBeenCalled();
});