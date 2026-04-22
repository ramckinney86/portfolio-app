import React from 'react';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {educationData.map((edu) => (
          <div key={edu.institution} className="flex flex-col items-center text-center group">
            <div className="mb-6 p-4 rounded-full bg-slate-900 border border-slate-800 transition-all duration-300 group-hover:border-slate-500 group-hover:scale-110">
              <edu.icon size={32} style={{ color: edu.color }} />
            </div>
            <h3 className="text-white font-bold text-[12px] uppercase tracking-wider h-10 mb-2">{edu.institution}</h3>
            <p className="text-slate-200 text-[11px] font-medium h-6 mb-1">{edu.degree}</p>
            <p className="text-slate-500 text-[10px] leading-relaxed h-10 mb-4 max-w-50">{edu.focus}</p>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">{edu.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;