import React from 'react';
import Button from '../../Button/Button';
import "./MakeTransferConfirmation.scss";

const MakeTransferConfirmation = (props) => {

  const {exchangeInfo, handleCancel} = props;

  const from=exchangeInfo.exchangeFrom;
  const to=exchangeInfo.exchangeTo;

  const calculateConversion = () => {
    return (Number(to.currency.liveRate)/Number(from.currency.liveRate)).toFixed(4);
  };

  return (
    <div className="make-transfer__confirmation">
      <div className="make-transfer__confirmation__left">
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
              Funds Remaining After Fee:
            </p>
            <p className="make-transfer__confirmation__funds">
              {from.currency.currencySymbol} {(Number(from.user.holdings[from.currency.currencyCode])-Number(from.amount)-Number(from.fee)).toFixed(2).toLocaleString("en-us")}
            </p>
          </div>
        </div>
        <h4>To</h4>
        <div className="make-transfer__confirmation__to">
          <h6>{to.user.firstName} {to.user.lastName}</h6>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__subtext">
            <p>Account Number:</p>
            <p>{to.user.accountNumber}</p>
          </div>
          <div className="make-transfer__confirmation__split">
            <p>Sort Code:</p>
            <p>{to.user.sortCode}</p>
          </div>
        </div>
      </div>
      <div className="make-transfer__confirmation__right">
        <div className="make-transfer__confirmation__info">
          <div className="make-transfer__confirmation__split make-transfer__confirmation__16px">
            <h5>Rate</h5>
            <p className="">{calculateConversion()}</p>
          </div>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__16px">
            <h5>Fee</h5>
            <p >{from.currency.currencySymbol} {from.fee}</p>
          </div>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__16px">
            <h5>Delivery</h5>
            <p>Typically same day</p>
          </div>
        </div>
        <div className="make-transfer__confirmation__totals">
          <div className="make-transfer__confirmation__split">
            <h4>Total to Pay</h4>
            <h4>{from.currency.currencySymbol} {Number(from.amount) + Number(from.fee)}</h4>
          </div>
          <div className="make-transfer__confirmation__split">
            <h6>Recipient Recieves</h6>
            <h6>{to.currency.currencySymbol} {to.amount}</h6>
          </div>
        </div>
        <div className="make-transfer__confirmation__buttons">
          <Button 
            buttonName="Cancel" 
            buttonFunction={handleCancel} 
            buttonStyle="clear"  
          />
          <Button 
            buttonName="Submit" 
            hasIcon={true} 
            iconSrc={""} 
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  )
}

export default MakeTransferConfirmation