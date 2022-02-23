import React from 'react'
import "./MakeTransferForm.scss"

const MakeTransferForm = (props) => {

  const {
    // exchangeRateSend,
    // exchangeRateRecieve,
    // exchangeFee,
    // exchangeDeliveryTime
  } = props;

  return (
    <form className='transfer-page__transfer-form' onSubmit="handleSubmit">
      <div className="">
        <h4>You send</h4>
        <div>
          {/* <p>{exchangeRateSend.currencyFlag}</p>
          <p>{exchangeRateSend.currencyCode} - {exchangeRateSend.currencyName}</p>
          <p>{exchangeRateSend.currencySymbol}</p> */}
          <input type="text" />
        </div>
        <h4>Recipient gets</h4>
        <div>
          {/* <p>{exchangeRateRecieve.currencyFlag}</p>
          <p>{exchangeRateRecieve.currencyCode} - {exchangeRateRecieve.currencyName}</p>
          <p>{exchangeRateRecieve.currencySymbol}</p> */}
          <input type="text" />
        </div>
      </div>
      <div>
        <div>
          <p>Rate</p>
          {/* <p>{exchangeRateRecieve.liveRate}</p> */}
        </div>
        <div>
          <p>Fee</p>
          {/* <p>{exchangeFee}</p> */}
        </div>
        <div>
          <p>Delivery</p>
          {/* <p>{exchangeDeliveryTime}</p> */}
        </div>
      </div>
      <div>
        <h5>Total</h5>
        <h5>Sum</h5>
      </div>
    </form>
  )
}

export default MakeTransferForm