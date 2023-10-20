import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import Experience from "./Experience";
import { useEffect } from "react";
import AchievementsSection from "./Achievements";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <hr />
      <section id="about">
        <ScrollAnimation
          delay={100}
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          initiallyVisible={false}
        >
          <About />
        </ScrollAnimation>
      </section>
      <hr />
      <section id="projects">
        <ScrollAnimation
          delay={100}
          initiallyVisible={false}
          animateIn="bounceInLeft"
        >
          <Project />
        </ScrollAnimation>
      </section>
      <hr />
      <section id="experience">
        <ScrollAnimation
          delay={100}
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          initiallyVisible={false}
        >
          <Experience />
        </ScrollAnimation>
      </section>
      <section id="achievements">
        <ScrollAnimation
          delay={100}
          initiallyVisible={false}
          animateIn="bounceInLeft"
        >
                <AchievementsSection/>
        </ScrollAnimation>
      </section>

      <section id="contact">
        <ScrollAnimation
          delay={100}
          animateIn="fadeIn"
          initiallyVisible={false}
        >
          <Contact />
        </ScrollAnimation>
      </section>
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
