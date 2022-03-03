import React from "react";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import "./LiveRates.scss";

const LiveRates = () => {
  //flagImg, currency, amount, rate

  return (
    <table className="liverate-table">
      <tr>
        <th>Currency</th>
        <th>Amount</th>
        <th>Rate</th>
      </tr>
      <tr>
        <td>GBP</td>
        <td>1</td>
        <td></td>
      </tr>
      <LiveRatesItem />
      <LiveRatesItem />
      <LiveRatesItem />
      <LiveRatesItem />
      <LiveRatesItem />
    </table>
  );
};

export default LiveRates;
