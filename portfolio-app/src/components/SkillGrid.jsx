import React from 'react';

const SkillGrid = ({ items }) => {
  return (
    /* Responsive grid layout matching your repo's architecture */
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
      {items.map((skill) => (
        <div
          key={skill.name}
          /* Added cursor-zoom-in and kept your minimal hover-scale logic.
             Removed borders and backgrounds to match your 'transparent' style.
          */
          className="flex flex-col items-center group transition-transform duration-300 hover:scale-110 cursor-zoom-in"
        >
          <div className="mb-4 transition-colors duration-300">
            <skill.icon 
              size={36} 
              /* In dark mode, the icons stay vibrant while the 
                 labels provide the interactive feedback.
              */
              style={{ color: skill.color }}
              className="filter drop-shadow-sm group-hover:drop-shadow-md"
            />
          </div>
          
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors duration-300 text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;