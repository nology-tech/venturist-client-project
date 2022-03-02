import React, {useState} from 'react'
import Button from '../Button/Button';
import "./MakeTransferForm.scss"

const MakeTransferForm = (props) => {

  const {exchangeFrom, exchangeTo, handleChangingCurrency} = props;

  const [exchangeAmount,setExchangeAmount] = useState(1000.00);

  const handleChangeAmount = (event) => {
    setExchangeAmount(event.target.value);
  }

  const calculateConversion = () => {
    return (exchangeTo.liveRate/exchangeFrom.liveRate);
  }

  return (
    <form className='transfer-page__transfer-form'>
      <div className="transfer-form-bar">
        <h4 className="transfer-form-bar__header">You send</h4>
        <div className="transfer-form-bar__container">
          <img src={exchangeFrom.currencyFlag} className="transfer-form-bar__flag transfer-form-bar__currency-from" onClick={handleChangingCurrency} alt="Currency flag"></img>
          <p className="transfer-form-bar__currency transfer-form-bar__currency-from" onClick={handleChangingCurrency}>{exchangeFrom.currencyCode} - {exchangeFrom.currencyName}</p>
          <p className="transfer-form-bar__amount">{exchangeFrom.currencySymbol} <input type="number" onChange={handleChangeAmount} id="transfer-form-bar__amount" defaultValue={1000.00}/> </p>
        </div>
        <h4 className="transfer-form-bar__header">Recipient gets</h4>
        <div className="transfer-form-bar__container">
          <img src={exchangeTo.currencyFlag} className="transfer-form-bar__flag transfer-form-bar__currency-to" onClick={handleChangingCurrency} alt="Currency flag"></img>
          <p className="transfer-form-bar__currency transfer-form-bar__currency-to" onClick={handleChangingCurrency}>{exchangeTo.currencyCode} - {exchangeTo.currencyName}</p>
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
          <p>{exchangeFrom.currencySymbol} {exchangeAmount}</p>
        </div>
        <Button 
        buttonName={"Continue"} 
        buttonStyle={"blue"} 
        hasIcon={false}
        onClick={()=>alert("clicked")} />
      </div>
    </form>
  )
}

export default MakeTransferForm