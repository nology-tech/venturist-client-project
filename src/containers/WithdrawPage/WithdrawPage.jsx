import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./WithdrawPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import Button from "../../components/Button/Button";

import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";

const WithdrawPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const toggleSuccess = () => {
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
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
        accountNumber={userProfile.accountNumber}
        sortCode={userProfile.sortCode}
        toggleConfirm={toggleConfirm}
        buttonName="Withdraw Funds"
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
          message="Withdrawal has been successful."
          toggleSuccess={toggleSuccess}
        />
      )}
    </div>
  );
};

export default WithdrawPage;
