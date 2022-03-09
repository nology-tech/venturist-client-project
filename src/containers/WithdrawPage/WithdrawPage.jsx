import React from "react";
import Header from "../../components/Header/Header";
import SuccessfulMessage from "../../components/SuccessfulMessage/SuccessfulMessage";
import "./WithdrawPage.scss";

const WithdrawPage = () => {
  return (
    <div className="withdraw-page">
      <Header
        title="Withdraw"
        pageFunctionHeading="Withdraw Your Funds"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <SuccessfulMessage message="Withdrawal has been successful." />
    </div>
  );
};

export default WithdrawPage;
