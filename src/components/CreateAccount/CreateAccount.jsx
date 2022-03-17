import React from "react";
import "./CreateAccount.scss"
import Button from "../Button/Button";
import logo from "../../assets/logos/logo.png"

const CreateAccount = () => {
  return (
    <div className="createAccount">
        <div className="createAccount__header">
            <div className="createAccount__header__logo">
            <img src={logo} alt="logo" />
            <h2>Venturist</h2>
            </div>            
            <Button buttonName={"login"}
            buttonStyle={"blue"}
            hasIcon={false}
            buttonFunction={() => {}}
             />
        </div>
        <div className="createAccount__container">

        <form className="createAccount__container__form">


        </form>

        </div>
        

    </div>
  );
}

export default CreateAccount;