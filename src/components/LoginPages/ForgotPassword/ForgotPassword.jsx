import React from 'react'
import "./ForgotPassword.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import icons from "../../../assets/icons/icons";

const ForgotPassword = (props) => {
  const { togglePage } = props;

  return (
    <div className="forgot-password-form">
      <div className="forgot-password-form__header">
          <div className="forgot-password-form__header__logo">
            <img src={logo} alt="logo" />
            <h2>Venturist</h2>
          </div>            
          <Button 
            buttonName={"login"}
            buttonStyle={"blue"}
            hasIcon={false}
            buttonFunction={() => {}}
          />
        </div>
        <div className="forgot-password-form__container">
          <form className="forgot-password-form__container__form">
            <div className="forgot-password-form__container__form__brand">
              <img className="forgot-password-form__container__form__brand__logo" src={logo} alt="" />
              <p className="forgot-password-form__container__form__brand__name" >Venturist</p>
            </div>
            <div className="forgot-password-form__container__form__header">
              <h1>Password Reset</h1>
              <p>Enter your Venturist email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
            </div>
            <div className="forgot-password-form__container__form__email">
              <label>Email Address</label>
              <input 
                className="forgot-password-form__container__form__email__input"
                type="text" 
              />
            </div>
            <div className="forgot-password-form__container__form__line"></div>
            <div className="forgot-password-form__container__form__button">
              <Button buttonName="Go Back" buttonStyle="clear" buttonFunction={togglePage}/>
              <Button buttonName="Send" /> 
            </div>
          </form>
        </div>
    </div>
  )
}

export default ForgotPassword