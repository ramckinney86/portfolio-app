import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Introduction', href: '#intro' },
    { label: 'About Me', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* MOBILE TRIGGER: Only visible on smaller screens */}
      <button 
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-8 right-8 z-[60] bg-slate-900 text-white p-4 rounded-full shadow-lg active:scale-95 transition-transform"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* MOBILE OVERLAY: Slide-in menu */}
      <div className={`fixed inset-0 z-[55] bg-slate-50 transition-transform duration-500 xl:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* DESKTOP SIDEBAR: Same logic as before, hidden on mobile */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:block w-48 z-40">
        <ul className="space-y-6 border-l border-slate-200 pl-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TableOfContents;