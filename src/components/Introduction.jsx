import React from 'react';

const Intro = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
        With over <span className="text-white font-semibold">15 years of professional experience</span>, 
        I specialize in engineering high-performance web applications and enterprise CMS architectures. 
        From scaling global platforms at <span className="text-white">Viacom</span> to leading full-scale 
        digital rebrands at <span className="text-white">OnSolve</span>, I bridge the gap between 
        complex backend logic and intuitive user experiences.
      </p>
    </div>
  );
};

export default Intro;