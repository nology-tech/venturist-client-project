import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBankDetails.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object({
  nameAccount: yup.string().max(35).required("Account Name is required"),
  numberAccount: yup
    .number()
    .typeError("Must contain 11 numbers")
    .min(11, "Must contain 11 numbers")
    .required("Account Number is required"),
  sortCode: yup
    .number()
    .typeError("Must contain 6 numbers")
    .min(6, "Must contain 6 numbers")
    .required("Sort Code is required"),
});

const AddBankDetails = (props) => {
  const [userData, setUserData] = useState(null);
  const { handleShowBillingAddress } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setUserData(data);
    handleShowBillingAddress();
  };

  console.log(userData)

  return (
    <div className="createAccount" data-testid="addBankDetails-form">
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
            <h1>Add Bank Details</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="createAccount__container__form__email">
            <label>Account Name</label>
            <input {...register("nameAccount")} />
            <p className="createAccount__container__form__error">
              {errors.nameAccount?.message}
            </p>
          </div>
          <div className="createAccount__container__form__password">
            <label>Account Number</label>
            <input {...register("numberAccount")} />
            <p className="createAccount__container__form__error">
              {errors.numberAccount?.message}
            </p>
          </div>
          <div className="createAccount__container__form__password">
            <label>Sort Code</label>
            <input {...register("sortCode")} />
            <p className="createAccount__container__form__error">
              {errors.sortCode?.message}
            </p>
          </div>
          <div className="border"></div>
          <div className="createAccount__container__form__form-container">
            <Button buttonName="Go Back" buttonStyle="clear" />
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

export default AddBankDetails;
