import { fireEvent, render, screen } from "@testing-library/react";
import MakeTransferConfirmation from "./MakeTransferConfirmation";
import {BrowserRouter as Router} from "react-router-dom";

import liveRateData from "./../../../assets/data/liveRatesExample";
import contacts from "../../../assets/data/contactExample";

const profileData = {
  firstName: "Sam",
  middleNames: "",
  lastName: "Brooks",
  bankAccountNo: 12345678,
  sortCode: "553456",
  holdings: [{
    amount: 3651.59,
    currencyCode: "GBP",
    currencyName: "British Pound",
    currencySymbol: "£",
    id: 1,
    userID: "OVhSjdW8chfg67ljJOOBaoKf61A2"
  },
  {
    amount: 43.29,
    currencyCode: "EUR",
    currencyName: "Euro",
    currencySymbol: "€",
    id: 3,
    userID: "OVhSjdW8chfg67ljJOOBaoKf61A2",
  }]
}

const contactData = 
  {
    contactName: "Zoe Jansen",
    bankName: "Venturist",
    bankIcon: "",
    accountNumber: 12345689,
    sortCode: "553457",
    IBAN: "GB56HLFX11005310840367",
    numberOfTransaction: 100,
    lastTransaction: 1645803922
  }


const exchangeInfo = {
  exchangeFrom: {
    user: profileData,
    currency: liveRateData[0],
    amount: 500,
    fee: 5
  },
  exchangeTo: {
    user:contactData,
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
    user:contactData,
    currency: liveRateData[0],
    amount: 700
  }
};

test("Check page renders properly", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const confirmation = screen.getByTestId("confirmation");

  expect(confirmation).toBeInTheDocument();
});

test("Check that total amount is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const totalFrom = screen.getByTestId("total-from");

  expect(totalFrom).toHaveTextContent("500.00");
});

test("Check that total symbol is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const totalFrom = screen.getByTestId("total-from");

  expect(totalFrom).toHaveTextContent("£");
});

test("Check user from name is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const userFromName = screen.getByTestId("user-from-name");

  expect(userFromName).toHaveTextContent("Sam Brooks");
});

test("Check user from account number is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const userFromAcc = screen.getByText("12345678");

  expect(userFromAcc).toBeInTheDocument();
});

test("Check user from sort code is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const userFromSort = screen.getAllByText("553456")[0];

  expect(userFromSort).toBeInTheDocument();
});

test("Check that funds remaining is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const fundsRemaining = screen.getByTestId("funds-remaining");

  expect(fundsRemaining).toHaveTextContent("£ 3146.59");
});

test("Check that funds remaining symbol is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const fundsRemainingSym = screen.getByTestId("funds-remaining");

  expect(fundsRemainingSym).toHaveTextContent("£");
});

test("Check that user to has correct name", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const userToName = screen.getByText("Zoe Jansen");

  expect(userToName).toBeInTheDocument();
});

test("Check that user to has correct account number", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const accTo = screen.getByText("12345689");

  expect(accTo).toBeInTheDocument();
});

test("Check that user to has correct sort code", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const sortTo = screen.getByText("553457");

  expect(sortTo).toBeInTheDocument();
});

test("Check that rate is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const rate = screen.getByTestId("rate")

  expect(rate).toHaveTextContent("1.3513");
});

test("Check that fee number is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const fee = screen.getByTestId("fee");

  expect(fee).toHaveTextContent("5.00")
});

test("Check that fee symbol is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const feeSymbol = screen.getByTestId("fee");

  expect(feeSymbol).toHaveTextContent("£");
});

test("Check that total to pay is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const totalToPay = screen.getByTestId("total-to-pay");

  expect(totalToPay).toHaveTextContent("505.00");
});

test("Check that total to pay symbol is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const totalToPaySym = screen.getByTestId("total-to-pay");

  expect(totalToPaySym).toHaveTextContent("£");
});

test("Check that recipient recieves is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const recipient = screen.getByTestId("recipient-recieves");

  expect(recipient).toHaveTextContent("700");
});

test("Check that recipient recieves symbol is correct", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const recipientSym = screen.getByTestId("recipient-recieves");

  expect(recipientSym).toHaveTextContent("$");
});

test("Check that the cancel button has a function", () => {
  const onClick = jest.fn();
  render(<Router><MakeTransferConfirmation exchangeInfo={exchangeInfo} handleCancel={onClick} /></Router>);

  const cancelButton = screen.getAllByTestId("button")[0];
  fireEvent.click(cancelButton);

  expect(onClick).toHaveBeenCalled();
});