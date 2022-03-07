import MakeTransferPage from "./MakeTransferPage";
import { fireEvent, render, screen } from "@testing-library/react";
import liveRateData from "../../assets/data/liveRatesExample";
import profileData from "../../assets/data/samanthaBrooksProfile";
import contactData from "../../assets/data/contactExample";

test('Test the page renders', () => {
  render(<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />);

  const makeTransfer = screen.getByTestId("make-transfer");

  expect(makeTransfer).toBeInTheDocument();
});