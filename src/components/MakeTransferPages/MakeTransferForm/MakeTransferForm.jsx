import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import "./MakeTransferForm.scss";
import CurrencyFlag from "react-currency-flags";
import MakeTransferChooseModal from "../MakeTransferChooseModal/MakeTransferChooseModal";
import useFxApi from "../../../Hooks/FX/useFxApi";

const MakeTransferForm = props => {
  const { handleShowForm, liveRateData, exchangeInfo, setExchangeInfo, ratesArr } = props;

  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false); 
  const [changingCurrency, setChangingCurrency] = useState("to"); 
  const [baseCurrency, setBaseCurrency] = useState("GBP");

  const [baseAmount, setBaseAmount] = useState(1);
  const [defaultCurrencies, setDefaultCurrencies] = useState(["USD", "EUR"]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [message, setMessage] = useState("Loading live rates...");

  const exchangeFrom=exchangeInfo.exchangeFrom.currency;
  const exchangeTo=exchangeInfo.exchangeTo.currency;


  const handleShowCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };

  const handleChangingCurrency = (event) => {
    if (event.target.classList.contains("transfer-form-bar__currency-to")) {
      setChangingCurrency("to");
    } else if (event.target.classList.contains("transfer-form-bar__currency-from")) {
      setChangingCurrency("from");
    }
    handleShowCurrencyModal();
  };

  const handleCurrency = (event) => {
    const chosenCurrencyCode = event.target.id.slice(21,24);
    const chosenCurrencyObj = ratesArr.filter(currency => currency.currencyCode === chosenCurrencyCode)[0];
    if(changingCurrency==="to") {
      setExchangeInfo({...exchangeInfo},exchangeInfo.exchangeTo.currency=chosenCurrencyObj);
    } else if(changingCurrency==="from"){
      setExchangeInfo({...exchangeInfo},exchangeInfo.exchangeFrom.currency=chosenCurrencyObj);
    }
    handleShowCurrencyModal();
  };



  const calculateConversion = () => {
    return exchangeTo.liveRate / exchangeFrom.liveRate;
  };

  const onlyNumber = event => {
    let amountInputField = Number(event.target.value);
    setExchangeAmount(amountInputField);
    setExchangeInfo({...exchangeInfo},exchangeInfo.exchangeTo.amount=(amountInputField*calculateConversion().toFixed(2)));

    if (!/[0-9.]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <>
    <form className="transfer-page__transfer-form">
      <div className="transfer-form-bar">
        <h4 className="transfer-form-bar__header">You send</h4>
        <div className="transfer-form-bar__container">
          <div className="transfer-form-bar__container--left">
            <CurrencyFlag
              currency={exchangeFrom.currencyCode}
              width={36}
              onClick={handleChangingCurrency}
              className="transfer-form-bar__currency-from"
            />
            <p
              className="transfer-form-bar__currency transfer-form-bar__currency-from"
              onClick={handleChangingCurrency}
              data-testid="currencyFrom"
            > 
              {exchangeFrom.currencyCode} - {exchangeFrom.currencyName}
            </p>
          </div>
          <p className="transfer-form-bar__amount">
            {exchangeFrom.currencySymbol} 
            <input
              id="amountInput"
              data-testid="amountInput"
              className="transfer-form-bar__input"
              type="number"
              step={0.01}
              min={0.01}
              pattern="[0-9.]+"
              onChange={onlyNumber}
              placeholder="00.00"
              required
            />
          </p>
        </div>
        <h4 className="transfer-form-bar__header">Recipient gets</h4>
        <div className="transfer-form-bar__container">
          <div className="transfer-form-bar__container--left">
            <CurrencyFlag
              currency={exchangeTo.currencyCode}
              width={36}
              onClick={handleChangingCurrency}
              className="transfer-form-bar__currency-to"
            />
            <p
              className="transfer-form-bar__currency transfer-form-bar__currency-to"
              onClick={handleChangingCurrency}
              data-testid="currencyTo"
            >
              {exchangeTo.currencyCode} - {exchangeTo.currencyName}
            </p>
          </div>
          <p className="transfer-form-bar__amount" data-testid="amountOutput">
            {exchangeTo.currencySymbol}{" "}
            {(calculateConversion() * exchangeAmount).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="transfer-form-info">
        <div className="transfer-form-info__rate">
          <p>Rate</p>
          <p>{calculateConversion().toFixed(4)}</p>
        </div>
        <div className="transfer-form-info__fee">
          <p>Fee</p>
        <p data-testid="fee-rate">{exchangeFrom.currencySymbol} {Number(exchangeAmount*0.01).toFixed(2).toLocaleString("en-us")}</p>
        </div>
        <div className="transfer-form-info__delivery">
          <p>Delivery</p>
          <p>Typically same day</p>
        </div>
      </div>
      <div className="transfer-form-continue">
        <div className="transfer-form-continue__total">
          <h5>Total</h5>
          <p data-testid="totalBox">
            {exchangeFrom.currencySymbol}{" "}
            {Number(exchangeAmount*1.01).toFixed(2).toLocaleString("en-us")}
          </p>
        </div>
        <Button
          buttonName={"Continue"}
          buttonStyle={"blue"}
          hasIcon={false}
          buttonFunction={handleShowForm}
        />
      </div>
    </form>
    {showCurrencyModal && (
      <MakeTransferChooseModal type="Currency"
        content={ratesArr}
        handleEvent={handleCurrency}
        handleShowModal={handleShowCurrencyModal}
        handleSearch={()=>alert("Searching")}
      />
    )}
    </>
  );
};

export default MakeTransferForm;
