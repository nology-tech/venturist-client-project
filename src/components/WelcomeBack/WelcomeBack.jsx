import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./WelcomeBack.scss";
import Button from "../Button/Button";
import logo from "../../assets/logos/logo.png";


// const SignupSchema = yup.object().shape({
//   email: yup.string().required(),
//   password: yup.string().required()
// });

const WelcomeBack = () => {
  const { register, handleSubmit, errors } = useForm({
    
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginform__brand">
            <img className="loginform__brand__logo" src={logo} alt="" />
            <p className="loginform__brand__name" >Venturist</p>
        </div>
          <div className="loginform__header">
              <h1>Welcome Back!</h1>
              <p>Lorem ipsum ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="loginform__email">
            <label>Email</label>
            <input type="text" {...register("email")} />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
          <div className="loginform__password">
            <label>Password</label>
            <input type="text" {...register("password")} />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
          <div className="loginform__links">
            <div className="loginform__links__signup" >
                <p>Don't have an account? </p>
                <Button buttonName="Sign Up" buttonStyle="clear"/>
            </div>
            <Button buttonName="Forgotten Password?" buttonStyle="clear"/>
          </div>
      <Button buttonName="Login" buttonFunction={handleSubmit(onSubmit)} />
    </form>
  );
}

export default WelcomeBack