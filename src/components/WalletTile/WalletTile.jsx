import React from 'react'
import "./WalletTile.scss";
import CurrencyFlag from 'react-currency-flags';

const WalletTile = (props) => {
  
    const {currencyAmount, currencySymbol, currencyCode, currencyName} = props;

    return (
  
      <div data-testid="tiles" className="tiles">
        <div className="tiles__fund-box">
          <h3 className="tiles__fund-box__header" ><CurrencyFlag currency={currencyCode} width={20} />{currencyName}</h3>
          <h1 className="tiles__fund-box__amount">{currencySymbol + currencyAmount}</h1>
          <div className="tiles__fund-box__semicircle" ></div>
        </div>
      </div>
    );
}

export default WalletTile