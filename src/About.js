import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "StyleSphere About Page",
  };
  return <HeroSection myData={data}></HeroSection>;
};

export default About;
