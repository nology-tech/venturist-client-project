import React from 'react';
import "./MakeTransferConfirmation.scss";

const MakeTransferConfirmation = (props) => {

  const {exchangeInfo} = props;

  const from=exchangeInfo.exchangeFrom;
  const to=exchangeInfo.exchangeTo;

  return (
    <div className="make-transfer__confirmation">
      <h4>Send From</h4>
      <div className="make-transfer__confirmation__from">
        <h6>{from.user.firstName} {from.user.lastName}</h6>
        <div className="make-transfer__confirmation__split make-transfer__confirmation__subtext">
          <p>Account Number:</p>
          <p>{from.user.accountNumber}</p>
        </div>
        <div className="make-transfer__confirmation__split make-transfer__confirmation__subtext">
          <p>Sort Code:</p>
          <p>{from.user.sortCode}</p>
        </div>
        <div className="make-transfer__confirmation__border"></div>
        <div className="make-transfer__confirmation__split">
          <h5>Total</h5>
          <h5>{from.currency.currencySymbol}{from.amount}</h5>
        </div>
        <div className="make-transfer__confirmation__split">
          <p className="make-transfer__confirmation__funds">
            Funds Remaining:
          </p>
          <p className="make-transfer__confirmation__funds">
            {from.currency.currencySymbol} {(Number(from.user.holdings[from.currency.currencyCode])-Number(from.amount)).toFixed(2).toLocaleString("en-us")}
          </p>
        </div>
      </div>
      <h4>To</h4>
      <div className="make-transfer__confirmation__to">
        <h6>{to.user.firstName} {to.user.lastName}</h6>
        <div className="make-transfer__confirmation__split">
          <p>Account Number:</p>
          <p>{to.user.accountNumber}</p>
        </div>
        <div className="make-transfer__confirmation__split">
          <p>Sort Code:</p>
          <p>{to.user.sortCode}</p>
        </div>
      </div>
    </div>
  )
}

export default MakeTransferConfirmation