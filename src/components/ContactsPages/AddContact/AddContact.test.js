import { render, screen } from "@testing-library/react";
import AddContact from "./AddContact";
import userEvent from '@testing-library/user-event';


describe('Rendering components', () => {

  test('Check it renders the page', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const addRecipient = screen.queryByTestId("add-recipient");

    //Assert
    expect(addRecipient).toBeInTheDocument();
  });

  test('Check if the input renders', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getNameInput = screen.queryAllByRole("textbox")[0];
  
    //Assert
    expect(getNameInput).toBeInTheDocument();
  });

});

describe('Check functions', () => {
  test('Check if the typed message is in the name input box', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getNameInput = screen.queryAllByRole("textbox")[0];
    userEvent.type(getNameInput, "ebrima")
  
    //Assert
    expect(getNameInput).toHaveDisplayValue("ebrima")
  });

  test('Check if the typed message is in the account type input box', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getAccountType = screen.queryAllByRole("textbox")[1];
    userEvent.type(getAccountType, "current-account")
  
    //Assert
    expect(getAccountType).toHaveDisplayValue("current-account")
  });

  test('Check if the typed message is in the account number input box', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getAccountNumber = screen.queryAllByRole("textbox")[2];
    userEvent.type(getAccountNumber, "235556792")
  
    //Assert
    expect(getAccountNumber).toHaveDisplayValue("235556792")
  });


  test('Check if the typed message is in the sort-code input box', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getSortCode = screen.queryAllByRole("textbox")[3];
    userEvent.type(getSortCode , "5556792");
  
    //Assert
    expect(getSortCode).toHaveDisplayValue("5556792")
  });


  test('Check if the button response onClick for cancel', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);
    
    //Act
    const getButton = screen.queryByRole("button", {name:"Cancel"});
    userEvent.click(getButton);
  
    //Assert
    expect(onClick).toBeCalled();
  });


  test('Check if the button cross symbol response to onClick', () => {
    //Arrange
    const onClick = jest.fn();
    const onConfirmation = jest.fn();

    render(<AddContact toggleAddRecipient={(onClick)} toggleConfirmAddContact={onClick} setNewContact={onClick} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const getCrosButton = screen.queryByAltText("Close menu");
    userEvent.click(getCrosButton)
  
    //Assert
    expect(onClick).toBeCalled()
  });

});