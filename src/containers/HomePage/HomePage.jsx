import React from "react";
import Features from "../../components/HomePageComponents/Features/Features";
import Footer from "../../components/HomePageComponents/Footer/Footer";
import Header from "../../components/HomePageComponents/Header/Header";
import Home from "../../components/HomePageComponents/Home/Home";
import Partners from "../../components/HomePageComponents/Partners/Partners";
import Section from "../../components/HomePageComponents/Section/Section";
import "./HomePage.scss";

const HomePage = (props) => {
  const { setShowHome, showHome } = props;
  return (
    <>
      <Header setShowHome={setShowHome} showHome={showHome} />
      <main>
        <Home />
        <Partners />
        <Features />
        <Section title="Make a Conversion" bgColour="blue" />
        <Section title="View Latest Rates" bgColour="white" />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
