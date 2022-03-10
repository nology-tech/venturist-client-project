import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrencyConverter from "./CurrencyConverter";

let profileData = {holdings: {
  USD: 50,
  GBP: 20,
}};

let liveRateData = [
  {
    currencyName: "British Pound",
    currencyCode: "GBP",
    liveRate: 1.0000,
    changeOfRate: 0.000,
    currencySymbol: "£" 
  },
  {
    currencyName: "US Dollar",
    currencyCode: "USD",
    liveRate: 1.3513,
    changeOfRate: 0.004,
    currencySymbol: "$"
  }
]

describe("Testing Currency Converter", () => {
  test("Component Should Render", () => {
    render(
      <CurrencyConverter profileData={profileData} liveRateData={liveRateData} handleConversion={() => {}} />
    )

    expect(screen.getByTestId("currency-converter")).toBeInTheDocument();

  });

  test("Check to see if Correct Conversion options are allowed", () => {
    render(
      <CurrencyConverter profileData={profileData} liveRateData={liveRateData} handleConversion={() => {}} />
    )

    userEvent.type(screen.getByRole('textbox'),"10");

    userEvent.click(screen.getAllByText("Select...")[0]);
    userEvent.click(screen.getByText("GBP"));

    userEvent.click(screen.getByText("Select..."));
    userEvent.click(screen.getByText("USD"));

    userEvent.click(screen.getAllByRole("button")[1]);

    expect(screen.getByText("010 British Pound =")).toBeInTheDocument();
    expect(screen.getByText("13.51 US Dollar")).toBeInTheDocument();
    expect(screen.getByText("Make Transfer")).toBeInTheDocument();
  });

  test("Alert should sound if conversion is incorrectly tried", () => {

    window.alert = jest.fn();
 
    render(
      <CurrencyConverter profileData={profileData} liveRateData={liveRateData} handleConversion={() => {}} />
    )
    
    userEvent.click(screen.getAllByRole("button")[1]);

    expect(window.alert).toHaveBeenCalled();
  });

  test("Check to see if Make Transfer Button gives correct values", () => {

    const handleConversion = (amountFrom,amountTo, from, to) => {
      expect(Number(amountFrom)).toBe(10);
      expect(amountTo).toBe(13.51);
      expect(from).toBe('GBP');
      expect(to).toBe('USD')
    }

    render(
      <CurrencyConverter profileData={profileData} liveRateData={liveRateData} handleConversion={handleConversion} />
    )

    userEvent.type(screen.getByRole('textbox'),"10");

    userEvent.click(screen.getAllByText("Select...")[0]);
    userEvent.click(screen.getByText("GBP"));

    userEvent.click(screen.getByText("Select..."));
    userEvent.click(screen.getByText("USD"));

    userEvent.click(screen.getAllByRole("button")[1]);

    userEvent.click(screen.getByText("Make Transfer"));

  })
})