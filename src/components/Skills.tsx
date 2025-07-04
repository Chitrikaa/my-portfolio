
import React from 'react';
import { Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Backend",
      skills: ["MongoDB", "Node.js", "Express.js"]
    },
    {
      title: "Tools",
      skills: ["VS Code", "Git", "Blender", "Unity", "Figma"]
    },
    {
      title: "Soft Skills",
      skills: ["Adaptability", "Leadership", "Teamwork", "Work Ethic"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Settings className="text-blue-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
