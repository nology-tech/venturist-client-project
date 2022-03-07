import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MakeTransferChooseRecipient from "./MakeTransferChooseRecipient";
import contactData from "./../../../assets/data/contactExample";

test('Render the component', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);

  const header = screen.getByText("Choose Recipient");

  expect(header).toBeInTheDocument();
});

test('Render the magnifying glass', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);

  const magnifyingGlass = screen.getByTitle("Search");

  expect(magnifyingGlass).toBeInTheDocument();
});

test('Cross should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);

  const cross = screen.getAllByRole("img")[0];
  fireEvent.click(cross);

  expect(onClick).toHaveBeenCalled();
});

test('Search should have a function', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);
  const search = screen.getByRole("textbox");
  fireEvent.change(search, {target: {value: 'test'}});

  expect(onSearch).toHaveBeenCalled();
  expect(search.value).toBe('test');
});

test('Expect sort column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);
  const sortCode = screen.getByText("Sort Code");
  
  expect(sortCode).toBeInTheDocument();
});

test('Expect name column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);
  const name = screen.getByText("Name");
  
  expect(name).toBeInTheDocument();
});

test('Expect account number column header to render', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);
  const accountNumber = screen.getByText("Account No");
  
  expect(accountNumber).toBeInTheDocument();
});

test('Expect user list to render, test singular name', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={contactData} toggleChooseRecipients={onClick} handleSearch={onSearch} />);
  const name = screen.getByText("Zoe Jansen");
  
  expect(name).toBeInTheDocument();
});

test('Expect text to render when empty list of contacts', () => {
  const onClick = jest.fn();
  const onSearch = jest.fn();
  render(<MakeTransferChooseRecipient userCardList={[]} toggleChooseRecipients={onClick} handleSearch={onSearch} />);

  const emptyListText = screen.getByText("You don't seem to have any contacts yet, try adding one!");
  
  expect(emptyListText).toBeInTheDocument();
});
