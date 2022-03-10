import React from "react";
import "./Home.scss";

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
      <img
        className="home__img"
        src="https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/Website-builder.jpg.webp"
        alt=""
      />
    </section>
  );
};

export default Home;
