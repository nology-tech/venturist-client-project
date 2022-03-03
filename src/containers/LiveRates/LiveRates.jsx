import React from "react";
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

  const baseCurrency = "GBP";

  const renderList = () => {
    rates.filter((currency, index) => {
      const filterted = { ...(currency.currencyCode !== baseCurrency) };
      const { currencyFlag, currencyCode, liveRate, changeOfRate } = filterted;
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
    });
  };

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
