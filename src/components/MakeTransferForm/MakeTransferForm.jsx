import React, {useState} from 'react'
import Button from '../Button/Button';
import "./MakeTransferForm.scss";
import CurrencyFlag from 'react-currency-flags';

const MakeTransferForm = (props) => {

  const {exchangeFrom, exchangeTo, handleChangingCurrency} = props;

  const [exchangeAmount,setExchangeAmount] = useState(1000.00);

  const handleChangeAmount = (event) => {
    setExchangeAmount(event.target.value);
  }

  const calculateConversion = () => {
    return (exchangeTo.liveRate/exchangeFrom.liveRate);
  }

  const handleContinueButton = (event) => {
    event.preventDefault();
  }

  return (
    <form className='transfer-page__transfer-form'>
      <div className="transfer-form-bar">
        <h4 className="transfer-form-bar__header">You send</h4>
        <div className="transfer-form-bar__container">
          <div className="transfer-form-bar__container--left">
            <CurrencyFlag currency={exchangeFrom.currencyCode} width={36} onClick={handleChangingCurrency} />
            <p className="transfer-form-bar__currency transfer-form-bar__currency-from" onClick={handleChangingCurrency}>{exchangeFrom.currencyCode} - {exchangeFrom.currencyName}</p>
          </div>
          <p className="transfer-form-bar__amount">{exchangeFrom.currencySymbol} <input type="number" onChange={handleChangeAmount} id="transfer-form-bar__amount" defaultValue={1000.00}/> </p>
        </div>
        <h4 className="transfer-form-bar__header">Recipient gets</h4>
        <div className="transfer-form-bar__container">
          <div className="transfer-form-bar__container--left">
            <CurrencyFlag currency={exchangeTo.currencyCode} width={36} onClick={handleChangingCurrency} />
            <p className="transfer-form-bar__currency transfer-form-bar__currency-to" onClick={handleChangingCurrency}>{exchangeTo.currencyCode} - {exchangeTo.currencyName}</p>
          </div>
          <p className="transfer-form-bar__amount">{exchangeTo.currencySymbol} {(calculateConversion()*exchangeAmount).toFixed(2)}</p>
        </div>
      </div>
      <div className="transfer-form-info">
        <div className="transfer-form-info__rate">
          <p>Rate</p>
          <p>{calculateConversion().toFixed(4)}</p>
        </div>
        <div className="transfer-form-info__fee">
          <p>Fee</p>
          <p>£0.00</p>
        </div>
        <div className="transfer-form-info__delivery">
          <p>Delivery</p>
          <p>Typically same day</p>
        </div>
      </div>
      <div className="transfer-form-continue">
        <div className="transfer-form-continue__total">
          <h5>Total</h5>
          <p>{exchangeFrom.currencySymbol} {Number(exchangeAmount).toLocaleString('en-us')}</p>
        </div>
        <Button 
        buttonName={"Continue"} 
        buttonStyle={"blue"} 
        hasIcon={false} 
        buttonFunction={handleContinueButton}/>
      </div>
    </form>
  )
}

export default MakeTransferForm