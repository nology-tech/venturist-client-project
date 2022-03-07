import MakeTransferConfirmAccount from "./MakeTransferConfirmAccount";
import liveRates from "../../../assets/data/liveRatesExample";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import contactData from "../../../assets/data/contactExample";
import profileData from "../../../assets/data/samanthaBrooksProfile";



describe ("Testing that elements render on screen", () => {
    test("Test to render container on screen", () => {
      // Arrange
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode}/>);
      // Act
      const container = screen.getByTestId("confirmSendContainer");
      // Assert
      expect(container).toBeInTheDocument();
    });
    test("Test that name renders on screen", () => {
        // Arrange
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode}/>);
        // Act
        const Name = screen.queryByText("Samantha Brooks")
        // Assert
        expect(Name).toBeInTheDocument();
      });
      test("Test that account number renders on screen", () => {
        // Arrange
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode}/>);
        // Act
        const accountNumber = screen.queryByText("12345678")
        // Assert
        expect(accountNumber).toBeInTheDocument();
      });
      test("Test that sort code renders on screen", () => {
        // Arrange
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode}/>);
        // Act
        const sortCode = screen.queryByText("553456")
        // Assert
        expect(sortCode).toBeInTheDocument();
      });
    test("Test that transfer Amount renders on screen", () => {
        // Arrange
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={500} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode} />);
        // Act
        const transferAmount = screen.getByTestId("transferAmount").innerHTML;
        // Assert
        expect(transferAmount).toContain("500");
      });

      test("Test that fund remaining renders on screen correctly - accurate to 2 decimal places", () => {
        // Arrange
        render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={3000} handleAddRecipient={()=>{}} currencySymbol={liveRates[0].currencySymbol} currencyCode={liveRates[0].currencyCode}/>);
        // Act
        const remainingAmount = screen.getByTestId("remainingBalance").innerHTML;
        // Assert
        expect(remainingAmount).toBe("£751.59");
      });
    
      
      // const onClick = jest.fn();
  });

  describe ("Testing that buttons work correctly", () => {
    test("Test that select button brings up user Card list", () => {
      // Arrange
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={()=>{}}/>);
      const selectButton = screen.getAllByRole("button")[0];
      
      // Act
      fireEvent.click(selectButton);
      const chooseRecipientContainer = screen.getByTestId("chooseRecipientContainer")
      // Assert
      expect(chooseRecipientContainer).toBeInTheDocument();
    });
    test("Test that select button brings up user Card list", () => {
      // Arrange
      const onClick = jest.fn();
      render(<MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={0} handleAddRecipient={onClick} />);
      const newButton = screen.getAllByRole("button")[1];
      
      // Act
      fireEvent.click(newButton);
      // Assert
      expect(onClick).toHaveBeenCalled();
    });
  });