import React from "react";
import "./TransactionForm.scss";
import Button from "../Button/Button";

const TransactionForm = (props) => {
  const {
    formTitle,
    buttonName,
    profileData,
    userHoldings,
    toggleConfirm,
    userBankAccounts,
    onlyNumber, 
    isDisabled
  } = props;

  return (
    <form onSubmit={toggleConfirm} className="deposit-form" data-testid="section-form">
      <p className="deposit-form__title" data-testid="form-title">{formTitle}</p>
      <div className="deposit-form__table">
        <table className="deposit-form__table__details">
          <h5 className="deposit-form__table__user-name">
            {profileData.firstName} {profileData.lastName}
          </h5>
          <tr>
            <td className="deposit-form__table__account-details" colSpan="2">
              Account number:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">
              {userBankAccounts.bankAccountNo}
            </td>
          </tr>
          <tr>
            <td className="deposit-form__table__account-details" colSpan="2">
              Sort code:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">
              {userBankAccounts.sortCode}
            </td>
          </tr>
        </table>

        <p className="deposit-form__table__border-line"></p>

        <div className="deposit-form__table__transaction">
          <label htmlFor="amount" className="deposit-form__table__transaction__amount">
            Amount
          </label>
          <div>
            <p>{userHoldings[0].currencySymbol}
            <input
              id="amount-input"
              data-testid="amount-input"
              className="deposit-form__table__transaction__input"
              type="number"
              step={0.01}
              min={0.01}
              pattern="[0-9.]+"
              onChange={onlyNumber}
              placeholder="00.00"
              disabled={isDisabled}
              required>
            </input>
            </p>
          </div>
        </div>

        <table className="deposit-form__table__funds-table">
          <tr>
            <td id="funds-remaining-header">Funds remaining:</td>
            <td></td>
            <td data-testid="funds-remaining" id="funds-remaining" className="deposit-form__table__user-details">
              {userHoldings[0].amount.toFixed(2)}
            </td>
          </tr>
        </table>
        <div className="deposit-form__button-container">
          <Button 
            data-testid="confirm-button" 
            buttonFunction={toggleConfirm} 
            buttonName={buttonName} 
            hasIcon={false} 
          />
        </div>
      </div>
      <p id="deposit-form__box-border"></p>
    </form>
  );
};

export default TransactionForm;
