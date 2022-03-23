import React from 'react';
import "./MakeTransferAddRecipient.scss";
import { useForm } from "react-hook-form";
import cross from "./../../../assets/icons/black-cross.png"
import Button from "./../../Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().max(35).required("Recipient Name is required"),
  type: yup.string().max(35).required("Account Type is required"),
  accountNumber: yup
    .number()
    .test(
      "len",
      "Must contain between 8 and 11 numbers",
      (val) => val.toString().length >= 8 && val.toString().length <= 11
    )
    .typeError("Must contain between 8 and 11 numbers")
    .required("Account Number is required"),
  sortCode: yup
    .number()
    .test(
      "len",
      "Must be exactly 6 characters",
      (val) => val.toString().length === 6
    )
    .typeError("Must contain 6 numbers")
    .required("Sort Code is required"),
});

const MakeTransferAddRecipient = (props) => {

  const {toggleAddRecipient, exchangeInfo, setExchangeInfo, handleShowConfirmation} = props;

  const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});

  const handleCancel = () => {
    toggleAddRecipient();
  };
  
  const handleAddRecipient = (data) => {
    setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeTo.user = {
      firstName: data.name,
      type: data.type,
      accountNumber: data.accountNumber,
      sortCode: data.sortCode
    });
    toggleAddRecipient();
    handleShowConfirmation();
  };

  return (
    <>
    <div className="transfer-page__add-recipient" data-testid="add-recipient">
      <h2 className="transfer-page__add-recipient__header">Add Recipient</h2>
      <img src={cross} alt="Close menu" className="transfer-page__add-recipient__close-menu" onClick={handleCancel}/>
      <form className="transfer-page__add-recipient__content">
        <label htmlFor="name" className="transfer-page__add-recipient__label">Recipient Name</label>
        <input {...register("name")} className="transfer-page__add-recipient__input" type="text" />
        <p className="transfer-page__add-recipient__error">{errors.name?.message}</p>
        <label htmlFor="accountType" className="transfer-page__add-recipient__label">Account Type</label>
        <input {...register("type")} className="transfer-page__add-recipient__input" type="text" />
        <p className="transfer-page__add-recipient__error">{errors.type?.message}</p>
        <label htmlFor="accountNumber" className="transfer-page__add-recipient__label">Account Number</label>
        <input {...register("accountNumber")} className="transfer-page__add-recipient__input" type="text" />
        <p className="transfer-page__add-recipient__error">{errors.accountNumber?.message}</p>
        <label htmlFor="sort" className="transfer-page__add-recipient__label">Sort Code</label>
        <input {...register("sortCode")} className="transfer-page__add-recipient__input" type="text" />
        <p className="transfer-page__add-recipient__error">{errors.sortCode?.message}</p>
      </form>
      <div className="transfer-page__add-recipient__buttons">
        <Button buttonName="Cancel" buttonStyle="clear" buttonFunction={handleCancel} />
        <Button buttonName="Continue" buttonFunction={handleSubmit(handleAddRecipient)} />
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default MakeTransferAddRecipient