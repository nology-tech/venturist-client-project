import MakeTransferForm from "./MakeTransferForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import liveRateData from "./../../../assets/data/liveRatesExample";
import profileData from "./../../../assets/data/samanthaBrooksProfile";

const exchangeInfo = {
  exchangeFrom: {
    user: profileData,
    currency: liveRateData[0],
    amount: 0
  },
  exchangeTo: {
    user: {},
    currency: liveRateData[1],
    amount: 0
  }
};

const exchangeInfo2 = {
  exchangeFrom: {
    user: profileData,
    currency: liveRateData[1],
    amount: 0
  },
  exchangeTo: {
    user: {},
    currency: liveRateData[0],
    amount: 0
  }
};

// const [exchangeInfo, setExchangeInfo] = useState(exchangeBase); 

const setExchangeInfo = jest.fn();

test("Should render the input box", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const youSendInput = screen.getByTestId("amountInput");

  // Assert
  expect(youSendInput).toBeInTheDocument();
});

test("Should render the correct placeholder text", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const placeholderText = screen.getByTestId("amountInput");

  // Assert
  expect(placeholderText).toHaveAttribute("placeholder", "00.00");
});

test("Both headers render with correct text", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

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
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const correctConversionAmount = screen.getByTestId("amountOutput");
  userEvent.type(screen.getByTestId("amountInput"), "1000");

  // Assert
  expect(correctConversionAmount).toHaveTextContent("1351.30");
});

test("Should render the correct total amount", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const totalAmount = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), "1000");

  // Assert
  expect(totalAmount).toHaveTextContent("£ 1010.00");
});

test("Should render the button with the correct text content", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const buttonText = screen.getByTestId("button");

  // Assert
  expect(buttonText).toBeInTheDocument();
  expect(buttonText).toHaveTextContent("Continue");
});

test("Check correct currency details render on page - British Pound, US Dollar", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const currencyFrom = screen.getByTestId("currencyFrom");
  const currencyTo = screen.getByTestId("currencyTo");

  // Assert
  expect(currencyFrom).toHaveTextContent("British Pound");
  expect(currencyTo).toHaveTextContent("US Dollar");
});

test("Check correct currency details render on page - US Dollar, British Pound", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo2}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const currencyFrom = screen.getByTestId("currencyFrom");
  const currencyTo = screen.getByTestId("currencyTo");

  // Assert
  expect(currencyFrom).toHaveTextContent("US Dollar");
  expect(currencyTo).toHaveTextContent("British Pound");
});

test("OnlyNumber prevents multiple decimal points", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const youSendInput = screen.getByTestId("amountInput");
  const totalBox = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), "1000.....00");

  // Assert
  expect(totalBox).toHaveTextContent("£ 1010.00");
});

test("Total box displays value to max two decimal places", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const youSendInput = screen.getByTestId("amountInput");
  const totalBox = screen.getByTestId("totalBox");
  userEvent.type(screen.getByTestId("amountInput"), "1000.78965412");

  // Assert
  expect(totalBox).toHaveTextContent("£ 1010.80");
});

test("Test the fee is in the document", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const symbol = screen.getByTestId("fee-rate");

  expect(symbol).toBeInTheDocument();
});

test("Test the fee symbol and amount are correct", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo2}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const youSendInput = screen.getByTestId("amountInput");
  userEvent.type(youSendInput, "100");
  const symbol = screen.getByTestId("fee-rate");

  // Assert
  expect(symbol).toHaveTextContent("$ 1.00");
});

test("Test the delivery time is correct", () => {
  // Arrange
  const onClick = jest.fn();
  render(
    <MakeTransferForm
      exchangeInfo={exchangeInfo}  
      setExchangeInfo={setExchangeInfo} 
      handleShowForm={onClick} 
      liveRateData={liveRateData} 
    />
  );

  // Act
  const deliveryText = screen.getByText("Typically same day");

  // Assert
  expect(deliveryText).toBeInTheDocument();
});