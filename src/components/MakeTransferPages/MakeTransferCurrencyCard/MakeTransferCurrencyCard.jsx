import React from 'react';
import "./MakeTransferCurrencyCard.scss";
import CurrencyFlag from 'react-currency-flags';

const MakeTransferCurrencyCard = (props) => {

  const { currency, handleCurrency } = props;

  return (
    <div className="transfer-page__currency__card">
      <div className="transfer-page__currency__card--left">
        <CurrencyFlag currency={currency.currencyCode} width={40} className="transfer-page__currency__card__flag" data-testid={"currency-flag"}/>
        <p>{currency.currencyName}</p>
      </div>
      <div className="transfer-page__currency__card--right">
        <p className="transfer-page__currency__card__account-number">{currency.liveRate.toFixed(4)}</p>
      </div>   
      <div className="transfer-page__currency__card__overlay" onClick={handleCurrency} id={`transfer-page__currency__${currency.currencyCode}`} data-testid="overlay"></div>
    </div>
  )
}

export default MakeTransferCurrencyCard