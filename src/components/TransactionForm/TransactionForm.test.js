import TransactionForm from "./TransactionForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import profileData from "../../assets/data/samanthaBrooksProfile";

describe("Testing that elements render on screen", () => {
  
  test("Test to render container on screen", () => {
    render(
      <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

    const container = screen.getByTestId("section-form");

    expect(container).toBeInTheDocument();
  });

    test("Test that name renders on screen", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const Name = screen.queryByText("Samantha Brooks");

      expect(Name).toBeInTheDocument();
    });
    
    test("Test that account number renders on screen", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const accountNumber = screen.queryByText("12345678");

      expect(accountNumber).toBeInTheDocument();
    });
    
    test("Test that sort code renders on screen", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const sortCode = screen.queryByText("553456");

      expect(sortCode).toBeInTheDocument();
    });
    
    test("Test that funds remaining renders on screen", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const transferAmount = screen.getByTestId("funds-remaining").innerHTML;

      expect(transferAmount).toContain("3751.59");
    });

    test("Test that component header renders on the screen", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const componentHeader = screen.getByTestId("form-title");

      expect(componentHeader).toBeInTheDocument();
    });
  });

  describe("Testing that buttons work correctly", () => {
  
    test("Should render the button on the page", () => {
      
      const onClick = jest.fn();
      
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={onClick}
          onlyNumber={()=>{}}
      />);
    
      const buttonText = screen.getByTestId("button");
    
      expect(buttonText).toBeInTheDocument();
    });

    test("Test that select button brings up user Confirm Details component", () => {
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const selectButton = screen.getByRole('button');

      fireEvent.click(selectButton);
      const confirmDetailsComponent = screen.queryByText("Confirm Details");
    });

    test("Should disable input field on button click to confirm details component", () => {
      
      const onClick = jest.fn();
      
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={onClick}
          onlyNumber={()=>{}}
      />);
      
      const selectButton = screen.getByTestId('button');      
      const inputField = screen.getByTestId("amount-input")
      
      fireEvent.click(selectButton);
      expect(inputField).toHaveAttribute('disabled');
    });

  });

