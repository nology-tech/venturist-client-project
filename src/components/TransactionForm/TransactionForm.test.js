import TransactionForm from "./TransactionForm";
import { fireEvent, render, screen, userEvent } from "@testing-library/react";
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

      const Name = screen.queryByText("Sam Brooks");

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
      
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);
    
      const buttonText = screen.getByTestId("button");
    
      expect(buttonText).toBeInTheDocument();
    });

    test("Should test the input field is not accepting a-z from first input", () => {
      
      render(
        <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const input = screen.getByTestId('amount-input')
      fireEvent.change(input, {target: {value: 'e565'}})
      expect(input.value).toBe('')
    
    });
    

  });

