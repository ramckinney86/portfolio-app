import React from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import TableOfContents from './components/TableOfContents';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import SkillGrid from './components/SkillGrid';

// Data Imports (The New Data Format)
import { navItems } from './data/navigation';
import { devSkills, designSkills, marketingSkills } from './data/skills';
import { contactLinks } from './data/contact';

function App() {
  return (
    /* The main wrapper sets the global theme: Slate-950 for a deep, modern dark mode */
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative font-sans selection:bg-blue-500/30">
      
      {/* Navigation Layer */}
      <TableOfContents items={navItems} />
      <Header links={contactLinks} />

      <main className="flex-grow">
        
        {/* Intro & Narrative Section */}
        <section id="intro" className="scroll-mt-40">
          <Introduction />
        </section>

        <section id="about" className="scroll-mt-40 border-t border-slate-900/50">
          <About />
        </section>

        {/* Career Timeline Section */}
        <section id="experience" className="scroll-mt-40 bg-slate-950">
          <Experience />
        </section>

        {/* Technical Capabilities Section */}
        <section id="skills" className="scroll-mt-40 py-24 border-t border-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-white font-bold tracking-widest uppercase text-[14px] mb-16 flex items-center justify-center">
              Technical Capabilities
            </h2>
            
            <div className="space-y-32">
              <div>
                <h3 className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-12 text-center">Development Stack</h3>
                <SkillGrid items={devSkills} />
              </div>
              
              <div>
                <h3 className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-12 text-center">Design & UI/UX</h3>
                <SkillGrid items={designSkills} />
              </div>

              <div>
                <h3 className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-12 text-center">Digital Operations</h3>
                <SkillGrid items={marketingSkills} />
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Certifications Section */}
        <section id="education" className="scroll-mt-40 border-t border-slate-900/50">
          <Education />
        </section>

        {/* Final Connection Section */}
        <section id="contact" className="scroll-mt-40 border-t border-slate-900/50 bg-slate-950">
          <Contact links={contactLinks} />
        </section>

      </main>

      <Footer links={contactLinks} />
    </div>
  );
}

export default App;