import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./WithdrawPage.scss";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";

const WithdrawPage = (props) => {

  const {
    profileData,
    updateProfileData
  } = props;

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAmount, setShowAmount] = useState(0.0);

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

  // If account total is less than the amount wanting to withdraw, don't allow!
  const toggleConfirm = event => {
    const amountInput = document.getElementById("amount-input").value;
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      event.preventDefault(); 
      setShowConfirm(!showConfirm);
    }
  };

  const toggleSuccess = () => {
    // const temp = {...profileData};
    // temp.holdings[profileData.cards[0].currencyType] -= parseFloat(showAmount);
    // updateProfileData(temp);
    setShowConfirm(!showConfirm);
    setShowSuccess(!showSuccess);
  };


  return (
    <div className="withdraw-page">
      <Header
        title="Withdraw"
        pageFunctionHeading="Withdraw Funds"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <TransactionForm
        fundsRemaining="£100.00"
        formTitle="Withdraw Form"
        firstName={profileData.firstName}
        lastName={profileData.lastName}
        accountNumber={profileData.accountNumber}
        sortCode={profileData.sortCode}
        toggleConfirm={toggleConfirm}
        onlyNumber={onlyNumber}
        buttonName="Withdraw Funds"
      />
      {showConfirm && (
        <ConfirmDetailsPopUp
          toggleSuccess={toggleSuccess}
          toggleConfirm={toggleConfirm}
          firstName={profileData.firstName}
          lastName={profileData.lastName}
          accountNumber={profileData.accountNumber}
          sortCode={profileData.sortCode}
          accountType={profileData.cards[0].accountType}
          totalAmount={showAmount}
        />
      )}
      {showSuccess && (
        <SuccessfulMessage
          message="Withdrawal has been successful."
          toggleSuccess={toggleSuccess}
        />
      )}
    </div>
  );
};

export default WithdrawPage;
