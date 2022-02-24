import React from 'react'
import "./AddRecipient.scss"

const AddRecipient = () => {
  return (
    <div className='transfer-page__add-recipient'>
      <h2>Add Recipient</h2>
      <form onSubmit="handleSubmit">
        <div>
          <h4>Recipient Name</h4>
          <input type="text" name="" id="" required/>
        </div>
        <div>
          <h4>Account Type</h4>
          <input type="text" name="" id="" required/>
        </div>
        <div>
          <h4>Account Number</h4>
          <input type="text" name="" id="" required/>
        </div>
        <div>
          <h4>Sort Code</h4>
          <input type="text" name="" id="" required/>
        </div>
        <div>
          <p>Cancel</p>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}

export default AddRecipient