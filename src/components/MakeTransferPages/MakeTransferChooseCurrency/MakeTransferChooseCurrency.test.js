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

test('Render the magnifying glass', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const magnifyingGlass = screen.getByTitle("Search");

  expect(magnifyingGlass).toBeInTheDocument();
});

test('Cross should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const cross = screen.getAllByRole("img")[0];
  fireEvent.click(cross);

  expect(onClick).toHaveBeenCalled();
});

test('Search should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const search = screen.getByRole("textbox");
  fireEvent.change(search, {target: {value: 'test'}});

  expect(onSearch).toHaveBeenCalled();
  expect(search.value).toBe('test');
});

test('Expect currency column head to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const currency = screen.getByText("Currency");
  
  expect(currency).toBeInTheDocument();
});

test('Expect rate column head to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const rate = screen.getByText("Rate");
  
  expect(rate).toBeInTheDocument();
});

test('Expect currency list to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={onClick} handleSearch={onSearch}/>);

  const rate = screen.getByText("British Pound");
  
  expect(rate).toBeInTheDocument();
});