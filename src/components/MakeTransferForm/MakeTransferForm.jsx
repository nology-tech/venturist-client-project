import React from 'react'
import "./MakeTransferForm.scss"

const MakeTransferForm = () => {
  return (
    <form onSubmit="">
      <div>
        <h4>You send</h4>
        <input type="number" />
        <h4>Recipient gets</h4>
        <input type="number" />
      </div>
      <div>
        <div>
          <p>Rate</p>
          <p>rateHere</p>
        </div>
        <div>
          <p>Fee</p>
          <p>feeHere</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>deliveryHere</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Total</h5>
          <h5>amountHere</h5>
        </div>
      </div> 
    </form>
  )
}

export default MakeTransferForm