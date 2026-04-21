import React from 'react';
import { MdOutlineEmail, MdOutlineDescription } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  const contactLinks = [
    { 
      icon: MdOutlineEmail, 
      label: 'Email', 
      href: 'mailto:your.email@example.com', 
      color: '#EA4335' 
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourprofile', 
      color: '#0A66C2' 
    },
    { 
      icon: FaGithub, 
      label: 'GitHub', 
      href: 'https://github.com/yourusername', 
      color: '#181717' 
    },
    { 
      icon: MdOutlineDescription, 
      label: 'Resume', 
      href: '/resume.pdf', 
      color: '#475569' 
    }
  ];

  return (
    /* Added sticky, top-0, z-50, and backdrop-blur */
    <header className="sticky top-0 z-50 w-full py-8 px-4 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-1">
        Rob
      </h1>
      <p className="text-slate-500 font-medium tracking-widest uppercase text-[9px] mb-6">
        Web Developer & Technical Lead
      </p>
      
      <div className="flex gap-8">
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
            <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;