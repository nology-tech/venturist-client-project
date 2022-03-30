import { render, screen } from "@testing-library/react";
import Wallet from "./Wallet";
import { BrowserRouter as Router } from "react-router-dom";

let profileData = {
  holdings: {
    USD: 50,
    GBP: 20,
  },
};

let liveRateData = [
  {
    currencyName: "British Pound",
    currencyCode: "GBP",
    liveRate: 1.0,
    changeOfRate: 0.0,
    currencySymbol: "£",
  },
  {
    currencyName: "US Dollar",
    currencyCode: "USD",
    liveRate: 1.3513,
    changeOfRate: 0.004,
    currencySymbol: "$",
  },
];

describe("Testing the wallet", () => {
  test("Check to see if wallet renders", () => {
    render(
      <Router>
        <Wallet profileData={profileData} liveRateData={liveRateData} />
      </Router>
    );

    expect(screen.getByTestId("wallet")).toBeInTheDocument();
  });

  test("Check for correct number for tiles", () => {
    render(
      <Router>
        <Wallet profileData={profileData} liveRateData={liveRateData} />
      </Router>
    );

    expect(screen.getAllByTestId("tiles").length).toBe(2);
  });
});
