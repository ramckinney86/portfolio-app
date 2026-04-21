import React from 'react';
import { MdOutlineEmail, MdOutlineDescription } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { icon: MdOutlineEmail, label: 'Email', href: 'mailto:your.email@example.com', color: '#EA4335' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: '#0A66C2' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/yourusername', color: '#181717' },
    { icon: MdOutlineDescription, label: 'Resume', href: '/resume.pdf', color: '#475569' }
  ];

  return (
    <footer className="w-full py-8 px-4 mt-20 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          © {currentYear} Rob • Philadelphia, PA
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <link.icon 
                size={18} 
                style={{ color: link.color }}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900">
                {link.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;