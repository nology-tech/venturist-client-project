import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./WithdrawPage.scss";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";
import MobileNotFound from "../../components/MobileNotFound/MobileNotFound";

const WithdrawPage = (props) => {
  const { profileData, userHoldings, userBankAccounts, refreshWallet } = props;

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAmount, setShowAmount] = useState(0.0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onlyNumber = (event) => {
    let amountInputField = event.target.value;
    setShowAmount(event.target.value);
    if (
      !/[0-9.]/.test(event.key) ||
      (amountInputField.includes(".") && event.key === ".")
    ) {
      event.preventDefault();
    }
  };

  const toggleConfirm = (event) => {
    const amountInput = document.getElementById("amount-input").value;
    const hasValidHoldings =
      userHoldings[0].amount - parseFloat(amountInput) >= 0;
    if (!hasValidHoldings && amountInput) {
      alert("You don't have enough of that currency to withdraw.");
      event.preventDefault();
      return;
    }
    if (
      amountInput.match(/^\d*(\.\d{0,2})?$/) &&
      amountInput > 0 &&
      hasValidHoldings
    ) {
      event.preventDefault();
      setIsDisabled(!isDisabled);
      setShowConfirm(!showConfirm);
    }
  };

  const toggleSuccess = () => {
    setShowConfirm(!showConfirm);
    setShowSuccess(!showSuccess);
    handleSubmit();
    handlePutSubmit();
    refreshWallet();
  };

  const userID = window.sessionStorage.getItem("userID");

  const handleSubmit = () => {
    fetch("http://venturist-app.nw.r.appspot.com/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userToId: `${userID}`,
        userFromId: `${userID}`,
        currencyCodeFrom: "GBP",
        currencyCodeTo: "GBP",
        amountFrom: showAmount,
        amountTo: showAmount,
        rate: 1,
        fee: 0,
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
  
  const handlePutSubmit = () => {
    let newHoldings = Number(userHoldings[0].amount) - Number(showAmount);
    fetch("http://venturist-app.nw.r.appspot.com/holdings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
        amount: newHoldings,
        currencyCode: "GBP",
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="withdraw-page">
        <Header
          title="Withdraw"
          pageFunctionHeading="Withdraw Funds"
          textDescription="Withdraw money stored with us and send it elsewhere."
        />

        {(!userHoldings || !userBankAccounts) && (
          <h3 className="withdraw-loading">Loading...</h3>
        )}

        {userHoldings && userBankAccounts && (
          <TransactionForm
            formTitle="Withdrawal Form"
            buttonName="Withdraw Funds"
            profileData={profileData}
            userBankAccounts={userBankAccounts}
            userHoldings={userHoldings}
            isDisabled={isDisabled}
            toggleConfirm={toggleConfirm}
            onlyNumber={onlyNumber}
          />
        )}
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
