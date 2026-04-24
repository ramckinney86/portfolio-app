import React from 'react';
import { Link } from 'react-router-dom';
import { contactLinks } from '../data/contact';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4 md:py-8 px-4 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <Link to="/" className="group flex flex-col items-center">
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-500 transition-colors">
          Rob McKinney
        </h1>
        <p className="text-slate-400 font-medium tracking-widest uppercase text-[9px] mb-1">
          Web Developer | Digital Marketer | UX Strategist
        </p>
        <p className="text-slate-400 font-medium tracking-widest text-[9px] mb-2 md:mb-6">
          Philadelphia, PA
        </p>
      </Link>
      
      <div className="hidden md:flex gap-8">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
            aria-label={link.label}
          >
            <link.icon 
              size={24} 
              style={{ color: link.color }}
              className="mb-1"
            />
            <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;