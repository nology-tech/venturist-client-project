import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import LiveRatesItem from "../../components/LiveRatesItem/LiveRatesItem";
import LiveRatesItemEdit from "../../components/LiveRatesItemEdit/LiveRatesItemEdit";
import liveRatesArr from "../../assets/data/liveRatesExample";
import "./LiveRates.scss";
import DropDown from "../../components/DropDown/DropDown";
import useFxApi from "../../Hooks/FX/useFxApi";
import { getParamByParam } from "iso-country-currency";

const LiveRates = (props) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  const url = `https://venturist-app.nw.r.appspot.com/currencies/${baseCurrency}`;

  const { loaded, data, status } = useFxApi(url);

  const [currencyList, setCurrencyList] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);
  const [ratesArr, setRatesArr] = useState([]);
  const [baseAmount, setBaseAmount] = useState(1);

  const dataToArray = (obj) => {
    if (obj !== null) {
      const tempArr = Object.entries(obj.rates);
      const mapped = tempArr.map((item) => {
        const obj = {
          currencyCode: item[0],
          liveRate: item[1] * baseAmount,
          currencyName: item[0],
          currencySymbol: "",
        };
        return obj;
      });
      setRatesArr(mapped);
    }
  };
  useEffect(() => {
    if (status === "success") {
      try {
        dataToArray(data);
      } catch (err) {
        console.log(err);
      }
    }
  }, [status, baseCurrency, data]);

  const addCurrenciesByCode = (code) => {
    return ratesArr.filter((currency) => currency.currencyCode === code)[0];
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
        buttonFunction={() => setEditBaseCurrency(false)}
        codes={liveRatesArr.map((item) => item.currencyCode.toLowerCase())}
        handleAmount={handleAmount}
        handleCurrency={handleCurrency}
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
          currency={base.currencyCode}
          amount={base.liveRate * baseAmount}
          rate={""}
          buttonName="Edit"
          buttonFunction={() => setEditBaseCurrency(true)}
        />
      );
    }
  };

  const renderList = () => {
    return ratesArr.map((currency, index) => {
      const { currencyCode, liveRate, currencyName } = currency;
      return (
        <LiveRatesItem
          key={index}
          currencyCode={currencyCode}
          currency={currencyName}
          amount={liveRate}
          rate={liveRate}
          buttonName="Send"
        />
      );
    });
  };

  const remainingCurrencyCodes = () => {
    return ratesArr
      .filter(
        (currency1) =>
          !currencyList.find(
            (currency2) => currency1.currencyCode === currency2.currencyCode
          )
      )
      .filter((currency) => currency.currencyCode !== baseCurrency);
  };

  const handleAddCurrency = (value) => {
    const newList = [...ratesArr, addCurrenciesByCode(value.toUpperCase())];
    setCurrencyList(newList);
    setShowDropDown(false);
  };

  if (status == "success" && data != null) {
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
  } else {
    return <p data-testid="liverate-loading">Loading live rates...</p>;
  }
};

export default LiveRates;
