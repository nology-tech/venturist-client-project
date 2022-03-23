import MakeTransferConfirmAccount from "./MakeTransferConfirmAccount";
import liveRates from "../../../assets/data/liveRatesExample";
import { fireEvent, render, screen } from "@testing-library/react";
import contactData from "../../../assets/data/contactExample";
import profileData from "../../../assets/data/samanthaBrooksProfile";

const exchangeInfo = {
  exchangeFrom: {
    user: profileData,
    currency: liveRates[0],
    amount: 3000,
    fee: 30
  },
  exchangeTo: {
    user: {},
    currency: liveRates[1],
    amount: 0
  }
}

describe ("Testing that elements render on screen", () => {
    test("Test to render container on screen", () => {
    
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
     
      const container = screen.getByTestId("confirmSendContainer");
      
      expect(container).toBeInTheDocument();
    });
    test("Test that name renders on screen", () => {
      
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
      
      const Name = screen.queryByText("Sam Brooks")
      
      expect(Name).toBeInTheDocument();
    });
    test("Test that account number renders on screen", () => {
      
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);    
      const accountNumber = screen.queryByText("12345678")
      
      expect(accountNumber).toBeInTheDocument();
    });
    test("Test that sort code renders on screen", () => {
      
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
      
      const sortCode = screen.queryByText("553456")
      
      expect(sortCode).toBeInTheDocument();
    });
    test("Test that transfer Amount renders on screen", () => {
        
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
      
      const transferAmount = screen.getByTestId("transferAmount").innerHTML;
      
      expect(transferAmount).toContain("3030.00");
      });

    test("Test that fund remaining renders on screen correctly - accurate to 2 decimal places", () => {
      
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
      
      const remainingAmount = screen.getByTestId("remainingBalance").innerHTML;
      
      expect(remainingAmount).toBe("£721.59");
    });
    
});

describe ("Testing that buttons work correctly", () => {
  test("Test that select button brings up user Card list", () => {
    
    const onClick = jest.fn();
    render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleShowConfirmation={onClick} />);
    const selectButton = screen.getAllByRole("button")[0];
    
  
    fireEvent.click(selectButton);
    const chooseRecipientContainer = screen.getByTestId("choose-modal")
    
    expect(chooseRecipientContainer).toBeInTheDocument();
  });
});