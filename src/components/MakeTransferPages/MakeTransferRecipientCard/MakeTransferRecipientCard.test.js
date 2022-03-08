import MakeTransferRecipientCard from "./MakeTransferRecipientCard";
import contactList from "./../../../assets/data/contactExample";
import { fireEvent, render, screen } from "@testing-library/react";

test('Check it renders the contacts name', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferRecipientCard userCard={contactList[0]} handleChooseRecipient={onClick}/>);

  //Act
  const contactName = screen.queryByText("Zoe Jansen");

  //Assert
  expect(contactName).toBeInTheDocument();
});

test('Check it renders the sort code', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferRecipientCard userCard={contactList[0]} handleChooseRecipient={onClick} />);

  //Act
  const contactSortCode = screen.queryByText("553456");

  //Assert
  expect(contactSortCode).toBeInTheDocument();
});

test('Check it renders the account number', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferRecipientCard userCard={contactList[0]} handleChooseRecipient={onClick} />);

  //Act
  const contactAccountNumber = screen.queryByText("12345689");

  //Assert
  expect(contactAccountNumber).toBeInTheDocument();
});

test('Check the it renders the image', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferRecipientCard userCard={contactList[0]} handleChooseRecipient={onClick} />);

  //Act
  const bankImage = screen.queryByRole("img");

  //Assert
  expect(bankImage).toBeInTheDocument();
});

test('Check the click function works', () => {
  //Arrange
  const onClick = jest.fn();
  render(<MakeTransferRecipientCard userCard={contactList[0]} handleChooseRecipient={onClick} />);

  //Act
  const recipientCard = screen.getByTestId("recipient-card")
  fireEvent.click(recipientCard);

  //Assert
  expect(onClick).toHaveBeenCalled();
});