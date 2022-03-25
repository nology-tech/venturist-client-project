import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./BillingAddress.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logos/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object({
  houseNumber: yup
    .string()
    .min(1, "house number/name required")
    .required("House number is required"),
  streetName: yup.string().max(100).required("Street name is required"),
  city: yup.string().max(40).required("City is required"),
  postcode: yup
    .string()
    .matches(
      /^([A-Z][A-HJ-Y]?[0-9][A-Z0-9]? ?[0-9][A-Z]{2}|GIR ?0A{2})$/i,
      "Must be valid postcode"
    )
    .min(5, "Must be valid postcode")
    .max(8)
    .required("Valid postcode is required"),
});

const BillingAddress = (props) => {
  const [userData, setUserData] = useState(null);
  const { handleReturnBillingToBank } = props;
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setUserData(data);
    navigate("/wallet", { replace: true });
  };

  console.log(userData);

  return (
    <div className="billingAddress" data-testid="billingAddress">
      <div className="billingAddress__header">
        <div className="billingAddress__header__logo">
          <img src={logo} alt="logo" />
          <h2>Venturist</h2>
        </div>
        <Button
          buttonName={"Login"}
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
            <Link to="/">
              <img
                className="billingAddress__container__form__brand__logo"
                src={logo}
                alt=""
              />
            </Link>
            <p className="billingAddress__container__form__brand__name">
              Venturist
            </p>
          </div>
          <div className="billingAddress__container__header">
            <h1>Add Billing Address</h1>
            
            <p>Enter the home address your bank account is registered to.</p>
            <br/>
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
            <Button
              buttonName="Go Back"
              buttonStyle="clear"
              buttonFunction={handleReturnBillingToBank}
            />
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
