import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Intro from '../components/Introduction';
import SkillGrid from '../components/SkillGrid';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
  // A helper for the section dividers to keep code clean and identical
  const SectionDivider = ({ accent = false }) => (
    <div className="flex justify-center mt-16 mb-24">
      <div className={`h-px w-16 ${accent ? 'bg-blue-600 w-20 h-1' : 'bg-slate-800'}`}></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
      {/* Introduction */}
      <section id="intro" className="pt-24 md:pt-32">
        <h2 className="text-center">Introduction</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <Intro />
        <SectionDivider />
      </section>
      
      {/* Skills */}
      <section id="skills" className="py-12">
        <h2 className="text-center">Skills</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <SkillGrid />
        <SectionDivider />
      </section>

      {/* Experience */}
      <section id="experience" className="py-12">
        <h2 className="text-center">Experience</h2>
        <div className="mt-8 flex justify-center mb-4">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <Experience />
        <SectionDivider />
      </section>
      
      {/* Projects */}
      <section id="projects" className="py-12">
        <h2 className="text-center">Projects</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <ProjectGrid />
        <SectionDivider />
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <h2 className="text-center">About Me</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <About />
        <SectionDivider />
      </section>

      {/* Education */}
      <section id="education" className="py-12">
        <h2 className="text-center">Education</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <Education />
        <SectionDivider />
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-12 pb-32">
        <h2 className="text-center">Contact</h2>
        <div className="mt-8 flex justify-center mb-12">
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <Contact />
      </section>
    </div>
  );
};

export default Home;