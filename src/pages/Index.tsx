
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Internship from '../components/Internship';
import Certifications from '../components/Certifications';
import InterdisciplinaryWork from '../components/InterdisciplinaryWork';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Internship />
      <Certifications />
      <InterdisciplinaryWork />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
