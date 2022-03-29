import React from 'react';
import "./ConfirmAddContact.scss";
import cross from "./../../../assets/icons/black-cross.png"
import Button from "../../Button/Button";



const ConfirmAddContact = (props) => {
    
    
    const {toggleAddRecipient, exchangeInfo, setExchangeInfo, handleShowConfirmation, newContact, toggleConfirmAddContact, showConfirmAddContact} = props;

  const handleCancel = () => {
    toggleConfirmAddContact(!showConfirmAddContact);
  };
  
//   const handleAddRecipient = (data) => {
//     setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeTo.user = {
//       firstName: data.name,
//       type: data.type,
//       accountNumber: data.accountNumber,
//       sortCode: data.sortCode
//     });
//     toggleAddRecipient();
//     handleShowConfirmation();
//   };

  return (
    <>
    <div className="contact-page__add-recipient" data-testid="add-recipient">
      <h2 className="contact-page__add-recipient__header">Add Contact</h2>
      <img src={cross} alt="Close menu" className="contact-page__add-recipient__close-menu" onClick={handleCancel}/>

      <div className='contact-page__add-recipient__container'>
        <p>Contact Name</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.firstName}</p>
        <br />
        <p>Bank Name</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.type}</p>
        <br />
        <p>Account Number</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.accountNumber}</p>
        <br />
        <p>Sort Code</p>
        <p className='contact-page__add-recipient__contactInfo'>{newContact.sortCode}</p>
      </div>

      <div className="contact-page__add-recipient__buttons">
        <Button buttonName="Cancel" buttonStyle="clear" buttonFunction={handleCancel} />
        <Button buttonName="Continue" onClick={console.log("twat")}
        // buttonFunction={handleSubmit(handleAddRecipient)} 
        />
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default ConfirmAddContact