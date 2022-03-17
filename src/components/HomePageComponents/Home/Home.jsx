import React from "react";
import "./Home.scss";
import img from "../../../assets/images/liveratescreenshot.png";

const Home = () => {
  return (
<<<<<<< HEAD
    <section className="home">
      <h1 className="home__title">Make your money go places.</h1>
=======
    <section className="home" data-testid="home">
      <h1 className="home__title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h1>
>>>>>>> 31a0eb8d968f7a7a74ce94b41b2f96eefbb3a3e6
      <p className="home__p">
        Send money cheaper and easier than old-school banks. Send money at the
        real exchange rate with no hidden fees.
      </p>
      <img
        className="home__img"
        src={img}
        alt="App screenshot"
        width="750px"
        data-testid="home-img"
      />
    </section>
  );
};

export default Home;
