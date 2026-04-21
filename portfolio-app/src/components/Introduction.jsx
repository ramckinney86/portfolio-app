import React from 'react';

const Intro = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="space-y-8">
        <p>I am a Philadelphia-based Senior Web Developer and Technical Lead with over 15 years of experience architecting high-performance digital experiences for global brands like Viacom and OnSolve. Expertly bridging the gap between complex engineering and user-centric design, I manage the full digital lifecycle from initial wireframing to the deployment of enterprise-scale applications using React, Next.js, and PHP. My background integrates deep technical proficiency with digital marketing strategy and business analytics, allowing me to lead rebranding initiatives and site migrations that consistently prioritize seamless UI/UX and measurable growth.</p>
      </div>
      
      {/* Decorative Divider */}
      <div className="mt-16 flex justify-center">
        <div className="h-px w-16 bg-slate-200"></div>
      </div>
    </section>
  );
};

export default Intro;