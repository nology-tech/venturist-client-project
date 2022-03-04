import React, { useState } from "react";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import "./LiveRates.scss";

const LiveRates = (props) => {
  const { rates } = props;

  const [baseCurrency, setBaseCurrency] = useState("GBP");

  //  {
  //   currencyName: "British Pound",
  //   currencyFlag: "../../assets/countryFlags/gbp.png",
  //   currencyCode: "GBP",
  //   liveRate: 1.0000,
  //   changeOfRate: 0.000,
  //   currencySymbol: "£"
  // }

  const renderBaseCurrency = () => {
    return rates
      .filter((currency) => currency.currencyCode === baseCurrency)
      .map((item, index) => {
        return (
          <LiveRatesItem
            key={index}
            currencyCode={item.currencyCode}
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
      const {
        currencyFlag,
        currencyCode,
        liveRate,
        changeOfRate,
        currencyName,
      } = currency;
      if (currency.currencyCode !== baseCurrency) {
        return (
          <LiveRatesItem
            key={index}
            currencyCode={currencyCode}
            flagImg={currencyFlag}
            currency={currencyName}
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
      <tbody>
        <tr>
          <th>Currency</th>
          <th>Amount</th>
          <th>Rate</th>
          <th> </th>
        </tr>
        {renderBaseCurrency()}
        {renderList()}
      </tbody>
    </table>
  );
};

export default LiveRates;
