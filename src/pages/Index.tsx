
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import MatrixBackground from '../components/MatrixBackground';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <MatrixBackground />
      <CustomCursor />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="tech">
        <TechStack />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
