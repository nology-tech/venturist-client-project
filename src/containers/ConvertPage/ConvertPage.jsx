import React, { useState, useEffect } from "react";
import "./ConvertPage.scss";
import Header from "../../components/Header/Header";
import DropDown from "../../components/DropDown/DropDown";
import LiveRates from "../LiveRates/LiveRates";

const ConvertPage = () => {
  const handleChange = (value) => {
    alert(value);
  };
  const codes = ["usd", "gbp", "eur"];

  return (
    <section className="convert-page">
      <Header
        title="Convert"
        pageFunctionHeading="Currency Converter"
        textDescription="Buy and exchange currencies with ease"
      />
      <section className="convert-page__dropDown">
        {/* <DropDown options={testoptions} /> */}

        <DropDown codes={codes} handleChange={handleChange} />
      </section>
      <section className="live-rates">
        <LiveRates />
      </section>
    </section>
  );
};

export default ConvertPage;
