import { 
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiSass, 
  SiGit, SiPhp, SiVercel, SiWpengine, SiDigitalocean, 
  SiPantheon, SiBootstrap, SiJquery, SiWordpress, SiDocker, SiMysql, 
  SiProgress, SiShopify, SiGreensock, SiHubspot, SiGoogleanalytics, 
  SiGoogleads, SiMeta, SiPosthog, SiFigma, SiFramer, SiSublimetext, 
  SiTrello, SiJira, SiAsana 
} from 'react-icons/si';

import { 
  MdOutlineArchitecture, MdDevices, MdOutlineBrush, MdOutlineGridOn, 
  MdOutlineLayers, MdOutlineViewQuilt, MdOutlineAccountTree, 
  MdOutlineArticle, MdOutlineColorLens, MdOutlineAutoFixHigh,
  MdOutlineSmartToy, MdDns, MdTerminal, MdOutlineWorkOutline,
  MdOutlineCode, MdOutlineEditNote, MdOutlineViewKanban,
  MdOutlineAssignmentTurnedIn, MdOutlineComputer, MdOutlineAutoAwesome,
  MdOutlineAssignment, MdOutlineCalculate, MdOutlineGroups, 
  MdOutlinePublic, MdOutlineFactCheck, MdOutlineDescription,
  MdOutlineSettingsInputAntenna, MdOutlineSettingsSuggest, 
  MdOutlineMemory, MdOutlineConstruction, MdOutlinePrecisionManufacturing
} from 'react-icons/md';

import { FaApple, FaWindows, FaLinux, FaVolumeUp, FaFileAlt } from 'react-icons/fa';
import { MdCloudQueue } from 'react-icons/md';

// 1. Development
export const devSkills = [
  { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
  { icon: MdOutlineCode, name: 'CSS', color: '#1572B6' }, // Stable substitute
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'ReactJS', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'NextJS', color: '#000000' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiSass, name: 'Sass', color: '#CC6699' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  { icon: MdCloudQueue, name: 'AWS', color: '#FF9900' },
  { icon: SiVercel, name: 'Vercel', color: '#000000' },
  { icon: SiWpengine, name: 'WP Engine', color: '#40BBBD' },
  { icon: SiDigitalocean, name: 'DigitalOcean', color: '#0080FF' },
  { icon: SiPantheon, name: 'Pantheon', color: '#EFD01B' },
  { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { icon: SiJquery, name: 'jQuery', color: '#0769AD' },
  { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiProgress, name: 'Sitefinity', color: '#5CE500' },
  { icon: SiShopify, name: 'Shopify', color: '#7AB55C' },
  { icon: SiGreensock, name: 'GSAP', color: '#88CE02' }
];

// 2. Design
export const designSkills = [
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: MdOutlineColorLens, name: 'Adobe Suite', color: '#DA1F26' },
  { icon: MdOutlineAutoFixHigh, name: 'Sketch', color: '#F7B500' },
  { icon: MdOutlineLayers, name: 'UX Design', color: '#6366F1' },
  { icon: MdOutlineViewQuilt, name: 'UI Design', color: '#EC4899' },
  { icon: MdOutlineGridOn, name: 'Wireframing', color: '#8B5CF6' },
  { icon: MdOutlineArchitecture, name: 'Solutions Arch', color: '#F59E0B' },
  { icon: MdOutlineAccountTree, name: 'Info Arch', color: '#10B981' },
  { icon: MdDevices, name: 'Responsive', color: '#3B82F6' },
  { icon: MdOutlineBrush, name: 'Production', color: '#14B8A6' },
  { icon: SiFramer, name: 'Website Const', color: '#0055FF' },
  { icon: MdOutlineArticle, name: 'Content Strategy', color: '#64748B' }
];

// 3. Marketing
export const marketingSkills = [
  { icon: SiHubspot, name: 'HubSpot', color: '#FF7A59' },
  { icon: SiGoogleanalytics, name: 'GA4', color: '#E37400' },
  { icon: SiGoogleads, name: 'Google Ads', color: '#4285F4' },
  { icon: SiMeta, name: 'Meta Ads', color: '#0668E1' },
  { icon: SiPosthog, name: 'PostHog', color: '#000000' },
  { icon: FaFileAlt, name: 'Content Strategy', color: '#DB2777' },
  { icon: MdOutlinePublic, name: 'Global Strategy', color: '#6366F1' },
  { icon: MdOutlineArticle, name: 'Lead Capture', color: '#10B981' },
  { icon: MdOutlineDescription, name: 'Content Scoring', color: '#F59E0B' },
  { icon: MdDevices, name: 'Landing Pages', color: '#3B82F6' }
];

// 4. Software
export const softwareSkills = [
  { icon: MdOutlineAutoAwesome, name: 'Gemini AI', color: '#4285F4' },
  { icon: MdOutlineSmartToy, name: 'Claude AI', color: '#D97757' },
  { icon: MdOutlineCode, name: 'VS Code', color: '#007ACC' },
  { icon: SiSublimetext, name: 'Sublime', color: '#FF9800' },
  { icon: MdOutlineWorkOutline, name: 'MS Office', color: '#D83B01' },
  { icon: SiTrello, name: 'Trello', color: '#0079BF' },
  { icon: SiJira, name: 'Jira', color: '#0052CC' },
  { icon: SiAsana, name: 'Asana', color: '#F06595' },
  { icon: MdDns, name: 'Web Servers', color: '#475569' },
  { icon: FaApple, name: 'macOS', color: '#555555' },
  { icon: FaWindows, name: 'Windows', color: '#0078D6' },
  { icon: FaLinux, name: 'Linux', color: '#FCC624' }
];

// 5. Other
export const otherSkills = [
  { icon: MdOutlineAssignment, name: 'Project Mgmt', color: '#0F172A' },
  { icon: MdOutlineCalculate, name: 'Scoping', color: '#2563EB' },
  { icon: MdOutlineGroups, name: 'Team Mgmt', color: '#7C3AED' },
  { icon: MdOutlinePublic, name: 'Offshore Mgmt', color: '#0891B2' },
  { icon: MdOutlineFactCheck, name: 'Requirements', color: '#059669' },
  { icon: MdOutlineDescription, name: 'QA & Docs', color: '#4B5563' },
  { icon: MdOutlineSettingsInputAntenna, name: 'Telecom', color: '#EA580C' },
  { icon: FaVolumeUp, name: 'Audio/Video', color: '#9333EA' },
  { icon: MdOutlineMemory, name: 'Microcontrollers', color: '#DC2626' },
  { icon: MdOutlinePrecisionManufacturing, name: 'Electronics', color: '#64748B' },
  { icon: MdOutlineConstruction, name: 'Soldering', color: '#D97706' },
  { icon: MdOutlineSettingsSuggest, name: 'Process Training', color: '#4F46E5' }
];