import React, { useState } from "react";
import Button from "../../components/Button/Button";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import liveRatesArr from "../../assets/data/liveRatesExample";
import "./LiveRates.scss";

const LiveRates = (props) => {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [currencyList, setCurrencyList] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);

  const addCurrenciesByCode = (code) => {
    return liveRatesArr.filter((currency) => currency.currencyCode === code)[0];
  };

  console.log(addCurrenciesByCode("USD"));

  //  {
  //   currencyName: "British Pound",
  //   currencyFlag: "../../assets/countryFlags/gbp.png",
  //   currencyCode: "GBP",
  //   liveRate: 1.0000,
  //   changeOfRate: 0.000,
  //   currencySymbol: "£"
  // }

  const renderEdit = () => {
    return (
      <LiveRatesItem
        currencyCode={"usd"}
        currency={"US Dollars"}
        amount={"1.4"}
        rate={"0.1"}
        buttonName="Confirm"
        buttonFunction={() => setEditBaseCurrency(!editBaseCurrency)}
      />
    );
  };

  const renderBaseCurrency = () => {
    return liveRatesArr
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
            buttonFunction={() => setEditBaseCurrency(true)}
          />
        );
      });
  };

  const renderList = () => {
    return liveRatesArr.map((currency, index) => {
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
  console.log(showDropDown);

  return (
    <>
      <table
        cellPadding={0}
        cellSpacing={0}
        className="liverate-table"
        data-testid="liverate-table"
      >
        <tbody className="liverate-table__body">
          <tr className="liverate-table__body-headings">
            <th>Currency </th>
            <th>Amount </th>
            <th>Rate </th>
            <th>&nbsp;</th>
          </tr>
          {!editBaseCurrency ? renderBaseCurrency() : renderEdit()}
          {renderList()}
        </tbody>
      </table>
      {showDropDown && <div>hello</div>}
      <Button
        buttonName={"Add Currency"}
        buttonFunction={() => setShowDropDown(!showDropDown)}
      />
    </>

    //  buttonName, hasIcon, iconSrc, iconPosition, buttonFunction } = props
  );
};

export default LiveRates;
