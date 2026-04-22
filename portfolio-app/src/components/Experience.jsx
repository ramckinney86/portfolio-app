import React from 'react';
import { jobs } from '../data/experienceData'; // Clean import

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-20">
        {jobs.map((job, index) => (
          <div key={`${job.company}-${index}`} className="relative pl-8 border-l border-slate-900 hover:border-blue-600 transition-colors duration-500">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-800 border border-slate-950"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {job.company} <span className="text-slate-600 mx-2">—</span> <span className="text-slate-400 font-medium">{job.role}</span>
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 md:mt-0">
                {job.period}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
              {job.description}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {job.accomplishments.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-blue-600 font-bold mt-1">▹</span>
                  <p className="text-slate-300 leading-snug">
                    <span className="text-slate-100 font-semibold">{item.split(':')[0]}:</span>
                    {item.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;