import MakeTransferConfirmAccount from "./MakeTransferConfirmAccount";
import liveRates from "../../../assets/data/liveRatesExample";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import contactData from "../../../assets/data/contactExample";
import profileData from "../../../assets/data/samanthaBrooksProfile";



describe ("Testing that elements render on screen", () => {
    test("Test to render container on screen", () => {
    
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]} />);
     
      const container = screen.getByTestId("confirmSendContainer");
      
      expect(container).toBeInTheDocument();
    });
    test("Test that name renders on screen", () => {
        
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]} />);
        
        const Name = screen.queryByText("Samantha Brooks")
        
        expect(Name).toBeInTheDocument();
      });
      test("Test that account number renders on screen", () => {
        
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]} />);
        
        const accountNumber = screen.queryByText("12345678")
        
        expect(accountNumber).toBeInTheDocument();
      });
      test("Test that sort code renders on screen", () => {
      
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]} />);
        
        const sortCode = screen.queryByText("553456")
        
        expect(sortCode).toBeInTheDocument();
      });
    test("Test that transfer Amount renders on screen", () => {
        
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={500} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]}  />);
        
        const transferAmount = screen.getByTestId("transferAmount").innerHTML;
        
        expect(transferAmount).toContain("500");
      });

      test("Test that fund remaining renders on screen correctly - accurate to 2 decimal places", () => {
       
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={3000} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]} />);
       
        const remainingAmount = screen.getByTestId("remainingBalance").innerHTML;
       
        expect(remainingAmount).toBe("£751.59");
      });
    
  });

  describe ("Testing that buttons work correctly", () => {
    test("Test that select button brings up user Card list", () => {
      
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencyFrom={liveRates[0]}/>);
      const selectButton = screen.getAllByRole("button")[0];
      
    
      fireEvent.click(selectButton);
      const chooseRecipientContainer = screen.getByTestId("choose-modal")
      
      expect(chooseRecipientContainer).toBeInTheDocument();
    });
    test("Test that select button brings up user Card list", () => {
      
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={onClick} currencyFrom={liveRates[0]} />);
      const newButton = screen.getAllByRole("button")[1];
      
      
      fireEvent.click(newButton);
  
      expect(onClick).toHaveBeenCalled();
    });
  });