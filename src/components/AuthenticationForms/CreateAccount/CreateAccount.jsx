import React from "react";
import { useForm } from "react-hook-form";
import "./CreateAccount.scss"
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png"

const CreateAccount = () => {
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

        <form className="createAccount__container__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="createAccount__container__form__brand">
              <img className="createAccount__container__form__brand__logo" src={logo} alt="" />
              <h2 className="createAccount__container__form__brand__name" >Venturist</h2>
          </div>
            <div className="createAccount__container__header">
                <h1>Create an account</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="createAccount__container__form__email">
              <label>Email</label>
              <input 
                style={style(errors.email)}
                type="text" 
                {...register("email", {
                  required: "Please enter your Venturist email address",
                })} 
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="createAccount__container__form__password">
              <label>Password</label>
              <input 
                style={style(errors.password)}
                type="password" 
                {...register("password", {
                  required: "Please enter your Venturist password"
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="createAccount__container__form__password">
              <label>Confirm Password</label>
              <input 
                style={style(errors.password)}
                type="password" 
                {...register("password", {
                  required: "Please enter your Venturist password"
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="createAccount__container__form__links">
              <div className="createAccount__container__form__links__signUp" >
                  <p>Already have an account? </p>
                  <Button buttonName="Login" buttonStyle="clear"/>
              </div>
            
            </div>
              <Button buttonName="Continue" buttonFunction={handleSubmit(onSubmit)} />
      </form>

        </div>
        

    </div>
  );
}

export default CreateAccount;