
import React from 'react';
import { User } from 'lucide-react';

const InterdisciplinaryWork = () => {
  const activities = [
    {
      title: "Secretary",
      organization: "IEEE SSIT KPRIET SB",
      description: "Contributing to technical society initiatives and student engagement"
    },
    {
      title: "Chief Volunteer",
      organization: "NSS KPRIET",
      description: "Leading community service projects and volunteer coordination"
    },
    {
      title: "NSS State Level Adventure Camp'25 Participant",
      organization: "Tamilnadu State NSS Cell & Periyar University, Salem",
      description: "Nominated by Anna University, Chennai for state-level leadership development program in Yercaud"
    }
  ];

  return (
    <section id="interdisciplinary" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Leadership & Community Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{activity.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{activity.organization}</p>
                  <p className="text-slate-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterdisciplinaryWork;
