import React, { useState, useRef, useEffect } from 'react';
import { skillCategories } from '../data/skills';

const SkillGrid = () => {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [showGradient, setShowGradient] = useState(true);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtEnd = scrollWidth - scrollLeft <= clientWidth + 2;
      setShowGradient(!isAtEnd);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Category Tabs Container */}
      <div className="relative mb-12">
        <div 
          className={`absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none sm:hidden transition-opacity duration-300 ${
            showGradient ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-6 border-b border-slate-800 pb-px"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap pb-3 px-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer outline-none relative group ${
                activeTab === category ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {category}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 transform origin-left ${
                  activeTab === category ? 'bg-blue-500 scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-slate-700 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display - Fixed Reserved Space logic
          Using specific min-heights to prevent layout jumping between tabs.
      */}
      <div className="min-h-108 sm:min-h-80 lg:min-h-65"> 
        <div 
          key={activeTab}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 items-stretch content-start animate-in fade-in slide-in-from-bottom-1 duration-500"
        >
          {skillCategories[activeTab] ? (
            skillCategories[activeTab].map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center group cursor-zoom-in h-full"
              >
                <div className="p-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center grow">
                  <skill.icon 
                    size={32} 
                    style={{ color: skill.color }} 
                    className="opacity-70 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                <span className="mt-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-slate-500 italic">
              Select a category to view skills.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillGrid;