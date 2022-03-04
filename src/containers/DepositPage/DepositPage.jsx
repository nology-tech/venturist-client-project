import React from "react";
import Header from "../../components/Header/Header";
import "./DepositPage.scss";

const DepositPage = () => {
  return (
    <div className="deposit-page">
      <Header
        title="Deposit"
        pageFunctionHeading="Deposit Funds"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <section className="deposit-form">
        <form action="">
          <h3 className="deposit-form__title">Deposit Form</h3>
          <div className="deposit-form__table">
            <table>
              <h5>Sam Brooks</h5>
              <tr>
                <td colspan="2">Account Number:</td>
                <td></td>
                <td className="righty">10840366</td>
              </tr>
              <tr>
                <td colspan="2">Sort Code:</td>
                <td></td>
                <td className="righty">110053</td>
              </tr>
            </table>
            <hr />
          </div>
          <div className="button">
            <button>Add Funds</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DepositPage;

// potentially change h3 title as its making it too bold!
