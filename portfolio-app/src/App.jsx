import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
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
      <TableOfContents />
      <Header />
      <main className="flex-grow">
        
        {/* Introduction */}
        <section id="intro" className="max-w-3xl mx-auto px-6 py-12">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>Welcome!</h2>
          <Intro />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* About/Bio */}
        <section id="about" className="max-w-3xl mx-auto px-6 py-12">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>About Me</h2>
          <About />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>Experience</h2>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>
        
        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>Projects</h2>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]">
              Technical Skills
            </h2>
            
            <div className="space-y-24">
              <div>
                <h3 className="text-center text-slate-100 text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                  Development
                </h3>
                <SkillGrid items={devSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-100 text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                  Design & UI/UX
                </h3>
                <SkillGrid items={designSkills} />
              </div>
              <div>
                <h3 className="text-center text-slate-100 text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                  Digital Strategy & Marketing
                </h3>
                <SkillGrid items={marketingSkills} />
              </div>

              <div>
                <h3 className="text-center text-slate-100 text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                  Environments & Tools
                </h3>
                <SkillGrid items={softwareSkills} />
              </div>
              <div>
                <h3 className="text-center text-slate-100 text-[12px] font-bold uppercase tracking-[0.3em] mb-8">
                  Management & Operations
                </h3>
                <SkillGrid items={otherSkills} />
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>Education</h2>
          <Education />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className='text-2xl font-bold text-center mb-8 text-white uppercase tracking-widest text-[18px]'>Contact</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;