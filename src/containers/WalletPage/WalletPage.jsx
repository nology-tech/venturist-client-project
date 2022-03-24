import React from "react";
import Header from "../../components/Header/Header";
import Wallet from "../../components/Wallet/Wallet";
import logo from "./../../assets/logos/logo.png";
import "./WalletPage.scss";

const WalletPage = (props) => {
  const { liveRateData, profileData } = props;

  return (
    <div className="wallet-page">
      <div className="wallet-page__banner">
        <img src={logo} className="wallet-page__logo" alt="Venturist Logo" />
        <h2>Venturist</h2>
      </div>
      <Header
        title="Wallet"
        pageFunctionHeading="Wallet"
        textDescription="Check your holdings."
      />
      <Wallet liveRateData={liveRateData} profileData={profileData} />
    </div>
  );
};

export default WalletPage;
