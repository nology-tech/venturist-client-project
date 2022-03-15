import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./DepositPage.scss";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";

const DepositPage = (props) => {

  const {
    profileData,
    updateProfileData,
  } = props;

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
    // const hasValidAmount = (profileData.cards[0].amount >= showAmount) 
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {  // && hasValidAmount
      event.preventDefault(); 
      setIsDisabled(!isDisabled);
      setShowConfirm(!showConfirm);
    }
  };

  const toggleSuccess = () => { 
    const tempProfileData = {...profileData};
    tempProfileData.holdings[profileData.cards[0].currencyType] += parseFloat(showAmount);
    updateProfileData(tempProfileData);
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
        formTitle="Deposit Form"
        buttonName="Add Funds"
        profileData={profileData}
        isDisabled= {isDisabled}
        toggleConfirm={toggleConfirm}
        onlyNumber={onlyNumber}
      />

      {showConfirm && (
        <ConfirmDetailsPopUp
          toggleSuccess={toggleSuccess}
          toggleConfirm={toggleConfirm}
          profileData={profileData}
          totalAmount={showAmount}
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
