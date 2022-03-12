import React, { useState } from "react";
import Header from "../../components/Header/Header";
import MakeTransferConfirmAccount from "../../components/MakeTransferPages/MakeTransferConfirmAccount/MakeTransferConfirmAccount";
import MakeTransferForm from "../../components/MakeTransferPages/MakeTransferForm/MakeTransferForm";
import "./MakeTransferPage.scss";

const MakeTransferPage = props => {
  const { liveRateData, profileData, contactData } = props;

  const exchangeBase = {
    exchangeFrom: {
      user:profileData,
      currency:liveRateData[0],
      amount:0
    },
    exchangeTo: {
      user:{},
      currency:liveRateData[1],
      amount:0
    }
  }

  const [exchangeInfo, setExchangeInfo] = useState(exchangeBase); // Don't move

  const [showCurrencyModal, setShowCurrencyModal] = useState(false); // Put into form
  const [changingCurrency, setChangingCurrency] = useState("to"); // Put into form
  const [showInitialForm, setShowInitialForm] = useState(true); // Don't move
  const [showConfirmAccount, setShowConfirmAccount] = useState(false); // Don't move

  // Put into form
  const handleShowCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };

  // Put into confirmaccount
  const handleAddRecipient = () => {
    
  }

  // Don't move
  const handleShowForm = event => {
    const amountInput = document.getElementById("amountInput").value;
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      event.preventDefault(); 
      setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeFrom.amount=(amountInput*1.01));
      setShowInitialForm(false);
      setShowConfirmAccount(true);
    }
  };

  // Put into form
  const handleChangingCurrency = (event) => {
    if (event.target.classList.contains("transfer-form-bar__currency-to")) {
      setChangingCurrency("to");
    } else if (event.target.classList.contains("transfer-form-bar__currency-from")) {
      setChangingCurrency("from");
    }
    handleShowCurrencyModal();
  };


  // Put into form
  const handleCurrency = (event) => {
    const chosenCurrencyCode = event.target.id.slice(21,24);
    const chosenCurrencyObj = liveRateData.filter(currency => currency.currencyCode === chosenCurrencyCode)[0];
    if(changingCurrency==="to") {
      setExchangeInfo({...exchangeInfo},exchangeInfo.exchangeTo.currency=chosenCurrencyObj);
    } else if(changingCurrency==="from"){
      setExchangeInfo({...exchangeInfo},exchangeInfo.exchangeFrom.currency=chosenCurrencyObj);
    }
    handleShowCurrencyModal();
  }

  return (
    <div className="make-transfer" data-testid="make-transfer">
      <Header
        title="Transfer"
        pageFunctionHeading="Make Transfer"
        textDescription="Easily and safely transfer money in different currencies."
      />

      {showInitialForm && (
        <MakeTransferForm
          exchangeInfo={exchangeInfo}
          setExchangeInfo={setExchangeInfo}
          handleChangingCurrency={handleChangingCurrency}
          handleShowForm={handleShowForm}
          liveRateData={liveRateData}
          handleCurrency={handleCurrency}
          handleShowCurrencyModal={handleShowCurrencyModal}
          showCurrencyModal={showCurrencyModal}
        />
      )}

      {showConfirmAccount && (
        <MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={exchangeInfo.exchangeFrom.amount} handleAddRecipient={handleAddRecipient} currencyFrom={exchangeInfo.exchangeFrom.currency} />
      )}
    </div>
  );
};

export default MakeTransferPage;