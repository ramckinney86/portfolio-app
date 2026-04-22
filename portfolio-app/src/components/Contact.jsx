import React from 'react';
import { MdOutlineEmail, MdOutlineDescription } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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
      href: 'https://github.com/ramckinney86', 
      color: '#F8FAFC' // White for Dark Mode visibility
    },
    { 
      icon: MdOutlineDescription, 
      label: 'Resume', 
      href: '/resume.pdf', 
      color: '#94A3B8' 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            /* cursor-pointer for nav, hover-scale for consistency */
            className="flex flex-col items-center group transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div className="mb-4">
              <link.icon 
                size={36} // Matches the size used in your SkillGrid
                style={{ color: link.color }}
                className="filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
              />
            </div>
            
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors duration-300 text-center">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;