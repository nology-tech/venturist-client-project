import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItem.scss";
import CurrencyFlag from "react-currency-flags";
import { Link, useParams } from "react-router-dom";

const LiveRatesItem = (props) => {
  const { currencyCode, currency, amount, rate, buttonFunction, buttonName } =
    props;

  return (
    <tr className="liverate-row" data-testid="liverate-row">
      <td className="liverate-row__currency">
        <CurrencyFlag currency={currencyCode} size="md" />
        {currency}{" "}
      </td>
      <td>{amount}</td>
      <td>{rate} </td>
      <td className="liverate-row__button">
      <Link to={`/transfer/${currencyCode}`} className="liverate-row__button">
        <Button
          buttonName={buttonName}
          hasIcon={false}
          buttonFunction={buttonFunction}
        />
      </Link>
      </td>
      
    </tr>
  );
};

export default LiveRatesItem;
