import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Table of Contents / Sidebar (Sticky) */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">Overview</h4>
            <nav className="flex flex-col gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              <a href="#challenge" className="hover:text-white transition-colors">The Challenge</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#tech" className="hover:text-white transition-colors">Stack Used</a>
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <header className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </header>

          {/* Description Section */}
          <section id="challenge" className="mb-20 scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-tighter">The Work</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </section>

          {/* Image Gallery */}
          <section id="gallery" className="grid grid-cols-1 gap-8 scroll-mt-32">
            <div className="aspect-video bg-slate-900 border border-white/5">
              {/* Image 1 */}
              <img src={project.image} alt="Process 1" className="w-full h-full object-cover" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;