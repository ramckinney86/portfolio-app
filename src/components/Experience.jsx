import React from 'react';
import { jobs } from '../data/experience';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-16 md:space-y-24">
        {jobs.map((job, index) => (
          <div 
            key={`${job.company}-${index}`} 
            className="relative md:pl-8 md:border-l md:border-slate-900 md:hover:border-blue-600 transition-colors duration-500"
          >
            {/* Desktop-only indicator dot */}
            <div className="hidden md:block absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-950 group-hover:bg-blue-600 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <div className="flex flex-col gap-1">
                {/* Company Name */}
                <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                  {job.company}
                </h3>
                {/* Job Title - Separate line on mobile, dash on desktop */}
                <div className="flex items-center">
                  <span className="hidden md:inline text-slate-600 mr-2">—</span>
                  <span className="text-blue-500 md:text-slate-400 font-bold md:font-medium uppercase tracking-widest md:tracking-normal text-[10px] md:text-lg">
                    {job.role}
                  </span>
                </div>
              </div>

              {/* Date Range */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-3 md:mt-0">
                {job.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl">
              {job.description}
            </p>

            {/* Accomplishments */}
            <div className="grid grid-cols-1 gap-4">
              {job.accomplishments.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-blue-600 font-bold mt-0.5">▹</span>
                  <p className="text-slate-300 leading-relaxed">
                    <span className="text-slate-100 font-bold tracking-tight">{item.split(':')[0]}:</span>
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