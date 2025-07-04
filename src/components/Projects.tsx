
import React from 'react';
import { Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce website using React, Node.js, and MongoDB with features like user authentication, product listings, and an admin panel using JWT. Implemented cart functionality and enabled product management capabilities for administrators.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Chitrikaa"
    },
    {
      title: "Virtual Reality Learning Environment",
      description: "Developed an interactive VR zoo in Unity with 3D models and environments created in Blender and textured using Photoshop. Implemented C# scripts for user interaction and deployed the experience on VR headsets for immersive learning.",
      technologies: ["Unity", "C#", "Blender", "Photoshop", "VR"],
      githubUrl: "https://github.com/Chitrikaa"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  <Folder className="text-blue-600" size={24} />
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
