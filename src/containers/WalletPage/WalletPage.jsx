import React from "react";
import Header from "../../components/Header/Header";
import Wallet from "../../components/Wallet/Wallet";
import "./WalletPage.scss";

const WalletPage = (props) => {
  const { liveRateData, profileData } = props;

  return (
    <div className="wallet-page">
      <Header
        title="Wallet"
        pageFunctionHeading="Wallet"
        textDescription= "Send money online fast, 24/7, from over 100 currencies. Don't see the currency you're looking for? Visit the convert page."
      />
      <Wallet liveRateData={liveRateData} profileData={profileData} />
    </div>
  );
};

export default WalletPage;
