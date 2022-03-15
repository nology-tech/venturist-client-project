import React from "react";
import "./Section.scss";

const Section = (props) => {
  const { title, bgColour, img, name, type } = props;

  return (
    <section className={`section ${bgColour}`}>
      <h3 className="section__title">{title}</h3>

      <p className={`section__p ${type}`}>
        Convert and hold 54 currencies. Hold multiple currencies, and get the
        real exchange rate when you convert. Compare our pricing We charge as
        little as possible. No subscription
      </p>

      <img className="section__img" src={img} alt={name} />
    </section>
  );
};

export default Section;
