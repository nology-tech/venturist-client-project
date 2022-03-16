import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./WelcomeBack.scss";
import Button from "../Button/Button";


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
            
            <label>Email</label>
            <input type="text" {...register("email")} />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
          <div>
            <label>Password</label>
            <input type="text" {...register("password")} />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
      <Button />
    </form>
  );
}

export default WelcomeBack