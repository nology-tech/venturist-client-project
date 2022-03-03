import React from 'react'
import "./MakeTransferConfirmDetails.scss"

const MakeTransferConfirmDetails = () => {
  return (
    <div className='transfer-page__confirm-details'>
    <h2>Add Recipient</h2>
    <form onSubmit="handleSubmit">
      <div>
        <h4>Recipient Name</h4>
        <p></p>
      </div>
      <div>
        <h4>Account Type</h4>
        <p></p>
      </div>
      <div>
        <h4>Account Number</h4>
        <p></p>
      </div>
      <div>
        <h4>Sort Code</h4>
        <p></p>
      </div>
      <div>
        <p>Go Back</p>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default MakeTransferConfirmDetails