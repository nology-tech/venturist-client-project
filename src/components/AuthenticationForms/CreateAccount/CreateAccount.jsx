import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./CreateAccount.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .min(5, "Password must contain at least 5 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  })
  .required();

const CreateAccount = (props) => {
  const [userData, setUserData] = useState(null);
  const { handleShowBankDetails } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setUserData(data);
    handleShowBankDetails();
  };

  console.log(userData)

  return (
    <div className="createAccount" data-testid="createAccount-form">
      <div className="createAccount__header">
        <div className="createAccount__header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2>Venturist</h2>
        </div>
        <Button
          buttonName={"login"}
          buttonStyle={"blue"}
          hasIcon={false}
          buttonFunction={() => {}}
        />
      </div>
      <div className="createAccount__container">
        <form
          className="createAccount__container__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="createAccount__container__form__brand">
            <img
              className="createAccount__container__form__brand__logo"
              src={logo}
              alt=""
            />
            <p className="createAccount__container__form__brand__name">
              Venturist
            </p>
          </div>
          <div className="createAccount__container__header">
            <h1>Create an account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="createAccount__container__form__email">
            <label>Email</label>
            <input {...register("email")} />
            <p className="createAccount__container__form__error">
              {errors.email?.message}
            </p>
          </div>
          <div className="createAccount__container__form__password">
            <label>Password</label>
            <input type="password" {...register("password")} />
            <p className="createAccount__container__form__error">
              {errors.password?.message}
            </p>
          </div>
          <div className="createAccount__container__form__password">
            <label>Confirm Password</label>
            <input type="password" {...register("passwordConfirmation")} />
            <p className="createAccount__container__form__error">
              {errors.passwordConfirmation?.message}
            </p>
          </div>
          <div className="createAccount__container__form__links">
            <div className="createAccount__container__form__links__signUp">
              <p className="createAccount__container__form__signin">
                Already have an account?{" "}
              </p>
              <Button buttonName="Sign in" buttonStyle="clear" />
            </div>
          </div>
          <div className="createAccount__container__form__continueButton">
            <Button
              buttonName="Continue"
              buttonFunction={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
