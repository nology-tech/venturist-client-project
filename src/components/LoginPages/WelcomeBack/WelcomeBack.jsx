import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./WelcomeBack.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import icons from "../../../assets/icons/icons";

const WelcomeBack = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit' 
  });

  const { togglePage } = props;

  const [showPassword, setShowPassword] = useState('password')

const style = (error) => {
  if (error) {
    return { border: "2px red solid" };
    }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const toggleShowPassword = (event) => {
    event.preventDefault()
    if(showPassword == 'password') {
      setShowPassword('text')
    } else {
      setShowPassword('password')
    }
  }

  return (
    <div className="loginform">
      <div className="loginform__header">
          <div className="loginform__header__logo">
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
        <div className="loginform__container">
          <form className="loginform__container__form">
            <div className="loginform__container__form__brand">
              <img className="loginform__container__form__brand__logo" src={logo} alt="" />
              <p className="loginform__container__form__brand__name" >Venturist</p>
            </div>
            <div className="loginform__container__form__header">
              <h1>Welcome Back!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="loginform__container__form__email">
              <label>Email</label>
              <input 
                className="loginform__container__form__email__input"
                style={style(errors.email)}
                type="text" 
                {...register("email", {
                  required: "Please enter your Venturist email address",
                })} 
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="loginform__container__form__password">
              <label>Password</label>
              <input
                className="loginform__container__form__password__input" 
                style={style(errors.password)}
                type={showPassword} 
                {...register("password", {
                  required: "Please enter your Venturist password"
                })}
              />
              <i onClick={toggleShowPassword}>
              {icons.EyeShow}
              </i>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="loginform__container__form__links">
              <div className="loginform__container__form__links__signup" >
                  <p className="loginform__container__form__links__signup__text">Don't have an account? </p>
                  <Button buttonName="Sign Up" buttonStyle="clear" />
              </div>
              <Button buttonName="Forgotten Password?" buttonStyle="clear" buttonFunction={togglePage} />
            </div>
            <div className="loginform__container__form__line"></div>
            <div className="loginform__container__form__button">
              <Button buttonName="Login" buttonFunction={handleSubmit(onSubmit)} /> 
            </div>
          </form>
        </div>
    </div>
  )
}
export default WelcomeBack