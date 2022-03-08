import React, { useState } from "react";
import Button from "../../components/Button/Button";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import LiveRatesItemEdit from "../../components/LiveRatesItemEdit/LiveRatesItemEdit";
import liveRatesArr from "../../assets/data/liveRatesExample";
import "./LiveRates.scss";
import DropDown from "../../components/DropDown/DropDown";

const LiveRates = (props) => {
  const addCurrenciesByCode = (code) => {
    return liveRatesArr.filter((currency) => currency.currencyCode === code)[0];
  };

  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [currencyList, setCurrencyList] = useState([
    addCurrenciesByCode("USD"),
    addCurrenciesByCode("EUR"),
  ]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);

  const codes = ["usd", "gbp", "eur"];

  const renderEdit = () => {
    return (
      <LiveRatesItemEdit
        buttonName="Confirm"
        buttonFunction={() => setEditBaseCurrency(!editBaseCurrency)}
        codes={codes}
        handleChange={() => ""}
      />
    );
  };

  const renderBaseCurrency = () => {
    const base = addCurrenciesByCode(baseCurrency);
    return (
      <LiveRatesItem
        currencyCode={base.currencyCode}
        flagImg={base.currencyFlag}
        currency={base.currencyCode}
        amount={base.liveRate}
        rate={""}
        buttonName="Edit"
        buttonFunction={() => setEditBaseCurrency(true)}
      />
    );
  };

  const renderList = () => {
    return currencyList.map((currency, index) => {
      const {
        currencyFlag,
        currencyCode,
        liveRate,
        changeOfRate,
        currencyName,
      } = currency;
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
    });
  };

  const remainingCurrencyCodes = () => {
    return liveRatesArr
      .filter(
        (currency1) =>
          !currencyList.find(
            (currency2) => currency1.currencyCode === currency2.currencyCode
          )
      )
      .filter((currency) => currency.currencyCode !== baseCurrency);
  };

  const handleAddCurrency = (value) => {
    const newList = [...currencyList, addCurrenciesByCode(value.toUpperCase())];
    setCurrencyList(newList);
    setShowDropDown(false);
  };

  return (
    <div className="liverate">
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
      <div className="liverate__add">
        <Button
          buttonName={"Add Currency"}
          buttonFunction={() => setShowDropDown(!showDropDown)}
        />
        {showDropDown && (
          <DropDown
            codes={remainingCurrencyCodes().map((currency) =>
              currency.currencyCode.toLowerCase()
            )}
            handleChange={handleAddCurrency}
          />
        )}
      </div>
    </div>
  );
};

export default LiveRates;
