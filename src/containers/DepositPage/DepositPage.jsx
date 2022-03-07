import React from "react";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./DepositPage.scss";

const DepositPage = () => {
  return (
    <div className="deposit-page">
      <Header
        title="Deposit"
        pageFunctionHeading="Deposit Funds"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <TransactionForm fundsRemaining="£12" />
    </div>
  );
};

export default DepositPage;

// potentially change h3 title as its making it too bold!
