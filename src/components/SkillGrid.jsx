import React, { useState } from 'react';
import { skillCategories } from '../data/skills';

const SkillGrid = () => {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-6 mb-12 border-b border-slate-800">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`pb-4 px-1 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === category
                ? 'text-white border-b-2 border-blue-500'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {skillCategories[activeTab].map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center group cursor-zoom-in"
          >
            <div className="p-4 transition-transform duration-300 group-hover:scale-110">
              <skill.icon size={40} style={{ color: skill.color }} className="opacity-80 group-hover:opacity-100" />
            </div>
            <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;