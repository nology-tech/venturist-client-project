import React from "react";
import Header from "../../components/Header/Header";
import "./LiveRatesPage.scss";
import LiveRates from "../LiveRates/LiveRates";
import MobileNotFound from "./../../components/MobileNotFound/MobileNotFound";

export const LiveRatesPage = () => {
  return (
    <>
    <div className="live-rates-page">
      <Header
        title="Live Rates"
        pageFunctionHeading="Live Conversion Rates"
        textDescription="Get accurate and reliable foreign exchange rates. Compare all major world currencies effortlessly."
      />
      <LiveRates />
    </div>
    <MobileNotFound />
    </>
  );
};

export default LiveRatesPage;
