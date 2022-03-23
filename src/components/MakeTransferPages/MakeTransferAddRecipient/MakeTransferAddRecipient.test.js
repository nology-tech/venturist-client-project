import { render, screen } from "@testing-library/react";
import MakeTransferAddRecipient from "./MakeTransferAddRecipient";


const exchangeInfo = {
  exchangeFrom: {
    user:"",
    currency:"",
    amount: "",
    fee: ""
  },
  exchangeTo: {
    user: {},
    currency:"",
    amount: 0
  }
};

describe('Rendering components', () => {

  test('Check it renders the page', () => {
    //Arrange
    const onClick = jest.fn();
    const onExchange = jest.fn();
    const onConfirmation = jest.fn();

    render(<MakeTransferAddRecipient toggleAddRecipient={(onClick)} exchangeInfo={exchangeInfo} setExchangeInfo={(onExchange)} handleShowConfirmation={(onConfirmation)} />);

    //Act
    const currencyName = screen.queryByText("British Pound");

    //Assert
    expect(currencyName).toBeInTheDocument();
  });

});