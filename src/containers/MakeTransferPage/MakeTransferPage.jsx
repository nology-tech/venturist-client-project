import React, { useState, useEffect } from "react";
import "./MakeTransferPage.scss";

import Header from "../../components/Header/Header";
import MakeTransferConfirmAccount from "../../components/MakeTransferPages/MakeTransferConfirmAccount/MakeTransferConfirmAccount";
import MakeTransferForm from "../../components/MakeTransferPages/MakeTransferForm/MakeTransferForm";
import MakeTransferConfirmation from "../../components/MakeTransferPages/MakeTransferConfirmation/MakeTransferConfirmation";
import MobileNotFound from "../../components/MobileNotFound/MobileNotFound";
import useFxApi from "../../Hooks/FX/useFxApi";

const MakeTransferPage = (props) => {
  const { profileData, contactData } = props;

  const { status, ratesArr, getData } = useFxApi();

  const exchangeBase = {
    exchangeFrom: {
      user: profileData,
      currency: ratesArr[0],
      amount: 0,
      fee: 0,
    },
    exchangeTo: {
      user: {},
      currency: ratesArr[1],
      amount: 0,
    },
  };

  const [message, setMessage] = useState("Loading live rates...");
  const [bankDetails, setBankDetails] = useState({});
  const [exchangeInfo, setExchangeInfo] = useState(exchangeBase);
  const [showInitialForm, setShowInitialForm] = useState(true);
  const [showConfirmAccount, setShowConfirmAccount] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const url = `https://venturist-app.nw.r.appspot.com/currencies/GBP`;
  
  useEffect(() => {
    getData(url);
    if (status === "success") {
      try {
        setMessage("Success")
        setExchangeInfo(exchangeBase);
      } catch (err) {
        setMessage("Error getting rates. Please try again later");
      }
    }
    console.log()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    // getBankAccount(profileData.userID);
  }, [profileData]);

  const getBankAccount = (userID) => {
    fetch(`https://venturist-app.nw.r.appspot.com/bank-account/${userID}`)
      .then(response => response.json())
      .then(data => setBankDetails(data));
  };

  useEffect(() => {
    // updateUserBankAccount();
  }, [bankDetails]);

  const updateUserBankAccount = () => {
    setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeFrom.user.accountNumber = bankDetails.accountNumber, exchangeInfo.exchangeFrom.user.sortCode = bankDetails.sortCode);
  }

  const handleShowForm = () => {
    const amountInput = document.getElementById("amountInput").value;
    if(!(Number(amountInput)*1.01 < exchangeInfo.exchangeFrom.user.holdings[exchangeInfo.exchangeFrom.currency.currencyCode])) {
      alert("You don't have enough of that currency to send.");
      return;
    }
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      setExchangeInfo(
        { ...exchangeInfo },
        (exchangeInfo.exchangeFrom.amount = Number(amountInput).toFixed(2))
      );
      setExchangeInfo(
        { ...exchangeInfo },
        (exchangeInfo.exchangeFrom.fee = Number(amountInput * 0.01).toFixed(2))
      );
      setShowInitialForm(false);
      setShowConfirmAccount(true);
    }
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
    setShowConfirmAccount(false);
  };

  return (
    <>
    <div className="make-transfer" data-testid="make-transfer">
      <Header
        title="Transfer"
        pageFunctionHeading="Make Transfer"
        textDescription="Easily and safely transfer money in different currencies."
      />

      {showInitialForm && message!=="Success" && (<p className="make-transfer__loading">{message}</p>)}

      {showInitialForm && message==="Success" && bankDetails !== {} && (
        <MakeTransferForm
          exchangeInfo={exchangeInfo}
          setExchangeInfo={setExchangeInfo}
          handleShowForm={handleShowForm}
          liveRateData={ratesArr}
        />
      )}

      {showConfirmAccount && (
        <MakeTransferConfirmAccount
          exchangeInfo={exchangeInfo}
          setExchangeInfo={setExchangeInfo}
          data={contactData}
          handleShowConfirmation={handleShowConfirmation}
        />
      )}

      {showConfirmation && (
        <MakeTransferConfirmation exchangeInfo={exchangeInfo} />
      )}
    </div>
    <MobileNotFound />
    </>
  );
};

export default MakeTransferPage;
