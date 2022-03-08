import MakeTransferPage from "./MakeTransferPage";
import { fireEvent, render, screen } from "@testing-library/react";
import liveRateData from "../../assets/data/liveRatesExample";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";
import userEvent from "@testing-library/user-event";

test('Test the page renders', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const makeTransfer = screen.getByTestId("make-transfer");

  expect(makeTransfer).toBeInTheDocument();
});

test('Test the pop-up appears for currency from', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const currencyFromButton = screen.getByTestId("currencyFrom");
  fireEvent.click(currencyFromButton);
  const currencyPopUp = screen.getByTestId("choose-currency");

  expect(currencyPopUp).toBeInTheDocument();
});

test('Test the pop-up appears for currency to', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const currencyToButton = screen.getByTestId("currencyTo");
  fireEvent.click(currencyToButton);
  const currencyPopUp = screen.getByTestId("choose-currency");

  expect(currencyPopUp).toBeInTheDocument();
});

test('Test currency changes properly when clicking currency from', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const currencyFromButton = screen.getByTestId("currencyFrom");
  fireEvent.click(currencyFromButton);
  const currencyCHF = screen.getAllByTestId("overlay")[3];
  fireEvent.click(currencyCHF);
  const changedCurrency = screen.getByText("CHF - Swiss Franc");

  expect(changedCurrency).toBeInTheDocument();
});

test('Test currency changes properly when clicking currency to', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const currencyToButton = screen.getByTestId("currencyTo");
  fireEvent.click(currencyToButton);
  const currencyCHF = screen.getAllByTestId("overlay")[3];
  fireEvent.click(currencyCHF);
  const changedCurrency = screen.getByText("CHF - Swiss Franc");

  expect(changedCurrency).toBeInTheDocument();
});

test('Test going to next page from form', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const youSendInput = screen.getByTestId("amountInput");
  userEvent.type(youSendInput, "1000");
  const continueButton = screen.getByTestId("button");
  fireEvent.click(continueButton);

  const nextPage = screen.getByTestId("confirmSendContainer");

  expect(nextPage).toBeInTheDocument();
});