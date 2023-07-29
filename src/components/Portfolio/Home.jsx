import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />

      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Portfolio />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <ContactMe />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
