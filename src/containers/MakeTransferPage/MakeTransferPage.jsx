import React, { useState, useEffect } from "react";
import "./MakeTransferPage.scss";

import Header from "../../components/Header/Header";
import MakeTransferConfirmAccount from "../../components/MakeTransferPages/MakeTransferConfirmAccount/MakeTransferConfirmAccount";
import MakeTransferForm from "../../components/MakeTransferPages/MakeTransferForm/MakeTransferForm";
import MakeTransferConfirmation from "../../components/MakeTransferPages/MakeTransferConfirmation/MakeTransferConfirmation";
import useFxApi from "../../Hooks/FX/useFxApi";
//import { useParams} from "react-router-dom";

const MakeTransferPage = (props) => {
  const { liveRateData, profileData, contactData } = props;

  const [baseCurrency, setBaseCurrency] = useState("GBP");

  const url = `https://venturist-app.nw.r.appspot.com/currencies/${baseCurrency}`;

  const { data, status, ratesArr, getData } = useFxApi();

  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);
  const [baseAmount, setBaseAmount] = useState(1);
  const [defaultCurrencies, setDefaultCurrencies] = useState(["USD", "EUR"]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [message, setMessage] = useState("Loading live rates...");

  console.log(data);
  // console.log(data.rates["GBP"])

  if(data) {
    console.log(data.rates["USD"])
  }


  const exchangeBase = {
    exchangeFrom: {
      user: profileData,
      currency: liveRateData[0],
      amount: 0,
      fee: 0,
    },
    exchangeTo: {
      user: {},
      currency: liveRateData[0],
      amount: 0,
    },
  };
  
  useEffect(() => {
    getData(url);
    if (status === "success") {
      try {
        setFilteredRates(filterRates());
      } catch (err) {
        setMessage("Error getting rates. Please try again later");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const filterRates = () => {
    return ratesArr.filter((item) =>
      defaultCurrencies.includes(item.currencyCode)
    );
  };


  const [exchangeInfo, setExchangeInfo] = useState(exchangeBase);

  const [showInitialForm, setShowInitialForm] = useState(true);
  const [showConfirmAccount, setShowConfirmAccount] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleShowForm = () => {
    const amountInput = document.getElementById("amountInput").value;
    if (
      !(
        amountInput <
        exchangeInfo.exchangeFrom.user.holdings[
          exchangeInfo.exchangeFrom.currency.currencyCode
        ]
      )
    ) {
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
          handleShowForm={handleShowForm}
          ratesArr={ratesArr}
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
  );
};

export default MakeTransferPage;
