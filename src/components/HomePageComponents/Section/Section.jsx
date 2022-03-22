import React from "react";
import "./Section.scss";

const Section = (props) => {
  const { title, bgColour, img, name, type, padding } = props;

  return (
    <section className={`section ${bgColour}`} data-testid="section">
      <h3 className="section__title">{title}</h3>

      <p className={`section__p ${type}`}>
        Convert and hold 54 currencies. Get upto date 
        exchange rate when you convert. We charge the lowest fees with no subscription.
      </p>
      <div className={padding}>
        <img className="section__img" src={img} alt={name} />
      </div>
     
    </section>
  );
};

export default Section;
