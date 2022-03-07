import MakeTransferChooseCurrency from "./MakeTransferChooseCurrency";
import liveRateData from "./../../../assets/data/liveRatesExample";
import { fireEvent, render, screen } from "@testing-library/react";

test('Render the component', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const header = screen.getByText("Choose Currency");

  expect(header).toBeInTheDocument();
});