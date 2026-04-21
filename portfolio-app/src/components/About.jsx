import React from 'react';

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className='text-2xl font-bold text-center mb-12 text-white uppercase tracking-widest text-[14px]'>About Me</h2>
      <div className="space-y-8">
        {/* Primary Summary */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          I am a Philadelphia-based Senior Web Developer and Technical Lead with over 15 years of experience architecting high-performance digital experiences. Throughout my career, I have specialized in bridging the gap between complex back-end engineering and user-centric front-end design, ensuring that technical infrastructure always serves a clear strategic purpose. My background spans the full digital lifecycle, from the initial wireframe stage through to global launch, for major brands such as Viacom and OnSolve, as well as enterprise professional associations like Aptify and Vanguard.
        </p>
        
        {/* Professional History & Focus */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          My technical foundation is rooted in the modern JavaScript ecosystem, where I leverage React and Next.js alongside core proficiencies in HTML5, CSS, and PHP. This engineering expertise is complemented by a deep understanding of the marketing and business analytics required to drive growth in the software and media sectors. I have a proven track record of leading full-scale site migrations, rebranding initiatives, and CI/CD optimizations within enterprise CMS platforms like WordPress and Sitefinity.
        </p>

        {/* Specialized Interests */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Central to my approach is a UI/UX-focused methodology. I believe that digital strategy is most effective when it prioritizes the user, which is why I remain hands-on with site architecture and interface development. Beyond my technical contributions, I am an adept leader capable of managing remote and offshore teams while navigating high-level stakeholder requirements. I remain committed to continuous growth, recently refining my skill set through advanced coursework to ensure I am always bringing the latest industry standards to my local and global projects.
        </p>
      </div>
      
      {/* Decorative Divider */}
      <div className="mt-16 flex justify-center">
        <div className="h-px w-16 bg-slate-200"></div>
      </div>
    </section>
  );
};

export default About;