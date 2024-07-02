import React from "react";
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import InfoDisplay from "./InfoDisplay";
import Experience from "./Experience";
import OurTeam from "./Instructors";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";
import Instructors from "./Instructors";

const AboutUS = () => {
  return (
    <>
      <HeaderForRoute />
      <AboutHero />
      <OurStory />
      <InfoDisplay />
      <Experience />
      <Instructors />
      <Footer />
    </>
  );
};

export default AboutUS;
