import React, { useState } from 'react';
import "./MakeTransferAddRecipient.scss";
import cross from "./../../../assets/icons/black-cross.png"
import Button from "./../../Button/Button";

const MakeTransferAddRecipient = (props) => {

  const {toggleAddRecipient, exchangeInfo, setExchangeInfo, handleShowConfirmation} = props;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleNumber = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleSort = (event) => {
    setSortCode(event.target.value);
  };

  const handleCancel = () => {
    toggleAddRecipient();
  };
  
  const handleAddRecipient = () => {
    setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeTo.user = {
      firstName: name,
      type: type,
      accountNumber: accountNumber,
      sortCode: sortCode
    });
    toggleAddRecipient();
    handleShowConfirmation();
  };

  return (
    <>
    <div className="transfer-page__add-recipient">
      <h2 className="transfer-page__add-recipient__header">Add Recipient</h2>
      <img src={cross} alt="Close menu" className="transfer-page__add-recipient__close-menu" onClick={handleCancel}/>
      <div className="transfer-page__add-recipient__content">
        <label htmlFor="name" className="transfer-page__add-recipient__label">Recipient Name</label>
        <input type="text" name="name" className="transfer-page__add-recipient__input" onChange={handleName}></input>
        <label htmlFor="accountType" className="transfer-page__add-recipient__label">Account Type</label>
        <input type="text" name="accountType" className="transfer-page__add-recipient__input" onChange={handleType}></input>
        <label htmlFor="accountNumber" className="transfer-page__add-recipient__label">Account Number</label>
        <input type="text" name="accountNumber" className="transfer-page__add-recipient__input" onChange={handleNumber}></input>
        <label htmlFor="sort" className="transfer-page__add-recipient__label">Sort Code</label>
        <input type="text" name="sort" className="transfer-page__add-recipient__input" onChange={handleSort}></input>
      </div>
      <div className="transfer-page__add-recipient__buttons">
        <Button buttonName="Cancel" buttonStyle="clear" buttonFunction={handleCancel} />
        <Button buttonName="Continue" buttonFunction={handleAddRecipient} />
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default MakeTransferAddRecipient