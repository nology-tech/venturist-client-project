import React, { useState } from "react";
import "./Section.scss";

const Section = (props) => {
  const { title, bgColour, img, name } = props;

  return (
    <section className={`section ${bgColour}`}>
      <h3 className="section_title">{title}</h3>
      <p className="section__p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        excepturi omnis laborum ullam libero quasi.
      </p>
      <img src={img} alt={name} />
    </section>
  );
};

export default Section;
