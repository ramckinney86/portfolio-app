import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Introduction';
import TableOfContents from './components/TableOfContents';
import SkillGrid from './components/SkillGrid';



function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative">
      <TableOfContents />
      <Header />
      <main className="grow">
        
        {/* Introduction */}
        <section id="intro">
          <h2>Welcome!</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-10"></div>
          </div>
          <Intro />
          <div className="mt-16 flex justify-center">
            <div className="w-20 h-1 bg-slate-200"></div>
          </div>
        </section>
        
        {/* Skills */}
        <section id="skills">
          <div>
            <h2>
              Technical Skills
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="w-20 h-1 bg-blue-600 mb-10"></div>
            </div>
                <SkillGrid />
          </div>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-2"></div>
          </div>
          <Experience />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>
        
        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-10"></div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* About/Bio */}
        <section id="about">
          <h2>About Me</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-10"></div>
          </div>
          <About />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-10"></div>
          </div>
          <Education />
          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact">
          <h2>Contact</h2>
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 mb-10"></div>
          </div>
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;