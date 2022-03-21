import React from "react";
import { useForm } from "react-hook-form";
import "./ChangePassword.scss";
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
    <div className="changepassword">
      <div className="changepassword__header">
          <div className="changepassword__header__logo">
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
        <div className="changepassword__container">
          <form className="changepassword__container__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="changepassword__container__form__brand">
              <img className="changepassword__container__form__brand__logo" src={logo} alt="" />
              <p className="changepassword__container__form__brand__name" >Venturist</p>
            </div>
            <div className="changepassword__container__form__header">
              <h1>Change Password</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="changepassword__container__form__email">
              <label>New Password</label>
              <input 
                className="changepassword__container__form__email__input"
                style={style(errors.email)}
                type="password" 
                {...register("newpassword", {
                  required: "Please enter a valid password",
                })} 
              />
              {icons.EyeShow}
              {errors.newpassword && <p>{errors.newpassword.message}</p>}
            </div>
            <div className="changepassword__container__form__password">
              <label>Confirm Password</label>
              <input
                className="changepassword__container__form__password__input" 
                style={style(errors.password)}
                type="password" //State
                {...register("confirmpassword", {
                  required: "Please enter a Password that matches"
                })}
              />
              {icons.EyeShow}
              {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
            </div>
            <div className="changepassword__container__form__line"></div>
            <div className="changepassword__container__form__button">
              <Button buttonName="Reset" buttonFunction={handleSubmit(onSubmit)} /> 
            </div>
          </form>
        </div>
        

    </div>
  )
}
export default WelcomeBack