import { MdOutlineEmail, MdOutlineDescription } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const contactLinks = [
  { 
    id: 'email',
    icon: MdOutlineEmail, 
    label: 'Email', 
    href: 'mailto:ramckinney86@gmail.com', 
    color: '#EA4335' 
  },
  { 
    id: 'github',
    icon: FaGithub, 
    label: 'GitHub', 
    href: 'https://github.com/ramckinney86', 
    color: '#F8FAFC' 
  },
  { 
    id: 'linkedin',
    icon: FaLinkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/rob-mckinney-19a70217/', 
    color: '#0A66C2' 
  },
  { 
    id: 'resume',
    icon: MdOutlineDescription, 
    label: 'Resume', 
    href: '../Rob_McKinney-Resume.pdf', 
    color: '#94A3B8' 
  }
];

export const footerLinks = [
    { icon: MdOutlineEmail, label: 'Email', href: 'mailto:ramckinney86@gmail.com', color: '#EA4335' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rob-mckinney-19a70217/', color: '#0A66C2' },
    { icon: FaGithub, label: 'Github', href: 'https://github.com/ramckinney86', color: '#181717' },
    { icon: MdOutlineDescription, label: 'Resume', href: '/resume.pdf', color: '#475569' }
  ];