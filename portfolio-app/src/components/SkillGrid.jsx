import React from 'react';

const SkillIcon = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center justify-center p-3 m-1 transition-transform duration-300 hover:scale-110 w-24 h-24 group">
    {/* Full color by default, scale effect on hover */}
    <Icon 
      size={32} 
      className="transition-all duration-300"
      style={{ color: color || 'currentColor' }} 
    />
    <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-center text-slate-500 group-hover:text-slate-900 leading-tight">
      {name}
    </span>
  </div>
);

const SkillGrid = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto p-2">
      {items.map((item, index) => (
        <SkillIcon key={`${item.name}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default SkillGrid;