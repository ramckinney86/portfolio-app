import About from './components/About';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Introduction';
import TableOfContents from './components/TableOfContents';
import SkillGrid from './components/SkillGrid';

// Import your centralized data
import { 
  devSkills, 
  designSkills, 
  marketingSkills, 
  softwareSkills, 
  otherSkills 
} from './data/skillsData';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative">
      {/* Navigation Anchor for larger screens */}
      <TableOfContents />

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Intro Section */}
        <section id="intro">
          <Intro />
        </section>

        {/* About/Bio Section - Placeholder for your narrative flow */}
        <section id="about" className="max-w-3xl mx-auto px-6 py-12">
          <About />
        </section>

        {/* Professional Experience Placeholder */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
          {/* Experience components go here */}
        </section>

        {/* Capabilities / Skills Section */}
        <section id="skills" className="py-20 bg-slate-900/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 text-white uppercase tracking-widest text-[14px]">
              Technical Capabilities
            </h2>
            
            <div className="space-y-24">
              <div>
                <h3 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Development & Engineering
                </h3>
                <SkillGrid items={devSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Design & UI/UX
                </h3>
                <SkillGrid items={designSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Management & Operations
                </h3>
                <SkillGrid items={otherSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Digital Strategy & Marketing
                </h3>
                <SkillGrid items={marketingSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Environment & Tooling
                </h3>
                <SkillGrid items={softwareSkills} />
              </div>
            </div>
          </div>
        </section>

        {/* Education & Contact Placeholders */}
        <section id="education" className="py-20">
          <h2 className='text-2xl font-bold text-center mb-12 text-white uppercase tracking-widest text-[14px]'>Education</h2>
        </section>
        <section id="contact" className="py-20">
          <h2 className='text-2xl font-bold text-center mb-12 text-white uppercase tracking-widest text-[14px]'>Contact</h2>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;