import React from "react";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Team from "./components/Home/Team";
import Testimonial from "./components/Home/Testimonial";
import Footer from "./components/Home/Footer";
import Menu from "./components/Home/Menu";

const Home = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
