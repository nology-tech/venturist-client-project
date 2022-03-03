import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItem.scss";


const LiveRatesItem = (props) => {
  const { flagImg, currency, amount, rate, sendFunction, buttonName } = props;

  //buttonName, buttonStyle, hasIcon, iconSrc, iconPosition, buttonFunction

  return (
    <tr className="liverate-row">
      <td className="liverate-row__currency">
        <img src={flagImg} alt={currency} /> EUR{currency}{" "}
      </td>
      <td>1.1{amount}</td>
      <td>
        0.02{rate}{" "}
      </td>
      <td>
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
