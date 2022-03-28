import React from 'react';
import "./ConfirmAddContact.scss";
import cross from "./../../../assets/icons/black-cross.png"
import Button from "../../Button/Button";



const ConfirmAddContact = (props) => {
    
    
    const {toggleAddRecipient, exchangeInfo, setExchangeInfo, handleShowConfirmation, newContact, toggleConfirmAddContact} = props;

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
    <div className="transfer-page__add-recipient" data-testid="add-recipient">
      <h2 className="transfer-page__add-recipient__header">Add Contact</h2>
      <img src={cross} alt="Close menu" className="transfer-page__add-recipient__close-menu" onClick={handleCancel}/>
        <p>{newContact.sortCode}</p>
      <div className="transfer-page__add-recipient__buttons">
        <Button buttonName="Cancel" buttonStyle="clear" buttonFunction={handleCancel} />
        <Button buttonName="Continue" 
        // buttonFunction={handleSubmit(handleAddRecipient)} 
        />
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default ConfirmAddContact