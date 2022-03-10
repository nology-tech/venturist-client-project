import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./DepositPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";

import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";

const DepositPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleConfirm = () => {
    const amountInput = document.getElementById("amount-input").value;
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      setShowConfirm(!showConfirm);
    }
  };

  const toggleSuccess = () => {
    setShowConfirm(!showConfirm);
    setShowSuccess(!showSuccess);
  };

  return (
    <div className="deposit-page">
      <Header
        title="Deposit"
        pageFunctionHeading="Deposit Funds"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <TransactionForm
        fundsRemaining="£100.00"
        formTitle="Deposit Form"
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
        accountNumber={userProfile.accountNumber}
        sortCode={userProfile.sortCode}
        toggleConfirm={toggleConfirm}
        buttonName="Add Funds"
      />
      {showConfirm && (
        <ConfirmDetailsPopUp
          toggleSuccess={toggleSuccess}
          toggleConfirm={toggleConfirm}
          firstName={userProfile.firstName}
          lastName={userProfile.lastName}
          accountNumber={userProfile.accountNumber}
          sortCode={userProfile.sortCode}
          accountType={userProfile.cards[0].accountType}
          totalAmount="1000"
        />
      )}
      {showSuccess && (
        <SuccessfulMessage
          message="Deposit has been successful"
          toggleSuccess={toggleSuccess}
        />
      )}
    </div>
  );
};

export default DepositPage;
