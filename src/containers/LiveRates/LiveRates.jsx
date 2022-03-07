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

  console.log(addCurrenciesByCode("USD"));

  const handleChange = (value) => {
    alert(value);
  };
  
  const codes = ["usd", "gbp", "eur"];

  const renderEdit = () => {
    return (
      <LiveRatesItemEdit
        buttonName="Confirm"
        buttonFunction={() => setEditBaseCurrency(!editBaseCurrency) }
        codes={codes}
        handleChange={handleChange}
      />
    );
  };

  const renderBaseCurrency = () => {
    const filtered = addCurrenciesByCode(baseCurrency);
    return (
      <LiveRatesItem
        currencyCode={filtered.currencyCode}
        flagImg={filtered.currencyFlag}
        currency={filtered.currencyCode}
        amount={filtered.liveRate}
        rate={filtered.changeOfRate}
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

  const remainingCurrencyCodes = () => {
    return liveRatesArr.map((item) => {
      return item.currencyCode.toLowerCase();
    });
  };

  const handleChange = (value) => {
    const newList = [...currencyList, addCurrenciesByCode(value.toUpperCase())];
    setCurrencyList(newList);
    setShowDropDown(false);
  };

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
      <div className="liverate-table__add">
        <Button
          buttonName={"Add Currency"}
          buttonFunction={() => setShowDropDown(!showDropDown)}
        />
      </div>

      {showDropDown && (
        <DropDown
          codes={remainingCurrencyCodes()}
          handleChange={handleChange}
        />
      )}
    </>

    //  buttonName, hasIcon, iconSrc, iconPosition, buttonFunction } = props
  );
};

export default LiveRates;
