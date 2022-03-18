import React from "react";
import Features from "../../components/HomePageComponents/Features/Features";
import Footer from "../../components/HomePageComponents/Footer/Footer";
import Home from "../../components/HomePageComponents/Home/Home";
import Section from "../../components/HomePageComponents/Section/Section";
import imgRate from "../../assets/images/rates.png";
import imgConversion from "../../assets/images/convert.png";
import "./HomePage.scss";
import HeaderHome from "../../components/HomePageComponents/HeaderHome/HeaderHome";

const HomePage = () => {
  return (
    <div className="landing" data-testid="homePage">
      <HeaderHome />
      <main>
        <Home />
        <Features />
        <Section
          title="Make a Conversion"
          bgColour="blue"
          name="Conversion Table"
          img={imgConversion}
        />
        <Section
          type="hide"
          title="View Latest Rates"
          bgColour="white"
          name="Rates Table"
          img={imgRate}
          padding="extraPadding"

        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
