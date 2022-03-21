import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./BillingAddress.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const BillingAddress = (props) => {
  const [userData, setUserData] = useState(null);
  const { handleShowBankDetails } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ((data) => {setUserData(data);
     handleShowBankDetails()});

  return (
    <div className="billingAddress">
      <div className="billingAddress__header">
        <div className="billingAddress__header__logo">
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
      <div className="billingAddress__container">
        <form
          className="billingAddress__container__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="billingAddress__container__form__brand">
            <img
              className="billingAddress__container__form__brand__logo"
              src={logo}
              alt=""
            />
            <p className="billingAddress__container__form__brand__name">
              Venturist
            </p>
          </div>
          <div className="billingAddress__container__header">
            <h1>Add Billing Address</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="billingAddress__container__form__number">
            <label>House Number</label>
            <input {...register("email")} />
            <p className="billingAddress__container__form__error">
              {errors.email?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__name">
            <label>Street Name</label>
            <input type="Street" {...register("password")} />
            <p className="billingAddress__container__form__error">
              {errors.password?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__city">
            <label>City</label>
            <input type="city" {...register("passwordConfirmation")} />
            <p className="billingAddress__container__form__error">
              {errors.passwordConfirmation?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__postcode">
            <label>Postcode</label>
            <input type="postcode" {...register("passwordConfirmation")} />
            <p className="billingAddress__container__form__error">
              {errors.passwordConfirmation?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__continueButton">
          <Button buttonName="Go Back" buttonStyle="clear" />
          <Button buttonName="Create Account" buttonFunction={handleSubmit(onSubmit)} />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
