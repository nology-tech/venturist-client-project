import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./BillingAddress.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  houseNumber: yup
    .number()
    .typeError("Must contain numbers only")
    .min(1, "Must contain at least one number")
    .required("House number is required"),
  streetName: yup.string().max(100).required("Street name is required"),
  city: yup.string().max(40).required("City is required"),
  postcode: yup.string().min(6).max(8).required("Valid postcode is required"),
});

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

  const onSubmit = (data) => {
    setUserData(data);
    handleShowBankDetails();
  };

  return (
    <div className="billingAddress" data-testid="billingAddress">
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
            <input {...register("houseNumber")} />
            <p className="billingAddress__container__form__error">
              {errors.houseNumber?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__name">
            <label>Street Name</label>
            <input {...register("streetName")} />
            <p className="billingAddress__container__form__error">
              {errors.streetName?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__city">
            <label>City</label>
            <input type="city" {...register("city")} />
            <p className="billingAddress__container__form__error">
              {errors.city?.message}
            </p>
          </div>
          <div className="billingAddress__container__form__postcode">
            <label>Postcode</label>
            <input {...register("postcode")} />
            <p className="billingAddress__container__form__error">
              {errors.postcode?.message}
            </p>
          </div>
          <div className="border"></div>
          <div className="billingAddress__container__form__form-container">
            <Button buttonName="Go Back" buttonStyle="clear" />
            <Button
              buttonName="Create Account"
              buttonFunction={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
