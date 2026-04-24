import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(null); // Simple Lightbox State
  
  const currentIndex = projects.findIndex(p => p.id === id);
  const project = projects[currentIndex];
  const hasNext = currentIndex < projects.length - 1;
  const nextProject = hasNext ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="max-w-5xl mx-auto md:px-8 pt-12 md:pt-20 pb-2">
      
      {/* SIMPLE LIGHTBOX OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-999 bg-slate-950/90 flex items-center justify-center cursor-pointer p-4 md:p-12"
          onClick={() => setIsOpen(null)}
        >
          <img 
            src={isOpen} 
            className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 rounded-lg" 
            alt="Enlarged view"
          />
          <span className="absolute top-10 right-10 text-white text-[10px] font-bold uppercase tracking-widest opacity-50">
            Click anywhere to close
          </span>
        </div>
      )}

      {/* NAVIGATION - Kept your localized mb-2 styling */}
      <div 
        className="flex justify-between items-center mb-2 border-b border-white/5 md:px-0 px-8 pb-6"
        aria-label="Project navigation"
      >
        <Link to="/" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
          ← Back
        </Link>
        {hasNext && (
          <Link to={`/projects/${nextProject.id}`} className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] group">
            Next <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>

      {/* CENTERED HEADER - Category pull dynamic from project data */}
      <section className="text-center flex flex-col items-center mb-0">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-white max-w-4xl">
          {project.title}
        </h1>
        <p className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
          {project.category}
        </p>
      </section>

      {/* PERFORMANCE METRICS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-0">
        {project.metrics?.map((metric, i) => (
          <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-xl text-center">
            <p className="text-2xl font-black text-white mb-1">{metric.value}</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{metric.label}</p>
          </div>
        ))}
      </section>

      {/* NARRATIVE CONTENT - Tightened Spacing */}
      <div className="space-y-12 mb-0">
        {project.contentSections?.map((section, i) => (
          <section key={i} className="max-w-3xl mx-auto text-center md:text-left mb-0">
            <h2 className="text-[11px] font-black mb-3 uppercase tracking-[0.3em] text-white">
              {section.title}
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              {section.text}
            </p>
          </section>
        ))}
      </div>

      
      {/* GALLERY SECTION */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="space-y-12 mb-0">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-white text-center md:text-left border-b border-white/5 pb-4">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {project.gallery.map((item, index) => (
              <div key={index} className="flex flex-col group">
                {/* Image Container */}
                <div 
                  className="aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5 cursor-zoom-in mb-4"
                  onClick={() => setIsOpen(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.caption || `${project.title} gallery item`} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300" 
                  />
                </div>
                
                {/* Caption Block */}
                {item.caption && (
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed px-1 italic">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STRATEGY FOOTER - Categorized Specs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 mb-0">
        {project.specs?.map((spec, i) => (
          <div key={i} className="text-center md:text-left">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4">
              {spec.label}
            </h3>
            <p className="text-slate-400 text-[11px] leading-relaxed uppercase tracking-wider font-medium">
              {spec.value}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectDetail;