import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./DepositPage.scss";
import ConfirmDetailsPopUp from "../../components/ConfirmDetailsPopUp/ConfirmDetailsPopUp";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";
import MobileNotFound from "../../components/MobileNotFound/MobileNotFound";

const DepositPage = (props) => {
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
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      event.preventDefault();
      setIsDisabled(!isDisabled);
      setShowConfirm(!showConfirm);
    }
  };

  const userID = window.sessionStorage.getItem("userID");

  const handleSubmit = () => {
    fetch("https://venturist-app.nw.r.appspot.com/transaction", {
      method: "POST",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/JSON"
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
    fetch("https://venturist-app.nw.r.appspot.com/holdings", {
      method: "PUT",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        userID: String(userID),
        currencyName: "",
        amount: Number(userHoldings[0].amount) + Number(showAmount),
        currencyCode: "GBP",
        currencySymbol: ""
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const toggleSuccess = () => {
    setShowConfirm(!showConfirm);
    setShowSuccess(!showSuccess);
    handleSubmit();
    handlePutSubmit();
    refreshWallet();
  };

  return (
    <>
      <div className="deposit-page">
        <Header
          title="Deposit"
          pageFunctionHeading="Deposit Funds"
          textDescription="Need a top up? Add money to your wallet whenever you need. "
        />

        {(!userHoldings || !userBankAccounts) && (
          <h3 className="withdraw-loading">Loading...</h3>
        )}

        {userHoldings && userBankAccounts && (
          <TransactionForm
            formTitle="Deposit Form"
            buttonName="Deposit Funds"
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
            message="Deposit has been successful."
            toggleSuccess={toggleSuccess}
          />
        )}
      </div>
      <MobileNotFound />
    </>
  );
};

export default DepositPage;
