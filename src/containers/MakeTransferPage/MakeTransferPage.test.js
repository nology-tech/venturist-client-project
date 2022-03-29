import MakeTransferPage from "./MakeTransferPage";
import { fireEvent, render, screen } from "@testing-library/react";
import liveRateData from "../../assets/data/liveRatesExample";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";

test('Test the page renders', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const makeTransfer = screen.getByTestId("make-transfer");

  expect(makeTransfer).toBeInTheDocument();
});

// Move to form
test('Test the pop-up appears for currency from', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const currencyFromButton = screen.getByTestId("currencyFrom");
  fireEvent.click(currencyFromButton);
  const currencyPopUp = screen.getByTestId("choose-modal");

  expect(currencyPopUp).toBeInTheDocument();
});

// Move to form
test('Test the pop-up appears for currency to', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const currencyToButton = screen.getByTestId("currencyTo");
  fireEvent.click(currencyToButton);
  const currencyPopUp = screen.getByTestId("choose-modal");

  expect(currencyPopUp).toBeInTheDocument();
});

// Move to form
test('Test currency changes properly when clicking currency from', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const currencyFromButton = screen.getByTestId("currencyFrom");
  fireEvent.click(currencyFromButton);
  const currencyCHF = screen.getAllByTestId("overlay")[3];
  fireEvent.click(currencyCHF);
  const changedCurrency = screen.getByText("CHF - Swiss Franc");

  expect(changedCurrency).toBeInTheDocument();
});

// Move to form
test('Test currency changes properly when clicking currency to', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const currencyToButton = screen.getByTestId("currencyTo");
  fireEvent.click(currencyToButton);
  const currencyCHF = screen.getAllByTestId("overlay")[3];
  fireEvent.click(currencyCHF);
  const changedCurrency = screen.getByText("CHF - Swiss Franc");

  expect(changedCurrency).toBeInTheDocument();
});

test('Test going to next page from form', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const youSendInput = screen.getByTestId("amountInput");
  userEvent.type(youSendInput, "1000");
  const continueButton = screen.getAllByTestId("button")[0];
  fireEvent.click(continueButton);

  const nextPage = screen.getByTestId("confirmSendContainer");

  expect(nextPage).toBeInTheDocument();
});