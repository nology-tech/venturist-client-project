import React from 'react'
import "./MakeTransferForm.scss"

const MakeTransferForm = (props) => {

  const {
    exchangeRateSend,
    exchangeRateRecieve,
    exchangeFee,
    exchangeDeliveryTime
  } = props;

  return (
    <form onSubmit="">
      <div>
        <h4>You send</h4>
        <div>
          <p>{exchangeRateSend.currencyFlag}</p>
          <p>{exchangeRateSend.currencyCode} - {exchangeRateSend.currencyName}</p>
          <p>{exchangeRateSend.currencySymbol}</p>
          <input type="number" />
        </div>
        <h4>Recipient gets</h4>
        <div>
          <p>{exchangeRateRecieve.currencyFlag}</p>
          <p>{exchangeRateRecieve.currencyCode} - {exchangeRateRecieve.currencyName}</p>
          <p>{exchangeRateRecieve.currencySymbol}</p>
          <input type="number" />
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
          </div>
        </div> 
      </div>
    </form>
  )
}

export default MakeTransferForm