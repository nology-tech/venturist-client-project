import React from "react";
import { useForm } from "react-hook-form";
import "./WelcomeBack.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import icons from "../../../assets/icons/icons";

const WelcomeBack = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit' 
  });

const style = (error) => {
  if (error) {
    return { backgroundColor: "rgba(255, 0, 0, 0.5)" };
    }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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
          <form className="loginform__container__form" onSubmit={handleSubmit(onSubmit)}>
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
                type="password" //State
                {...register("password", {
                  required: "Please enter your Venturist password"
                })}
              />
              {icons.EyeShow}
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="loginform__container__form__links">
              <div className="loginform__container__form__links__signup" >
                  <p>Don't have an account? </p>
                  <Button buttonName="Sign Up" buttonStyle="clear"/>
              </div>
              <Button buttonName="Forgotten Password?" buttonStyle="clear"/>
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