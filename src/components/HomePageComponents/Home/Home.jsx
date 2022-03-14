import React from "react";
import "./Home.scss";
import img from "../../../assets/images/liveratescreenshot.png";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h1>
      <p className="home__p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        ducimus nihil tempora culpa, a aliquid?
      </p>
      <img className="home__img" src={img} alt="App screenshot" width="750px" />
    </section>
  );
};

export default Home;
