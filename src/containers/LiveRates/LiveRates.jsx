import React, { useState } from "react";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import "./LiveRates.scss";

const LiveRates = (props) => {
  const { rates } = props;

  const [baseCurrency, setBaseCurrency] = useState("GBP");

  const renderBaseCurrency = () => {
    return rates
      .filter((currency) => currency.currencyCode === baseCurrency)
      .map((item, index) => {
        return (
          <LiveRatesItem
            key={index}
            flagImg={item.currencyFlag}
            currency={item.currencyCode}
            amount={item.liveRate}
            rate={item.changeOfRate}
            buttonName="Edit"
          />
        );
      });
  };

  const renderList = () => {
    return rates.map((currency, index) => {
      const { currencyFlag, currencyCode, liveRate, changeOfRate } = currency;
      if (currency.currencyCode !== baseCurrency) {
        return (
          <LiveRatesItem
            key={index}
            flagImg={currencyFlag}
            currency={currencyCode}
            amount={liveRate}
            rate={changeOfRate}
            buttonName="Send"
          />
        );
      }
    });
  };

  return (
    <table className="liverate-table">
      <tr>
        <th>Currency</th>
        <th>Amount</th>
        <th>Rate</th>
      </tr>
      {renderBaseCurrency()}
      {renderList()}
    </table>
  );
};

export default LiveRates;
