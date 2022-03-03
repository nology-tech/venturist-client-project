import React, { useState } from "react";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";

const LiveRates = (props) => {
  const { rates } = props;
  // flagImg, currency, amount, rate, sendFunction, buttonName

  /*
    {
    currencyName: "British Pound",
    currencyFlag: "../../assets/countryFlags/gbp.png",
    currencyCode: "GBP",
    liveRate: 1.0000,
    changeOfRate: 0.000,
    currencySymbol: "£" 
  }
  */
  const [baseCurrency, setBaseCurrency] = useState("GBP");

  const renderBaseCurrency = () => {};

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

  console.log(rates);

  return (
    <table>
      <tr>
        <th>Currency</th>
        <th>Amount</th>
        <th>Rate</th>
      </tr>
      {renderList()}
    </table>
  );
};

export default LiveRates;
