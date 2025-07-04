import React from 'react';
import { FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/certification/chitrika/responsive-web-design"
    },
    {
      title: "GitHub Foundations", 
      issuer: "GitHub",
      url: "https://www.credly.com/users/chitrika-b-s/badges#credly"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/db5ffa5fb775"
    },
    {
      title: "Product and Brand Management",
      issuer: "NPTEL",
      url: null
    },
    {
      title: "Fundamentals of Generative AI for Beginners",
      issuer: "Amazon Web Services",
      url: "https://www.coursera.org/account/accomplishments/verify/MN1YQLDLOJU9"
    },
    {
      title: "Introduction to NoSQL Databases",
      issuer: "Infosys Springboard",
      url: null
    },
    {
      title: "Artificial Intelligence Primer Certification",
      issuer: "Infosys Springboard",
      url: null
    },
    {
      title: "Internship Completion Certificate",
      issuer: "Interncareer",
      url: "https://drive.google.com/file/d/1AAOPXwvuKcTNaM2AGf1dRzjN0lna-x3b/view?usp=sharing"
    },
    {
      title: "Full Stack AWS Application Development",
      issuer: "Infosys Springboard",
      url: null
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{cert.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
