import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./WithdrawPage.scss";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";
import MobileNotFound from "../../components/MobileNotFound/MobileNotFound";

const WithdrawPage = (props) => {

  const { profileData, userHoldings, userBankAccounts } = props;

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAmount, setShowAmount] = useState(0.0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onlyNumber = event => {
    let amountInputField = event.target.value;
    setShowAmount(event.target.value);
    if (
      !/[0-9.]/.test(event.key) ||
      (amountInputField.includes(".") && event.key === ".")
    ) {
      event.preventDefault();
    }
  };

  const toggleConfirm = event => {
    const amountInput = document.getElementById("amount-input").value;
    const hasValidHoldings = (userHoldings[0].amount - parseFloat(amountInput) >= 0)
    if (!hasValidHoldings && amountInput) {
      alert("You don't have enough of that currency to withdraw.");
      event.preventDefault();
      return;
    }  
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0 && hasValidHoldings) {
      event.preventDefault(); 
      setIsDisabled(!isDisabled);
      setShowConfirm(!showConfirm);
    } 
  };

  const toggleSuccess = () => { 
    setShowConfirm(!showConfirm);
    setShowSuccess(!showSuccess);
  };


  return (
    <>
    <div className="withdraw-page">
      <Header
        title="Withdraw"
        pageFunctionHeading="Withdraw Funds"
        textDescription="Withdraw money stored with us and send it elsewhere."
      />

      {(!userHoldings || !userBankAccounts) && <h3 className="withdraw-loading">Loading...</h3>}

      {userHoldings && userBankAccounts &&
      <TransactionForm
        formTitle="Withdrawal Form"
        buttonName="Withdraw Funds"
        profileData={profileData}
        userBankAccounts={userBankAccounts}
        userHoldings={userHoldings}
        isDisabled= {isDisabled}
        toggleConfirm={toggleConfirm}
        onlyNumber={onlyNumber}
      />}
      {showConfirm && userHoldings && userBankAccounts && (
        <ConfirmDetailsPopUp
          toggleSuccess={toggleSuccess}
          toggleConfirm={toggleConfirm}
          profileData={profileData}
          totalAmount={showAmount}
          bankDetails={userBankAccounts}
        />
      )}
      {showSuccess && (
        <SuccessfulMessage
          message="Withdrawal has been successful."
          toggleSuccess={toggleSuccess}
        />
      )}
    </div>
    <MobileNotFound />
    </>
  );
};

export default WithdrawPage;
