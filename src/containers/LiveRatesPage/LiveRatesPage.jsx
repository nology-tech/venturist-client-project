import React from "react";
import Header from "../../components/Header/Header";
import "./LiveRatesPage.scss";
import LiveRates from "../LiveRates/LiveRates";

export const LiveRatesPage = () => {
  return (
    <div className="live-rates-page">
      <Header
        title="Live Rates"
        pageFunctionHeading="Live Conversion Rates"
        textDescription="Get accurate and reliable foreign exchange rates. Compare all major world currencies effortlessly."
      />
      <LiveRates />
    </div>
  );
};

export default LiveRatesPage;
