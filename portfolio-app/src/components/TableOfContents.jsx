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
      {/* MOBILE TRIGGER: Static White circle with Black lines */}
      <button 
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-8 right-8 z-[60] bg-white text-slate-900 p-4 rounded-full shadow-2xl active:scale-95 transition-transform duration-300"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 z-[55] bg-slate-950 transition-transform duration-500 xl:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* DESKTOP SIDEBAR */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:block w-48 z-40">
        <ul className="space-y-6 border-l border-slate-800 pl-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors duration-300"
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