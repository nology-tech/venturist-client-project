import React from 'react';
import "./ConfirmAddContact.scss";
import cross from "./../../../assets/icons/black-cross.png"
import Button from "../../Button/Button";



const ConfirmAddContact = (props) => {
    
    
    const { newContact, toggleConfirmAddContact, showConfirmAddContact, confirmAddRecipient} = props;

  const handleCancel = () => {
    toggleConfirmAddContact(!showConfirmAddContact);
  };

  return (
    <>
    <div className="contact-page__add-recipient" data-testid="add-recipient">
      <h2 className="contact-page__add-recipient__header">Confirm Add Contact</h2>
      <img src={cross} alt="Close menu" className="contact-page__add-recipient__close-menu" onClick={handleCancel}/>

      <div className='contact-page__add-recipient__container'>
        <p data-testid="contactName">Contact Name</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.contactName}</p>
        <br />
        <p>Bank Name</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.bankName}</p>
        <br />
        <p>Account Number</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.accountNumber}</p>
        <br />
        <p>Sort Code</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.sortCode}</p>
      </div>

      <div className="contact-page__add-recipient__buttons">
        <Button buttonName="Cancel" buttonStyle="clear" buttonFunction={handleCancel} />
        <Button buttonName="Confirm" buttonFunction={confirmAddRecipient} />
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default ConfirmAddContact