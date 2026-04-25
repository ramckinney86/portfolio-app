import React from 'react';
import { jobs } from '../data/experience';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto md:px-6 py-12">
      <div className="space-y-16 md:space-y-20">
        {jobs.map((job, index) => (
          <div
            key={`${job.company}-${index}`}
            className="relative md:pl-4 md:border-l md:border-slate-900 md:hover:border-blue-600 transition-colors duration-500"
          >
            {/* Indicator Dot - Desktop Only */}
            <div className="hidden md:block absolute -left-1.25 top-0 w-2 h-2 rounded-full bg-slate-800 border border-slate-950"></div>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              {/* Header: Inline on Desktop, Stacked on Mobile */}
              <h3 className="text-xl font-bold text-white tracking-tight flex flex-col md:flex-row md:items-center">
                <span>{job.company}</span>
                <span className="hidden md:inline text-slate-600 mx-2">—</span>
                <span className="text-blue-500 md:text-slate-400 font-bold md:font-medium uppercase md:normal-case tracking-widest md:tracking-tight text-[10px] md:text-xl mt-1 md:mt-0">
                  {job.role}
                </span>
              </h3>

              {/* Date Range */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 md:mt-0">
                {job.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
              {job.description}
            </p>

            {/* Accomplishments */}
            <div className="grid grid-cols-1 gap-3">
              {job.accomplishments.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-blue-600 font-bold mt-1">▹</span>
                  <p className="text-slate-300 leading-snug">
                    <span className="text-slate-100 font-semibold">{item.title}: </span>
                    {item.detail}
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
