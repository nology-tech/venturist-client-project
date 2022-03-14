import React from "react";
import "./Partners.scss";
import logo from "../../../assets/logos/partners/logo1.png";

const Partners = () => {
  const logos = ["1", "2", "3"];
  return (
    <section className="logos">
      <h3 className="logos__title">Trusted by over 3000 banks worldwide</h3>
      <div className="logos__grid">
        {logos.map((num, index) => {
          return <img key={index} src={logo} alt="loremLogo" width="100px" />;
        })}
      </div>
    </section>
  );
};

export default Partners;
