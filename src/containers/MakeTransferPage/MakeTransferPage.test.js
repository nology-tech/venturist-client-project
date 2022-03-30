import MakeTransferPage from "./MakeTransferPage";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";

test('Test the page renders', () => {
  render(<Router><MakeTransferPage profileData={profileData} contactData={contactData} /></Router>);

  const makeTransfer = screen.getByTestId("make-transfer");
  expect(makeTransfer).toBeInTheDocument();
});

xtest('Test going to next page from form', async () => {
  render(<Router><MakeTransferPage profileData={profileData} contactData={contactData} /></Router>);

  await waitForElementToBeRemoved(() => screen.queryByText("Loading live rates..."));
  const youSendInput = await screen.findByTestId("amountInput");
  userEvent.type(youSendInput, "1000");
  const continueButton = await screen.findAllByTestId("button")[0];
  fireEvent.click(continueButton);

  const nextPage = await screen.findByTestId("confirmSendContainer");

  expect(nextPage).toBeInTheDocument();
});