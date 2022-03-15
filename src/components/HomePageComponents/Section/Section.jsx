import React from "react";
import "./Section.scss";

const Section = (props) => {
  const { title, bgColour, img, name, type } = props;

  return (
    <section className={`section ${bgColour}`}>
      <h3 className="section__title">{title}</h3>

      <p className={`section__p ${type}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        excepturi omnis laborum ullam libero quasi.
      </p>

      <img className="section__img" src={img} alt={name} />
    </section>
  );
};

export default Section;
