import React from "react";
import "./TransactionForm.scss";
import Button from "../Button/Button";

const TransactionForm = (props) => {
  const {
    formTitle,
    firstName,
    lastName,
    accountNumber,
    sortCode,
    fundsRemaining,
    buttonName,
  } = props;
  const { toggleConfirm, onlyNumber } = props;

  return (
    <section className="deposit-form">
      <p className="deposit-form__title">{formTitle}</p>
      <div className="deposit-form__table">
        <table>
          <h5 className="deposit-form__table__user-name">
            {firstName} {lastName}
          </h5>
          <tr>
            <td id="account-details" colspan="2">
              Account Number:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">
              {accountNumber}
            </td>
          </tr>
          <tr>
            <td id="account-details" colspan="2">
              Sort Code:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">{sortCode}</td>
          </tr>
        </table>

        <p id="border"></p>

        <form className="transaction">
          <label htmlFor="amount" id="amount">
            Amount
          </label>
          <input
            name="amount-input"
            id="amount-input"
            data-testid="amount-input"
            className="transaction__input"
            type="number"
            step={0.01}
            min={0.01}
            pattern="[0-9.]+"
            onChange={onlyNumber}
            placeholder="00.00"
            required
          ></input>
        </form>

        <table id="funds-table">
          <tr>
            <td>Funds remaining:</td>
            <td></td>
            <td
              id="funds-remaining"
              className="deposit-form__table__user-details"
            >
              {fundsRemaining}
            </td>
          </tr>
        </table>
      </div>
      <div className="button-container">
        <Button buttonFunction={toggleConfirm} buttonName={buttonName} />
      </div>
      <p id="box-border"></p>
    </section>
  );
};

export default TransactionForm;
