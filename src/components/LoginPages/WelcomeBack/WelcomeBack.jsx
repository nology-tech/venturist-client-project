import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./WelcomeBack.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import icons from "../../../assets/icons/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";


const WelcomeBack = (props) => {
  const { togglePage, setUid } = props;

  const nav = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit' 
  });

  const [showPassword, setShowPassword] = useState('password')

  const style = (error) => {
    if (error) {
      return { border: "2px #37d8dd solid" };
    }
  }

  const onSubmit = (data) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth,data.email,data.password)
      .then(response => {
        setUid(response.user.uid);
        nav("/wallet");
      })
      .catch((error) => alert("Something went wrong :c"));


  };

  const toggleShowPassword = (event) => {
    event.preventDefault()
    if(showPassword === 'password') {
      setShowPassword('text')
    } else {
      setShowPassword('password')
    }
  }

  return (
    <div className="loginform">
      <div className="loginform__header">
          <div className="loginform__header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2>Venturist</h2>
          </div>
          <Link to="/signup">
                <Button 
                buttonName={"Sign up"}
                buttonStyle={"blue"}
                hasIcon={false}
                buttonFunction={() => {}}
              />
          </Link>     
        </div>
        <div className="loginform__container">
          <form className="loginform__container__form">
            <div className="loginform__container__form__brand">
              <img className="loginform__container__form__brand__logo" src={logo} alt="" />
              <p className="loginform__container__form__brand__name ptag" >Venturist</p>
            </div>
            <div className="loginform__container__form__header">
              <h1>Welcome Back!</h1>
              <p className="ptag">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="loginform__container__form__email">
              <label>Email</label>
              <input 
                className="loginform__container__form__email__input"
                data-testid="email-input"
                style={style(errors.email)}
                type="text" 
                {...register("email", {
                  required: "*This field is required",
                })} 
              />
              {errors.email && <p className="loginform__container__form__password__error ptag">{errors.email.message}</p>}
            </div>
            <div className="loginform__container__form__password">
              <label>Password</label>
              <input
                className="loginform__container__form__password__input" 
                data-testid="password-input"
                style={style(errors.password)}
                type={showPassword} 
                {...register("password", {
                  required: "*This field is required"
                })}
              />
              <i data-testid="eye-show" onClick={toggleShowPassword}>
              {showPassword === "password" ? icons.EyeShow : icons.EyeHide}
              </i>
              {errors.password && <p className="loginform__container__form__password__error ptag">{errors.password.message}</p>}
            </div>
            <div className="loginform__container__form__links">
              <div className="loginform__container__form__links__signup" >
                  <p className="loginform__container__form__links__signup__text ptag">Don't have an account? </p>
                  <Link to="/signup">
                    <Button buttonName="Sign Up" buttonStyle="clear" />
                  </Link>
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