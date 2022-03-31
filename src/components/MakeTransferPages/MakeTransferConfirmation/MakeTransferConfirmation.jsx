import React, {useEffect, useState} from 'react';
import Button from '../../Button/Button';
import "./MakeTransferConfirmation.scss";
import SuccessfulMessage from '../../SuccessfulMessage/SuccessfulMessage';
import icons from "./../../../assets/icons/icons.js";
import {Link} from "react-router-dom";

const MakeTransferConfirmation = (props) => {

  const {exchangeInfo, handleCancel} = props;

  const from=exchangeInfo.exchangeFrom;
  const to=exchangeInfo.exchangeTo;

  const exchangePost = {
    userFromId: from.user.userId,
    userToId: (to.user.firstName + to.user.lastName),
    currencyCodeFrom: from.currency.currencyCode,
    currencyCodeTo: to.currency.currencyCode,
    amountFrom: from.amount,
    amountTo: to.amount,
    rate: Number(from.amount / to.amount).toFixed(4),
    fee: from.fee
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const calculateConversion = () => {
    return (Number(to.currency.liveRate)/Number(from.currency.liveRate)).toFixed(4);
  };

  const handleSubmit = async () => {
    fetch('https://venturist-app.nw.r.appspot.com/transaction', {
      method: 'POST',
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(exchangePost)
    })
      .then(response => setPostSuccess(response.status))
      .catch(err => alert(err))
  };

  useEffect(() => {
    if(postSuccess === 200) {
      setShowSuccess(true);
    } 
  }, [postSuccess]);

  const fundsRemaining = ((Number(exchangeInfo.exchangeFrom.user.holdings.filter(curr => curr.currencyCode === exchangeInfo.exchangeFrom.currency.currencyCode)[0].amount) - from.amount)-Number(from.fee)).toFixed(2).toLocaleString("en-us");

  return (
    <div className="make-transfer__confirmation" data-testid="confirmation">
      <div className="make-transfer__confirmation__left">
        <h4>Send From</h4>
        <div className="make-transfer__confirmation__from">
          <h6 data-testid="user-from-name">{from.user.firstName} {from.user.lastName}</h6>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__subtext">
            <p>Account Number:</p>
            <p>{from.user.bankAccountNo}</p>
          </div>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__subtext">
            <p> Sort Code:</p>
            <p>{from.user.sortCode}</p>
          </div>
          <div className="make-transfer__confirmation__border"></div>
          <div className="make-transfer__confirmation__split">
            <h5>Total</h5>
            <h5 data-testid="total-from">{from.currency.currencySymbol}{Number(from.amount).toFixed(2)}</h5>
          </div>
          <div className="make-transfer__confirmation__split">
            <p className="make-transfer__confirmation__funds">
              Funds Remaining After Fee:
            </p>
            <p className="make-transfer__confirmation__funds" data-testid="funds-remaining">
              {from.currency.currencySymbol} {fundsRemaining}
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
            <p data-testid="rate">{calculateConversion()}</p>
          </div>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__16px">
            <h5>Fee</h5>
            <p data-testid="fee">{from.currency.currencySymbol} {Number(from.fee).toFixed(2)}</p>
          </div>
          <div className="make-transfer__confirmation__split make-transfer__confirmation__16px">
            <h5>Delivery</h5>
            <p>Typically same day</p>
          </div>
        </div>
        <div className="make-transfer__confirmation__totals">
          <div className="make-transfer__confirmation__split">
            <h4>Total to Pay</h4>
            <h4 data-testid="total-to-pay">{from.currency.currencySymbol} {(Number(from.amount) + Number(from.fee)).toFixed(2).toLocaleString("en-us")}</h4>
          </div>
          <div className="make-transfer__confirmation__split">
            <h6>Recipient Recieves</h6>
            <h6 data-testid="recipient-recieves">{to.currency.currencySymbol} {Number(to.amount).toFixed(2).toLocaleString("en-us")}</h6>
          </div>
        </div>
        <div className="make-transfer__confirmation__buttons">
          <Link to="/wallet">
          <Button buttonName="Cancel" buttonFunction={handleCancel} buttonStyle="clear" />
          </Link>
          <Button buttonName="Submit" hasIcon={true} iconSrc={icons.Transfer} iconPosition="left" buttonFunction={handleSubmit} />
        </div>
      </div>
      {showSuccess && <SuccessfulMessage message={"Transaction Successful."} />}
    </div>
  )
}

export default MakeTransferConfirmation