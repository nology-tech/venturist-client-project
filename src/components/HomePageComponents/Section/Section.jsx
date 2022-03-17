import React from "react";
import "./Section.scss";

const Section = (props) => {
  const { title, bgColour, img, name, type, padding } = props;

  return (
<<<<<<< HEAD
    <section className={`section ${bgColour}`}>
      <h3 className="section__title">{title}</h3>

      <p className={`section__p ${type}`}>
        Convert and hold 54 currencies. Hold multiple currencies, and get the
        real exchange rate when you convert. Compare our pricing We charge as
        little as possible. No subscription
=======
    <section className={`section ${bgColour}`} data-testid="section">
      <h3 className="section_title">{title}</h3>
      <p className="section__p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        excepturi omnis laborum ullam libero quasi.
>>>>>>> 31a0eb8d968f7a7a74ce94b41b2f96eefbb3a3e6
      </p>
      <div className={padding}>
        <img className="section__img" src={img} alt={name} />
      </div>
     
    </section>
  );
};

export default Section;
