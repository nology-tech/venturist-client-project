import React, { useState, useEffect } from "react";
import "./ConvertPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import Header from "../../components/Header/Header";
import LiveRates from "../LiveRates/LiveRates";

const ConvertPage = () => {
  useEffect(() => {}, userProfile, liveRatesArr);

  const [profile, setProfile] = useState({ ...userProfile });
  const [rates, setRates] = useState([...liveRatesArr]);

  console.log(userProfile);
  console.log(liveRatesArr);

  return (
    <div className="convert-page">
      <section>
        <Header
          title="Convert"
          pageFunctionHeading="Currency Converter"
          textDescription="Buy and exchange currencies with ease"
        />
        <CurrencyConverter profile={profile} rates={rates} />
      </section>
      <section>
        <Header
          title=""
          pageFunctionHeading="View Latest Rates"
          textDescription="View live rates"
        />
        <LiveRates rates={rates} />
      </section>
    </div>
  );
};

export default ConvertPage;
