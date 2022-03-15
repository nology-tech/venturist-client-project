import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../Button/Button";
import "./Features.scss";

const Features = () => {
  const features = ["Company 1", "Company 2", "Company 3", "Company 4"];
  return (
    <section className="features" data-testid="features">
      <h3 className="features__title">Our Award-Winning Features</h3>
      <div className="features__items">
        {features.map((feature, index) => {
          return (
            <div key={index} className="features__item">
              <FontAwesomeIcon
                className="features__item__icon"
                icon="fa-solid fa-wallet"
              />

              <h4>{feature}</h4>
              <p className="features__item__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          );
        })}
      </div>
      <div className="features__button">
        <Button buttonName="Find out more" />
      </div>
    </section>
  );
};

export default Features;
