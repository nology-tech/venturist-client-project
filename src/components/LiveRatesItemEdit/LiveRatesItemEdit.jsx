import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItemEdit.scss";
import CurrencyFlag from "react-currency-flags";

const LiveRatesItemEdit = (props) => {
  const { currencyCode, currency, amount, rate, sendFunction, buttonName } =
    props;

  return (
    <tr className="liverate-row">
      <td className="liverate-row__currency">
        <CurrencyFlag currency={currencyCode} size="md" />
        {currency}{" "}
      </td>
      <td><input type="text" />Enter Amount..</td>
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

export default LiveRatesItemEdit;
