import React from 'react'
import "./MakeTransferCurrencyCard.scss";

const MakeTransferCurrencyCard = (props) => {

  const { currency, handleChangingCurrency } = props;

  return (
    <div className="transfer-page__currency__card">
      <div className="transfer-page__currency__card--left">
        <img src={currency.currencyFlag} alt={currency.currencyName} className="transfer-page__currency__card__flag"></img>
        <p>{currency.currencyName}</p>
      </div>
      <div className="transfer-page__currency__card--right">
        <p className="transfer-page__currency__card__account-number">{currency.liveRate.toFixed(4)}</p>
      </div>   
      <div className="transfer-page__currency__card__overlay" onClick={handleChangingCurrency} id={`transfer-page__currency__${currency.currencyCode}`}></div>
    </div>
  )
}

export default MakeTransferCurrencyCard