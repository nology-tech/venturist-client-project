import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItem.scss";
import CurrencyFlag from "react-currency-flags";

const LiveRatesItem = (props) => {
  const { currencyCode, currency, amount, rate, sendFunction, buttonName } =
    props;

  //buttonName, buttonStyle, hasIcon, iconSrc, iconPosition, buttonFunction

  return (
    <tr className="liverate-row" data-testid="liverate-row">
      <td className="liverate-row__currency">
        <CurrencyFlag currency={currencyCode} size="md" />
        {currency}{" "}
      </td>
      <td>{amount}</td>
      <td>{rate} </td>
      <td className="liverate-row__button">
        <Button
          buttonName={buttonName}
          hasIcon={false}
          buttonFunction={sendFunction}
        />
      </td>
    </tr>
  );
};

export default LiveRatesItem;
