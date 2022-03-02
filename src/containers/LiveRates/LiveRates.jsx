import React from "react";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";

const LiveRates = () => {
  return (
    <table>
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
