import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import LiveRatesItemEdit from "../../components/LiveRatesItemEdit/LiveRatesItemEdit";
import liveRatesArr from "../../assets/data/liveRatesExample";
import "./LiveRates.scss";
import DropDown from "../../components/DropDown/DropDown";
import useFxApi from "../../Hooks/FX/useFxApi";

const LiveRates = (props) => {
  const [baseCurrency, setBaseCurrency] = useState("GBP");

  const url = `https://venturist-app.nw.r.appspot.com/currencies/${baseCurrency}`;

  const { data, status, ratesArr, getData } = useFxApi();

  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);
  const [baseAmount, setBaseAmount] = useState(1);
  const [defaultCurrencies, setDefaultCurrencies] = useState(["USD", "EUR"]);
  const [filteredRates, setFilteredRates] = useState([]);

  useEffect(() => {
    getData(url);
    if (status === "success") {
      try {
        setFilteredRates(filterRates());
        console.log(ratesArr);
      } catch (err) {
        console.log(err);
      }
    }
  }, [status, data, editBaseCurrency, defaultCurrencies]);

  const filterRates = () => {
    return ratesArr.filter((item) =>
      defaultCurrencies.includes(item.currencyCode)
    );
  };

  const addCurrenciesByCode = (code) => {
    return ratesArr.filter((currency) => currency.currencyCode === code)[0]
      .currencyCode;
  };

  const handleAmount = (event) => {
    setBaseAmount(event.target.value);
  };

  const handleCurrency = (value) => {
    setBaseCurrency(value);
  };

  const renderEdit = () => {
    return (
      <LiveRatesItemEdit
        buttonName="Confirm"
        buttonFunction={() => {
          setEditBaseCurrency(false);
        }}
        codes={liveRatesArr.map((item) => item.currencyCode.toLowerCase())}
        handleAmount={handleAmount}
        handleCurrency={handleCurrency}
        code={baseCurrency}
      />
    );
  };

  const renderBaseCurrency = () => {
    const base = ratesArr.filter(
      (currency) => currency.currencyCode === baseCurrency
    )[0];
    if (base) {
      return (
        <LiveRatesItem
          currencyCode={base.currencyCode}
          currency={base.currencyCode + " " + base.currencySymbol}
          amount={baseAmount}
          rate={""}
          buttonName="Edit"
          buttonFunction={() => setEditBaseCurrency(true)}
        />
      );
    }
  };

  const renderList = () => {
    return filteredRates.map((currency, index) => {
      const { currencyCode, liveRate, currencyName, currencySymbol } = currency;
      return (
        <LiveRatesItem
          key={index}
          currencyCode={currencyCode}
          currency={currencyName + " " + currencySymbol}
          amount={liveRate}
          rate={liveRate}
          buttonName="Send"
        />
      );
    });
  };

  const remainingCurrencyCodes = (arrayTo, arrayFrom) => {
    return arrayTo
      .filter(
        (currency1) =>
          !arrayFrom.find(
            (currency2) => currency1.currencyCode === currency2.currencyCode
          )
      )
      .filter((currency) => currency.currencyCode !== baseCurrency);
  };

  const handleAddCurrency = (value) => {
    const newList = [
      ...defaultCurrencies,
      addCurrenciesByCode(value.toUpperCase()),
    ];
    setDefaultCurrencies(newList);
    setShowDropDown(false);
  };

  if (status === "success" && data != null) {
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
              codes={remainingCurrencyCodes(ratesArr, defaultCurrencies).map(
                (currency) => currency.currencyCode.toLowerCase()
              )}
              handleChange={handleAddCurrency}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <p data-testid="liverate-loading">Loading live rates...</p>;
  }
};

export default LiveRates;
