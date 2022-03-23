import React from 'react'
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import "./ForgotPassword.scss";

const ForgotPassword = (props) => {
  const { togglePage } = props;

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit' 
  });

  const style = (error) => {
    if (error) {
      return { border: "2px #37d8dd solid" };
    }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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
              <p>Enter your Venturist email address that you used to register. We'll email you with your username and a link to reset your password.</p>
            </div>
            <div className="forgot-password-form__container__form__email">
              <label>Email Address</label>
              <input 
                data-testid="email-input"
                className="forgot-password-form__container__form__email__input"
                type="text" 
                style={style(errors.email)}
                {...register("email", {
                  required: "*This field is required",
                })} 
              />
              {errors.email && <p className="forgot-password-form__container__form__password__error">{errors.email.message}</p>}
            </div>
            <div className="forgot-password-form__container__form__line"></div>
            <div className="forgot-password-form__container__form__button">
              <Button buttonName="Go Back" buttonStyle="clear" buttonFunction={togglePage}/>
              <div className="forgot-password-form__container__form__button__send">
                <Button buttonName="Send" buttonFunction={handleSubmit(onSubmit)} /> 
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ForgotPassword