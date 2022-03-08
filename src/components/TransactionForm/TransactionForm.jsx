import React from 'react'
import "./TransactionForm.scss"
import Button from '../Button/Button';
import { useForm } from "react-hook-form";

const TransactionForm = (props) => {
  const {
    formTitle,
    firstName,
    lastName,
    accountNumber,
    sortCode,
    fundsRemaining
  } = props;

  const { register, handleSubmit, errors } = useForm();

  const depositAmount = []; // go into parent container and feed through

  const onSubmit = (data) => {
    depositAmount.push(JSON.stringify(data));
    alert(depositAmount);
  }

  return (
    <section className="deposit-form">
      <p className="deposit-form__title">{formTitle}</p>
      <div className="deposit-form__table">
        <table>
          <h5 className="deposit-form__table__user-name">{firstName} {lastName}</h5>
          <tr>
            <td id="account-details" colspan="2">Account Number:</td>
            <td></td>
            <td className="deposit-form__table__user-details">{accountNumber}</td>
          </tr>
          <tr>
            <td id="account-details" colspan="2">Sort Code:</td>
            <td></td>
            <td className="deposit-form__table__user-details">{sortCode}</td>
          </tr>
        </table>

        <p id="border"></p>  

        <form id="transaction" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="amount" id="amount">Amount</label>
          <input 
            type="text" 
            name="amount-input" 
            id="amount-input" 
            {...register("depositAmount", { required: true, pattern: /^[0-9]+$/i, maxLength: 5})} 
          />
          {errors.deposit?.type === "required" && <span>"This is required"</span>}
          {errors.deposit?.type === "pattern" && <span role="alert">Must include numbers</span>}
          {errors.deposit?.type === "maxLength" && <span role="alert">Number too big</span>}
        </form>

        <table className="funds-table">
          <tr>
            <td>
            Funds remaining:
            </td>
            <td></td>
            <td id="funds-remaining"  className="deposit-form__table__user-details">{fundsRemaining}</td>
          </tr>
        </table>
      </div>
      <div className="button">
        {/* <Button buttonName="Add Funds" type="submit" form="transaction"/> */}
        <button type="submit" form="transaction">Add Funds</button>
      </div>
      <p id="box-border"></p>  
  </section>
  )
}

export default TransactionForm