import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ContactPage from "./ContactPage";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <div className="lg:px-12 md:px-12 p-4 pb-20">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="contactUs">
          <ContactPage />
        </Element>
      </div>
    </>
  );
}
export default Home;
