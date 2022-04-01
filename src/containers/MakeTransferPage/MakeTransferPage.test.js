import MakeTransferPage from "./MakeTransferPage";
import { render, screen } from "@testing-library/react";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";
import {BrowserRouter as Router} from "react-router-dom";

xtest('Test the page renders', () => {
  render(<Router><MakeTransferPage profileData={profileData} contactData={contactData} /></Router>);

  const makeTransfer = screen.getByTestId("make-transfer");
  expect(makeTransfer).toBeInTheDocument();
});