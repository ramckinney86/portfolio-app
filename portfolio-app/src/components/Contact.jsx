import React from 'react';
import { contactLinks } from '../data/contact';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-white font-bold tracking-widest uppercase text-[14px] mb-16 text-center">Connect</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
        {contactLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div className="mb-4">
              <link.icon 
                size={36} 
                style={{ color: link.color }} 
                className="filter drop-shadow-sm group-hover:drop-shadow-md transition-all" 
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors text-center">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;