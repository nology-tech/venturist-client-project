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
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <Wallet liveRateData={liveRateData} profileData={profileData} />
    </div>
  );
};

export default WalletPage;
