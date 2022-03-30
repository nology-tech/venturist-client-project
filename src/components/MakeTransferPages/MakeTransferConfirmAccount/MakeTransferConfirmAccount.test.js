import MakeTransferConfirmAccount from "./MakeTransferConfirmAccount";
import liveRates from "../../../assets/data/liveRatesExample";
import { fireEvent, render, screen } from "@testing-library/react";
import contactData from "../../../assets/data/contactExample";
import profileData from "../../../assets/data/samanthaBrooksProfile";
import userEvent from "@testing-library/user-event";

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

  test("Test that select button brings up add new recipient", () => {
    
    const onClick=jest.fn();
    render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
    const newButton = screen.getAllByRole("button")[1];
    
    fireEvent.click(newButton);
    const addRecipient = screen.getByTestId("add-recipient");

    expect(addRecipient).toBeInTheDocument();
  });
});

describe ("Choose recipient search box", () => {
  test("That correct search items appear based on input - Z", () => {
    const onClick=jest.fn();
    render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
    const selectButton = screen.getAllByRole("button")[0];
  
    fireEvent.click(selectButton);
    const search = screen.getByPlaceholderText("Search...");
    userEvent.type(search, "Z");
    const chooseRecipientContainer = screen.getByTestId("choose-modal");
    
    expect(chooseRecipientContainer).toHaveTextContent("Zoe Jansen")
    expect(chooseRecipientContainer).toHaveTextContent("Mateusz Seredyn")
    expect(chooseRecipientContainer).not.toHaveTextContent("Ollie Holden")
  });

  test("That correct search items appear based on input - C", () => {
    const onClick=jest.fn();
    render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
    const selectButton = screen.getAllByRole("button")[0];
  
    fireEvent.click(selectButton);
    const search = screen.getByPlaceholderText("Search...");
    userEvent.type(search, "C");
    const chooseRecipientContainer = screen.getByTestId("choose-modal")
    
    expect(chooseRecipientContainer).toHaveTextContent("No results found.")
    expect(chooseRecipientContainer).not.toHaveTextContent("Ollie Holden")
  });

  test("Search bar is case insensitive", () => {
    const onClick=jest.fn();
    render(<MakeTransferConfirmAccount exchangeInfo={exchangeInfo} data={contactData} handleAddRecipient={onClick} />);
    const selectButton = screen.getAllByRole("button")[0];
  
    fireEvent.click(selectButton);
    const search = screen.getByPlaceholderText("Search...");
    userEvent.type(search, "ZOE JANSEN");
    const chooseRecipientContainer = screen.getByTestId("choose-modal")
    
    expect(chooseRecipientContainer).toHaveTextContent("Zoe Jansen")
    expect(chooseRecipientContainer).not.toHaveTextContent("Mateusz Seredyn")
  });


});