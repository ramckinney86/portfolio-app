import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8 text-slate-400 text-sm md:text-base leading-loose">
        <p>
          My approach to web engineering is rooted in <span className="text-slate-200">system architecture and signal flow</span>—concepts I first mastered while earning my B.S. in Recording Industry Management. This unique foundation allows me to view complex software ecosystems through a lens of stability and maintainability.
        </p>

        <p>
          Currently, I lean into the modern JavaScript ecosystem, utilizing <span className="text-slate-200">React, Next.js, and TypeScript</span> to build modular interfaces. I am an advocate for AI-assisted development, integrating tools like 
          <span className="text-slate-200"> Claude Code</span> into my workflow to accelerate component building 
          and refactoring without sacrificing code quality.
        </p>

        <p>
          Beyond the terminal, I'm a fixture in the Philadelphia tech community and a frequent explorer of microcontroller development. I believe the best digital solutions are those that respect both the underlying hardware and the end-user's journey.
        </p>
      </div>
    </div>
  );
};

export default About;