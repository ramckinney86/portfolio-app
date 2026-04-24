import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link 
          key={project.id} 
          to={`/projects/${project.id}`} 
          className="group relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl"
        >
          {/* Main Image */}
          <img 
            src={project.featuredImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105" 
          />

          {/* Overlay Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-2 text-center">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-3">
              <span className="h-1px w-4 bg-blue-600"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-100">
                {project.category}
              </p>
              <span className="h-1px w-4 bg-blue-600"></span>
            </div>
          </div>

          {/* Subtle Gradient Overlay for better legibility on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
      ))}
    </section>
  );
};

export default ProjectGrid;