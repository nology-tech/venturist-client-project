import MakeTransferPage from "./MakeTransferPage";
import { fireEvent, render, screen } from "@testing-library/react";
import liveRateData from "../../assets/data/liveRatesExample";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";

xtest('Test the page renders', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const makeTransfer = screen.getByTestId("make-transfer");

  expect(makeTransfer).toBeInTheDocument();
});

xtest('Test going to next page from form', () => {
  render(<Router><MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} /></Router>);

  const youSendInput = screen.getByTestId("amountInput");
  userEvent.type(youSendInput, "1000");
  const continueButton = screen.getAllByTestId("button")[0];
  fireEvent.click(continueButton);

  const nextPage = screen.getByTestId("confirmSendContainer");

  expect(nextPage).toBeInTheDocument();
});