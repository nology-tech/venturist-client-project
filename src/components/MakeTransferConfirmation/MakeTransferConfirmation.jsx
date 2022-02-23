import React from 'react'

const MakeTransferConfirmation = (props) => {

  const {accountDetails, recipientDetails, transferAmount, transferAmountConverted} = props;
  return (
    <div className="transfer-page__confirmation">      
      <h3>Send From</h3>
      <div className="grey-background">
        <h5 className="blue-colouring">{accountDetails.name}</h5>
        <div className="account-details">
          <p>Account Number:</p>
          <p>{accountDetails.accountNumber}</p>
          <p>Sort Code:</p>
          <p>{accountDetails.sortCode}</p>
        </div>
        <div className="total">
          <h5>Total</h5>
          <h5>{transferAmount}</h5>
          <p>Funds Remaining:</p>
          <p>{accountDetails.balance}</p>
        </div>
      </div>
      <h3>To</h3>
      <div className="grey-background">
        <h5 className="blue-colouring">{recipientDetails.name}</h5>
        <div className="account-details">
          <p>Account Number:</p>
          <p>{recipientDetails.accountNumber}</p>
          <p>Sort Code:</p>
          <p>{recipientDetails.sortCode}</p>
        </div>
      </div>
      <div>
        <div>
          <p>Rate</p>
          <p>{rateHere}</p>
        </div>
        <div>
          <p>Fee</p>
          <p>feeHere</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>{}</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Total</h5>
          <h5>amountHere</h5>
          <p>Recipient Recieves</p>
          <p>{transferAmountConverted}</p>
        </div>
      </div>
      <button>Cancel</button>
      <button>Send</button>
    </div>
  )
}

export default MakeTransferConfirmation