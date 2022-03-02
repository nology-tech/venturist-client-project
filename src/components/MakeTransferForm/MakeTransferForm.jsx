import React from "react";
import "./MakeTransferForm.scss";
import mockData from "../../assets/data/liveRatesExample";

const MakeTransferForm = props => {
  // const {
  //   exchangeRateSend,
  //   exchangeRateRecieve,
  //   exchangeFee,
  //   exchangeDeliveryTime
  // } = props;

  const onlyNumber = event => {
    let amountInputField = document.getElementById("amountInput").value;

    if (
      !/[0-9.]/.test(event.key) ||
      (amountInputField.includes(".") && event.key === ".") //|| amountInputField.split(".")[1].length === 2
    ) {
      event.preventDefault();
    }
  };

  // var validate = function(e) {
  //   var t = e.value;
  //   e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  // }

  // const only2dp = e => {
  //   let t = e.value;

  //   e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  // }

  return (
    <form className="transfer-page__transfer-form" onSubmit="handleSubmit">
      <div className="transfer-form-bar">
        <h4 className="transfer-form-bar__header">You send</h4>
        <div className="transfer-form-bar__container">
          {/* <p>{exchangeRateSend.currencyFlag}</p>
          <p>{exchangeRateSend.currencyCode} - {exchangeRateSend.currencyName}</p>
          <p>{exchangeRateSend.currencySymbol}</p> */}
          <p className="transfer-form-bar__flag">FLAG</p>
          <p className="transfer-form-bar__currency">GBP - British Pounds</p>
          {/* <p className="transfer-form-bar__amount">£1000.00</p> */}
          <input
            id="amountInput"
            className="transfer-form-bar__input"
            type="number"
            step="0.01"
            // pattern="[0-9.]+"
            // onInput={only2dp}
            onKeyPress={onlyNumber}
            placeholder="0.00"
            required
          />
        </div>
        <h4 className="transfer-form-bar__header">Recipient gets</h4>
        <div className="transfer-form-bar__container">
          {/* <p>{exchangeRateRecieve.currencyFlag}</p>
          <p>{exchangeRateRecieve.currencyCode} - {exchangeRateRecieve.currencyName}</p>
          <p>{exchangeRateRecieve.currencySymbol}</p> */}
          <p>FLAG</p>
          <p className="transfer-form-bar__currency">USD - US Dollars</p>
          <p className="transfer-form-bar__amount">{mockData[1].currencySymbol}1250.00</p>
        </div>
      </div>
      <div className="transfer-form-info">
        <div className="transfer-form-info__rate">
          <p>Rate</p>
          {/* <p>{exchangeRateRecieve.liveRate}</p> */}
          <p>1.3589</p>
        </div>
        <div className="transfer-form-info__fee">
          <p>Fee</p>
          {/* <p>{exchangeFee}</p> */}
          <p>£0.00</p>
        </div>
        <div className="transfer-form-info__delivery">
          <p>Delivery</p>
          {/* <p>{exchangeDeliveryTime}</p> */}
          <p>Typically same day</p>
        </div>
      </div>
      <div className="transfer-form-continue">
        <div className="transfer-form-continue__total">
          <h5>Total</h5>
          <p>1000</p>
        </div>
        <button>Continue</button>
      </div>
    </form>
  );
};

export default MakeTransferForm;
