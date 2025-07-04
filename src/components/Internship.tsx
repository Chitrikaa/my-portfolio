
import React from 'react';
import { Briefcase } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Briefcase className="text-blue-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">UI/UX Intern (Virtual)</h3>
              <p className="text-blue-600 font-medium mb-4">Interncareer</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Designed web and mobile UI using Figma for a data analytics dashboard and a travel booking 
                app, focusing on user-friendly and responsive interfaces. Strengthened proficiency in Figma 
                and UI/UX design principles through hands-on internship experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Figma
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
