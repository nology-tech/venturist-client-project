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

  const [ratesObj, setRatesObj] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [editBaseCurrency, setEditBaseCurrency] = useState(false);
  const [ratesArr, setRatesArr] = useState([]);

  const dataToArray = () => {
    if (ratesObj !== null) {
      console.log("sanity");
      const tempArr = Object.entries(ratesObj.rates);
      const mapped = tempArr.map((item) => {
        const obj = {
          currencyCode: item[0],
          liveRate: item[1],
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
        setRatesObj(data);
        dataToArray();
      } catch (err) {
        console.log(err);
      }
    }
  }, [status, loaded, baseCurrency]);

  const addCurrenciesByCode = (code) => {
    return ratesArr.filter((currency) => currency.currencyCode === code)[0];
  };

  const handleAmount = (event) => {
    console.log(event.target.value);
  };

  const handleCurrency = (value) => {
    console.log(value);
    setBaseCurrency(value);
  };

  const renderEdit = () => {
    return (
      <LiveRatesItemEdit
        buttonName="Confirm"
        buttonFunction={() => setEditBaseCurrency(!editBaseCurrency)}
        codes={liveRatesArr.map((item) => item.currencyCode.toLowerCase())}
        handleAmount={handleAmount}
        handleCurrency={handleCurrency}
      />
    );
  };

  const renderBaseCurrency = () => {
    if (ratesArr !== null) {
      const base = ratesArr.filter(
        (currency) => currency.currencyCode === baseCurrency
      )[0];
      if (base) {
        return (
          <LiveRatesItem
            currencyCode={base.currencyCode}
            currency={base.currencyCode}
            amount={base.liveRate}
            rate={""}
            buttonName="Edit"
            buttonFunction={() => setEditBaseCurrency(true)}
          />
        );
      }
    } else return <></>;
  };

  const renderList = () => {
    return ratesArr.map((currency, index) => {
      const { currencyCode, liveRate, currencyName } = currency;
      console.log("sanity 2");
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
          {status === "success" && renderBaseCurrency()}
          {status === "success" && renderList()}
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
