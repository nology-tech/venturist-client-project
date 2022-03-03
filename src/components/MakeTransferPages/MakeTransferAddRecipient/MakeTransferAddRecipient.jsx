import React from 'react'
import "./MakeTransferAddRecipient.scss"

const MakeTransferAddRecipient = () => {
  return (
    <div className='transfer-page__add-recipient'>
      <h2 className='transfer-page__add-recipient__header'>Add Recipient</h2>
      <form className='add-recipient-form' onSubmit="handleSubmit">
        <div>
          <h4 className='add-recipient-form__header'>Recipient Name</h4>
          <input className='add-recipient-form__input' type="text" name="" id="" required/>
        </div>
        <div>
          <h4 className='add-recipient-form__header'>Account Type</h4>
          <input className='add-recipient-form__input' type="text" name="" id="" required/>
        </div>
        <div>
          <h4 className='add-recipient-form__header'>Account Number</h4>
          <input className='add-recipient-form__input'  type="text" name="" id="" required/>
        </div>
        <div>
          <h4 className='add-recipient-form__header'>Sort Code</h4>
          <input className='add-recipient-form__input' type="text" name="" id="" required/>
        </div>
        <div className="add-recipient-form__submit">
          <p>Cancel</p>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}

export default MakeTransferAddRecipient