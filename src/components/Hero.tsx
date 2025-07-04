
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
            Chitrika B S
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-600 font-medium mb-8 animate-fade-in">
            Pre-Final Year Undergraduate | Web Developer | Tech Enthusiast
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in">
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a pre-final year undergraduate student with practical experience in web development and a strong 
            interest in growing beyond my current skill set. I'm always ready to explore new technologies and 
            expand into different domains. I thrive in collaborative environments and believe in the power of 
            teamwork to achieve shared goals and create meaningful impact.
          </p>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in">
          <a
            href="https://github.com/Chitrikaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chitrikabs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:bschitrika7@gmail.com"
            className="flex items-center space-x-2 bg-white text-slate-800 border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
