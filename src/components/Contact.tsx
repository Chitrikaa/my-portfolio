
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
        
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, and innovative projects. 
          Feel free to reach out if you'd like to connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:bschitrika7@gmail.com"
            className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Mail size={20} />
            <span>bschitrika7@gmail.com</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/chitrikabs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/Chitrikaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-200"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            © 2024 Chitrika B S. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
