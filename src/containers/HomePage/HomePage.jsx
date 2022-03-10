import React from "react";
import Features from "../../components/HomePageComponents/Features/Features";
import Footer from "../../components/HomePageComponents/Footer/Footer";
import Header from "../../components/HomePageComponents/Header/Header";
import Home from "../../components/HomePageComponents/Home/Home";
import Partners from "../../components/HomePageComponents/Partners/Partners";
import Section from "../../components/HomePageComponents/Section/Section";
import imgRate from "../../assets/images/rates.png";
import imgConversion from "../../assets/images/convert.png";
import "./HomePage.scss";

const HomePage = (props) => {
  const { setShowHome } = props;
  return (
    <div className="home">
      <Header setShowHome={setShowHome} />
      <main>
        <Home />
        <Partners />
        <Features />
        <Section
          title="Make a Conversion"
          bgColour="blue"
          name="Conversion Table"
          img={imgConversion}
        />
        <Section
          title="View Latest Rates"
          bgColour="white"
          name="Rates Table"
          img={imgRate}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
