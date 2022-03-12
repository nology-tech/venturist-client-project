import MakeTransferChooseModal from "./MakeTransferChooseModal";
import liveRateData from "../../../assets/data/liveRatesExample";
import contactData from "./../../../assets/data/contactExample";
import { fireEvent, render, screen } from "@testing-library/react";

test('Render the component', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const header = screen.getByText("Choose Currency");

  expect(header).toBeInTheDocument();
});

test('Render the magnifying glass', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const magnifyingGlass = screen.getByTitle("Search");

  expect(magnifyingGlass).toBeInTheDocument();
});

test('Cross should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const cross = screen.getAllByRole("img")[0];
  fireEvent.click(cross);

  expect(onClick).toHaveBeenCalled();
});

test('Search should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const search = screen.getByRole("textbox");
  fireEvent.change(search, {target: {value: 'test'}});

  expect(onSearch).toHaveBeenCalled();
  expect(search.value).toBe('test');
});

test('Expect currency column head to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const currency = screen.getByText("Currency");
  
  expect(currency).toBeInTheDocument();
});

test('Expect rate column head to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const rate = screen.getByText("Rate");
  
  expect(rate).toBeInTheDocument();
});

test('Expect currency list to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Currency" content={liveRateData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const rate = screen.getByText("British Pound");
  
  expect(rate).toBeInTheDocument();
});

test('Render the component', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const header = screen.getByText("Choose Recipient");

  expect(header).toBeInTheDocument();
});

test('Render the magnifying glass', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const magnifyingGlass = screen.getByTitle("Search");

  expect(magnifyingGlass).toBeInTheDocument();
});

test('Cross should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const cross = screen.getAllByRole("img")[0];
  fireEvent.click(cross);

  expect(onClick).toHaveBeenCalled();
});

test('Search should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const search = screen.getByRole("textbox");
  fireEvent.change(search, {target: {value: 'test'}});

  expect(onSearch).toHaveBeenCalled();
  expect(search.value).toBe('test');
});

test('Expect sort column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const sortCode = screen.getByText("Sort Code");
  
  expect(sortCode).toBeInTheDocument();
});

test('Expect name column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const name = screen.getByText("Name");
  
  expect(name).toBeInTheDocument();
});

test('Expect account number column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const accountNumber = screen.getByText("Account No");
  
  expect(accountNumber).toBeInTheDocument();
});

test('Expect user list to render, test singular name', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={contactData} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const name = screen.getByText("Zoe Jansen");
  
  expect(name).toBeInTheDocument();
});

test('Expect text to render when empty list of contacts', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseModal type="Recipient" content={[]} handleEvent={onClick} handleSearch={onSearch} handleShowModal={onClick} />);

  const emptyListText = screen.getByText("No results found.");
  
  expect(emptyListText).toBeInTheDocument();
});
