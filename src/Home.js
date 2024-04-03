import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "StyleSphere",
  };

  return (
    <>
      <HeroSection myData={data}></HeroSection>
      <Services></Services>
    </>
  );
};

export default Home;
