
import React from 'react';
import { School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "KPR Institute of Engineering and Technology",
      period: "2022 - 2026",
      grade: "CGPA: 7.99",
      type: "B.Tech - Computer Science and Business Systems"
    },
    {
      institution: "Vijaya Vidhyala Matriculation Higher Secondary School",
      period: "2022",
      grade: "HSC: 88.8%",
      type: "Higher Secondary School"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <School className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{edu.institution}</h3>
                  <p className="text-blue-600 font-medium mb-1">{edu.type}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-600">{edu.period}</span>
                    <span className="text-slate-800 font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
