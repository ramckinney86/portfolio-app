import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Find current project and its index
  const currentIndex = projects.findIndex(p => p.id === id);
  const project = projects[currentIndex];

  // Logic for the "Next" project - only defined if not at the end
  const hasNext = currentIndex < projects.length - 1;
  const nextProject = hasNext ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="max-w-5xl mx-auto px-8 pt-12 md:pt-20 pb-32">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
        <Link 
          to="/" 
          className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
        >
          ← Back
        </Link>
        
        {hasNext && (
          <Link 
            to={`/projects/${nextProject.id}`} 
            className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] group"
          >
            Next <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-col">
        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-slate-900 border border-slate-800 text-[9px] font-bold uppercase tracking-widest text-slate-400 rounded-sm">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Section: The Work */}
        <section className="mb-20">
          <h2 className="text-lg font-black mb-6 uppercase tracking-widest text-blue-600 border-b border-white/5 pb-2">
            The Work
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl italic font-medium">
            {project.description}
          </p>
        </section>

        {/* Section: Gallery */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-12">
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
              <img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                className="w-full h-full object-cover opacity-90" 
              />
            </div>
          </div>
        </section>

        {/* Section: Tech Stack */}
        <section>
          <h2 className="text-lg font-black mb-6 uppercase tracking-widest text-blue-600 border-b border-white/5 pb-2">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;