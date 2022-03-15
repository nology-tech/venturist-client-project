import { fireEvent, render, screen } from "@testing-library/react";
import MakeTransferConfirmation from "./MakeTransferConfirmation";
import {BrowserRouter as Router} from "react-router-dom";

import liveRateData from "./../../../assets/data/liveRatesExample";
import profileData from "./../../../assets/data/samanthaBrooksProfile";
import contacts from "../../../assets/data/contactExample";

const exchangeInfo = {
  exchangeFrom: {
    user: profileData,
    currency: liveRateData[0],
    amount: 500,
    fee: 5
  },
  exchangeTo: {
    user:contacts[0],
    currency: liveRateData[1],
    amount: 700
  }
};

const exchangeInfo2 = {
  exchangeFrom: {
    user: profileData,
    currency: liveRateData[1],
    amount: 500,
    fee: 5
  },
  exchangeTo: {
    user:contacts[0],
    currency: liveRateData[0],
    amount: 700
  }
};

test("Check page renders properly", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const confirmation = screen.getByTestId("confirmation");

  expect(confirmation).toBeInTheDocument();
});

test("Check that total amount is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const totalFrom = screen.getByTestId("total-from");

  expect(totalFrom).toHaveTextContent("500.00");
});

test("Check that total symbol is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const totalFrom = screen.getByTestId("total-from");

  expect(totalFrom).toHaveTextContent("£");
});

test("Check user from name is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const userFromName = screen.getByTestId("user-from-name");

  expect(userFromName).toHaveTextContent("Samantha Brooks");
});

test("Check user from account number is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const userFromAcc = screen.getByText("12345678");

  expect(userFromAcc).toBeInTheDocument();
});

test("Check user from sort code is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const userFromSort = screen.getAllByText("553456")[0];

  expect(userFromSort).toBeInTheDocument();
});

test("Check that funds remaining is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const fundsRemaining = screen.getByTestId("funds-remaining");

  expect(fundsRemaining).toHaveTextContent("3246.59");
});

test("Check that funds remaining symbol is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const fundsRemainingSym = screen.getByTestId("funds-remaining");

  expect(fundsRemainingSym).toHaveTextContent("£");
});

test("Check that user to has correct name", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const userToName = screen.getByText("Zoe Jansen");

  expect(userToName).toBeInTheDocument();
});

test("Check that user to has correct account number", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const accTo = screen.getByText("12345689");

  expect(accTo).toBeInTheDocument();
});

test("Check that user to has correct sort code", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const sortTo = screen.getByText("553457");

  expect(sortTo).toBeInTheDocument();
});

test("Check that rate is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const rate = screen.getByTestId("rate")

  expect(rate).toHaveTextContent("1.3513");
});

test("Check that fee number is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const fee = screen.getByTestId("fee");

  expect(fee).toHaveTextContent("5.00")
});

test("Check that fee symbol is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const feeSymbol = screen.getByTestId("fee");

  expect(feeSymbol).toHaveTextContent("£");
});

test("Check that total to pay is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const totalToPay = screen.getByTestId("total-to-pay");

  expect(totalToPay).toHaveTextContent("505.00");
});

test("Check that total to pay symbol is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const totalToPaySym = screen.getByTestId("total-to-pay");

  expect(totalToPaySym).toHaveTextContent("£");
});

test("Check that recipient recieves is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const recipient = screen.getByTestId("recipient-recieves");

  expect(recipient).toHaveTextContent("700");
});

test("Check that recipient recieves symbol is correct", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const recipientSym = screen.getByTestId("recipient-recieves");

  expect(recipientSym).toHaveTextContent("$");
});

test("Check that the cancel button has a function", () => {
  const onClick = jest.fn();
  render(<MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />);

  const cancelButton = screen.getAllByTestId("button")[0];
  fireEvent.click(cancelButton);

  expect(onClick).toHaveBeenCalled();
});

test("Check that the submit button works", () => {
  const onClick = jest.fn();
  render(
  <Router>
    <MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} />
  </Router>
  );

  const submitButton = screen.getAllByTestId("button")[1];
  fireEvent.click(submitButton);
  const success = screen.getByTestId("success");

  expect(success).toBeInTheDocument();
});