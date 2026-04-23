import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MdMenu, MdClose } from 'react-icons/md';
import { contactLinks } from '../data/contact';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Introduction', href: '/#intro' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'About Me', href: '/#about' },
    { label: 'Education', href: '/#education' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Mobile Toggle Button - Bottom Right */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] md:hidden text-white/50 hover:text-white transition-colors p-2"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
      </button>

      {/* Full-Screen Mobile Overlay */}
      <div className={`
        fixed inset-0 z-[90] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-between py-20
        transition-all duration-500 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Navigation Section */}
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <HashLink
              key={item.label}
              smooth
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>

        {/* Mobile Contact Links Section */}
        <div className="flex flex-wrap justify-center gap-8 px-10">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <link.icon 
                size={22} 
                style={{ color: link.color }}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-slate-500">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar - Centered Vertically */}
      <aside className="hidden md:block fixed left-12 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-6 border-l border-white/10 pl-8">
          <p className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[8px] mb-2">
            Section
          </p>
          {navItems.map((item) => (
            <HashLink
              key={item.label}
              smooth
              to={item.href}
              className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors py-1"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default TableOfContents;