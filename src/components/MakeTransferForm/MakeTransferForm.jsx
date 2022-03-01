import React from 'react'
import "./MakeTransferForm.scss"
import mockData from "../../assets/data/liveRatesExample"

const MakeTransferForm = (props) => {

  // const {
  //   exchangeRateSend,
  //   exchangeRateRecieve,
  //   exchangeFee,
  //   exchangeDeliveryTime
  // } = props;

  console.log(mockData[0].currencySymbol)

  return (
    <form className='transfer-page__transfer-form' onSubmit="handleSubmit">
      <div className="transfer-form-bar">
        <h4 className="transfer-form-bar__header">You send</h4>
        <div className="transfer-form-bar__container">
          {/* <p>{exchangeRateSend.currencyFlag}</p>
          <p>{exchangeRateSend.currencyCode} - {exchangeRateSend.currencyName}</p>
          <p>{exchangeRateSend.currencySymbol}</p> */}
          <p className="transfer-form-bar__flag">FLAG</p>
          <p className="transfer-form-bar__currency">GBP - British Pounds</p>
          {/* <p className="transfer-form-bar__amount">£1000.00</p> */}
          <input className="transfer-form-bar__input" type="text" placeholder={mockData[0].currencySymbol + "1000"} required/>
        </div>
        <h4 className="transfer-form-bar__header">Recipient gets</h4>
        <div className="transfer-form-bar__container">
          {/* <p>{exchangeRateRecieve.currencyFlag}</p>
          <p>{exchangeRateRecieve.currencyCode} - {exchangeRateRecieve.currencyName}</p>
          <p>{exchangeRateRecieve.currencySymbol}</p> */}
          <p>FLAG</p>
          <p className="transfer-form-bar__currency">USD - US Dollars</p>
          <p className="transfer-form-bar__amount" >{mockData[1].currencySymbol}1250.00</p>
        </div>
      </div>
      <div className="transfer-form-info">
        <div className="transfer-form-info__rate">
          <p >Rate</p>
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
  )
}

export default MakeTransferForm