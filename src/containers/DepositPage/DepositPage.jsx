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

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
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
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
        accountNumber={userProfile.accountNumber}
        sortCode={userProfile.sortCode}
        toggleConfirm={toggleConfirm}
      />
      {showConfirm && <ConfirmDetailsPopUp toggleConfirm={toggleConfirm} />}
    </div>
  );
};

export default DepositPage;
