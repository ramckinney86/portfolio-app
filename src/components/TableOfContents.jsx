import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { navItems } from '../data/navigation';
import { contactLinks } from '../data/contact';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-8 right-8 z-[60] bg-white text-slate-900 p-4 rounded-full shadow-2xl active:scale-95 transition-transform duration-300"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

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
            <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 and group-hover:text-white transition-colors duration-300">
              {link.label}
            </span>
          </a>
        ))}
      </div>
        </nav>
      </div>

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