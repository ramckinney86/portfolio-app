import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link 
          to={`/projects/${project.id}`} 
          key={project.id}
          className="group relative bg-slate-900 overflow-hidden border border-white/5 aspect-square"
        >
          {/* Image Container */}
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          
          {/* Tactical Overlay */}
          <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
              {project.title}
            </h3>
            <div className="w-12 h-1 bg-blue-500 mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;