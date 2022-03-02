import React from "react";

const LiveRatesItem = (props) => {
  const { flagImg, currency, amount, rate } = props;

  return (
    <tr>
      <td>
        <img src={flagImg} alt={currency} /> {currency}{" "}
      </td>
      <td>{amount}</td>
      <td>{rate}</td>
    </tr>
  );
};

export default LiveRatesItem;
