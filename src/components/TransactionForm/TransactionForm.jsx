import React from "react";
import "./TransactionForm.scss";
import Button from "../Button/Button";

const TransactionForm = (props) => {
  const {
    formTitle,
    buttonName,
    profileData,
    toggleConfirm, 
    onlyNumber, 
    isDisabled
  } = props;

  return (
    <section className="deposit-form" data-testid="section-form">
      <p data-testid="form-title" className="deposit-form__title">{formTitle}</p>
      <div className="deposit-form__table">
        <table>
          <h5 className="deposit-form__table__user-name">
            {profileData.firstName} {profileData.lastName}
          </h5>
          <tr>
            <td id="account-details" colspan="2">
              Account Number:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">
              {profileData.accountNumber}
            </td>
          </tr>
          <tr>
            <td id="account-details" colspan="2">
              Sort Code:
            </td>
            <td></td>
            <td className="deposit-form__table__user-details">{profileData.sortCode}</td>
          </tr>
        </table>

        <p id="border"></p>

        <form onSubmit={toggleConfirm} className="transaction">
          <label htmlFor="amount" id="amount">
            Amount
          </label>
          <div>
            <p>{profileData.cards[0].currencySymbol}
            <input
              id="amount-input"
              data-testid="amount-input"
              className="transaction__input"
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

        </form>

        <table id="funds-table">
          <tr>
            <td>Funds remaining:</td>
            <td></td>
            <td data-testid="funds-remaining" id="funds-remaining" className="deposit-form__table__user-details">
              {profileData.holdings[profileData.cards[0].currencyType].toFixed(2)}
            </td>
          </tr>
        </table>
      </div>
      <div className="button-container">
        <Button               data-testid="amount-input" buttonFunction={toggleConfirm} buttonName={buttonName} hasIcon={false} 
        />
      </div>
      <p id="box-border"></p>
    </section>
  );
};

export default TransactionForm;
