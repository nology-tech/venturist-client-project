import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../Button/Button";
import "./Features.scss";

const Features = () => {
  const features = [
    {
      title: "Receive payments in 10 currencies.",
      about:
        "Get your own UK account number, Euro IBAN, US routing number, and more.",
    },
    {
      title: "Moving and living abroad just got simpler.",
      about:
        "Receive your salary, pension, and more.Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends.",
    },
    {
      title: "Move your money between countries.",
      about:
        "Send money to 80 countries, always with a low and transparent fee.",
    },
  ];
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

              <h4>{feature.title}</h4>
              <p className="features__item__p">{feature.about}</p>
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
