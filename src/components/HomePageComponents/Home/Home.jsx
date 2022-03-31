import React from "react";
import "./Home.scss";
import img from "../../../assets/images/venturist-currency.png";

const Home = () => {
  return (
    <section className="home" data-testid="home">
      <h1 className="home__title">Make your money go places.</h1>
      <p className="home__p">
        Send money cheaper and easier than old-school banks. Send money at the
        real exchange rate with no hidden fees.
      </p>
      <img
        className="home__img"
        src={img}
        alt="App screenshot"
        width="900px"
        data-testid="home-img"
      />
    </section>
  );
};

export default Home;
