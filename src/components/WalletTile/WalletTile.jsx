import React from 'react'
import "./WalletTile.scss";

const WalletTile = (props) => {
  
    const {currencyAmount, currencySymbol} = props;

    return (
  
      <div data-testid="tiles" className="tiles">
        <div className="tiles__fund-box">
          <h3 className="tiles__fund-box__header" >Available Currency</h3>
          <h1 className="tiles__fund-box__amount">{currencySymbol}{currencyAmount.toFixed(2)}</h1>
          <div className="tiles__fund-box__semicircle" ></div>
        </div>
      </div>
    );
}

export default WalletTile