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
        <div>
            <img src={logo} alt="" />
            <p>Synergy</p>
        </div>
          <div>
              <h1>Welcome Back!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <label>Email</label>
            <input type="text" {...register("email")} />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
          <div>
            <label>Password</label>
            <input type="text" {...register("password")} />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
          <div className="loginform__links">
            <div>
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