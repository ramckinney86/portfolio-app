import React from 'react';
import { MdSchool, MdCode, MdCloudQueue } from 'react-icons/md';

const Education = () => {
  const educationData = [
    {
      institution: "Middle Tennessee State University",
      degree: "Bachelor of Science",
      focus: "Recording Industry Management – Production & Technology",
      date: "Class of 2008",
      icon: MdSchool,
      color: "#3b82f6" // Professional Blue
    },
    {
      institution: "General Assembly",
      degree: "Specialized Certifications",
      focus: "React Development, JavaScript Development, UX Design, Ruby on Rails",
      date: "Post-Graduate",
      icon: MdCode,
      color: "#ef4444" // GA Red
    },
    {
      institution: "Amazon Web Services (AWS)",
      degree: "Cloud Architecture Training",
      focus: "Architecting on AWS & AWSome Day",
      date: "Professional Development",
      icon: MdCloudQueue,
      color: "#f59e0b" // AWS Orange
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {educationData.map((edu) => (
          <div 
            key={edu.institution}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-6 p-4 rounded-full bg-slate-900 border border-slate-800 transition-all duration-300 group-hover:border-slate-500 group-hover:scale-110">
              <edu.icon 
                size={32} 
                style={{ color: edu.color }} 
                className="filter drop-shadow-sm"
              />
            </div>
            
            <h3 className="text-white font-bold text-[12px] uppercase tracking-wider mb-2">
              {edu.institution}
            </h3>
            
            <p className="text-slate-200 text-[11px] font-medium mb-1">
              {edu.degree}
            </p>
            
            <p className="text-slate-500 text-[10px] leading-relaxed mb-4 max-w-[200px]">
              {edu.focus}
            </p>
            
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 group-hover:text-slate-400 transition-colors">
              {edu.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;