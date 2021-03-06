import TransactionForm from "./TransactionForm";
import { fireEvent, render, screen, userEvent } from "@testing-library/react";

const profileData = {userID: "OVhSjdW8chfg67ljJOOBaoKf61A2" ,firstName:"test", lastName:"test"}
const userHoldings = [{
  "id": 1,
  "userID": "OVhSjdW8chfg67ljJOOBaoKf61A2",
  "currencyName": "British Pound",
  "amount": 3751.59,
  "currencyCode": "GBP",
  "currencySymbol": "£"
}];
const userBankAccounts = {
  sortCode: "553456",
  bankAccountNo: 12345678
}

describe("Testing that elements render on screen", () => {
  
  test("Test to render container on screen", () => {
    render(
      <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          userHoldings={userHoldings}
          userBankAccounts={userBankAccounts}
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
          userHoldings={userHoldings}
          userBankAccounts={userBankAccounts}
          isDisabled= {()=>{}}
          toggleConfirm={()=>{}}
          onlyNumber={()=>{}}
      />);

      const Name = screen.queryByText("test test");

      expect(Name).toBeInTheDocument();
  });
    
  test("Test that account number renders on screen", () => {
    render(
      <TransactionForm
          formTitle="Withdrawal Form"
          buttonName="Withdraw Funds"
          profileData={profileData}
          userHoldings={userHoldings}
          userBankAccounts={userBankAccounts}
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
          userHoldings={userHoldings}
          userBankAccounts={userBankAccounts}
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
            userHoldings={userHoldings}
            userBankAccounts={userBankAccounts}
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
            userHoldings={userHoldings}
            userBankAccounts={userBankAccounts}
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
            userHoldings={userHoldings}
            userBankAccounts={userBankAccounts}
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
            userHoldings={userHoldings}
            userBankAccounts={userBankAccounts}
            isDisabled= {()=>{}}
            toggleConfirm={()=>{}}
            onlyNumber={()=>{}}
        />);

      const input = screen.getByTestId('amount-input')
      fireEvent.change(input, {target: {value: 'e565'}})
      expect(input.value).toBe('')
    
    });
    

  });

