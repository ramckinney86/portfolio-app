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
      {/* Mobile Toggle Button - Glass Circle Style */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-100 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl text-white/50 hover:text-white transition-all active:scale-90"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      {/* Full-Screen Mobile Overlay */}
      <div className={`
        fixed inset-0 z-90 bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <nav className="flex flex-col items-center gap-8 w-full">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <HashLink
                smooth
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
              >
                {item.label}
              </HashLink>

              {/* Nested Contact Links - only shown under the "Contact" item */}
              {item.label === 'Contact' && (
                <div className="flex gap-8 mt-4 pt-8 border-t border-white/5">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                      aria-label={link.label}
                    >
                      <link.icon 
                        size={22} 
                        style={{ color: link.color }}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>
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