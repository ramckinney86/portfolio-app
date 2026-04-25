export const projects = [
{
  id: "orderful",
  title: "Orderful",
  category: "From Infrastructure Debt to Data-Driven Growth",
  featuredImage: "/projects/orderful-after.png",
  gallery: [
    {
      image: "/projects/orderful-after.png",
      caption: "The result of a cleaned up and redesigned homepage"
    },
    {
      image: "/projects/orderful-before.png",
      caption: "The homepage error message before I was brought in to cleanup the site"
    },
    {
      image: "/projects/orderful-landingpage.png",
      caption: "A customized landing page that was not possible when I started the project"
    },
  ],
  description: "When I joined the Orderful project, the digital presence was at a critical impasse. I deconstructed the technical debt, unified the CMS architecture, and transformed the site into a high-performance lead generation engine.",
  tech: ["Headless CMS", "React/Next.js", "PostHog", "Google Analytics"],
  metrics: [
    { label: "Lighthouse Score", value: "+45%" },
    { label: "Demo Requests", value: "+32%" },
    { label: "TTI", value: "< 1s" },
    { label: "Deploy Time", value: "Hours vs Weeks" }
  ],
  contentSections: [
    {
      title: "The Mission",
      text: "The objective was to deconstruct the technical debt, unify the CMS architecture, and transform the site from a liability into a high-performance lead generation engine."
    },
    {
      title: "Infrastructure & Engineering",
      text: "Working alongside another developer, we stabilized the core codebase, eliminating critical errors and migrating the entire site to a single, unified CMS. We overhauled the deployment pipeline to prioritize stability and speed, implementing a modern CI/CD workflow that reduced deployment friction and allowed for rapid, daily iterations."
    },
    {
      title: "Performance & Integration",
      text: "By cleaning up the tech stack and optimizing asset delivery, we achieved significant performance gains. We engineered a robust tracking architecture for Google Ads and Meta Ads, ensuring 1:1 attribution and better ROI on marketing spend. Additionally, we integrated Google Analytics and PostHog to capture granular user behavior across the entire funnel."
    },
    {
      title: "Data-Driven Results",
      text: "With a functional site and the ability to deploy dynamic landing pages, we shifted to an A/B testing model. By letting user behavior dictate UX design, we saw immediate, measurable impact: a 32% increase in demo requests within the first quarter and a reduction in landing page turnaround time from weeks to hours."
    }
  
  ],
  specs: [
    { 
      label: "Stack", 
      value: "Headless CMS, React/Next.js, PostHog, Google Analytics" 
    },
    { 
      label: "Ads", 
      value: "Meta Pixel API, Google GTag, Server-Side Tracking" 
    },
    { 
      label: "Ops", 
      value: "GitHub Actions, Vercel/Netlify CI/CD, Deployment Pipeline" 
    }
  ]
},
{
  id: "onsolve",
  title: "OnSolve",
  category: "Enterprise Rebrand & Global Domain Consolidation",
  featuredImage: "/projects/onsolve.png",
  gallery: [
    {
      image: "/projects/onsolve.png",
      caption: "The unified global domain architecture following the successful brand merger."
    },
    // {
    //   image: "/projects/onsolve-ux.png",
    //   caption: "Collaborating with design teams to ensure high-fidelity brand transitions."
    // },
    // {
    //   image: "/projects/onsolve-personalization.png",
    //   caption: "Implementing content scoring to feed customized user paths via Optimizely."
    // },
  ],
  description: "Brought on to the marketing team to lead a full redesign, rebrand, and rebuild of multiple enterprise websites. I consolidated fragmented brand identities into a single, high-performance global domain.",
  tech: ["CMS", "Optimizely", "Pantheon", "Git/CI-CD"],
  metrics: [
    { label: "Page Performance", value: "+52%" },
    { label: "Demand Gen", value: "+28%" },
    { label: "Deployment Speed", value: "3x Faster" },
    { label: "Team Efficiency", value: "+40%" }
  ],
  contentSections: [
    {
      title: "The Mission",
      text: "The objective was to lead a comprehensive redesign and rebrand of multiple brand websites, streamlining fragmented web properties into a unified lead-generation engine that served the global marketing strategy."
    },
    {
      title: "Engineering & Design Synergy",
      text: "I worked hand-in-hand with internal design teams and an outside agency to translate complex rebranding requirements into a seamless user experience. By acting as the bridge between creative vision and technical execution, we ensured a high-fidelity launch that preserved individual brand identities within a consolidated domain."
    },
    {
      title: "Data-Driven Personalization",
      text: "To improve user engagement, I implemented advanced content scoring mechanisms integrated with Optimizely. This allowed us to serve customized content paths to users based on their behavior and intent, significantly increasing the quality of demand generation leads across the platform."
    },
    {
      title: "Operational Excellence",
      text: "I revolutionized internal workflows by establishing a process of continuous integration and delivery (CI/CD). By utilizing Git for version control and migrating to Pantheon for hosting, we streamlined the deployment pipeline, reducing friction for the marketing operations team and allowing for constant, stable improvements to our web presence."
    }
  ],
  specs: [
    { 
      label: "Architecture", 
      value: "Global Domain Merger, Enterprise CMS, Multisite Management" 
    },
    { 
      label: "CRO & Data", 
      value: "Optimizely Personalization, Content Scoring, Custom Analytics" 
    },
    { 
      label: "DevOps", 
      value: "Git, Pantheon Hosting, CI/CD Pipeline, Workflow Training" 
    }
  ]
},
  {
  id: "viacom",
  title: "Viacom",
  category: "Internal Agency Leadership & Interactive Executive Media",
  featuredImage: "/projects/EarningsCal-cover.jpg",
  gallery: [
    {
      image: "/projects/Catalyst-Home-After.jpg",
      caption: "The Catalyst internal agency portal, designed for minimal friction and maximum visual impact."
    },
    {
      image: "/projects/Catalyst-Home-Before.jpg",
      caption: "Interactive earnings call timeline featuring custom filtering and channel-specific color logic."
    },
    {
      image: "/projects/EarningsCal-cover.jpg",
      caption: "A ground-up rebuild of the Viacommunity platform, modernizing UX and information architecture."
    },
    {
      image: "/projects/EarningsCal-panel.jpg",
      caption: "A ground-up rebuild of the Viacommunity platform, modernizing UX and information architecture."
    },
    {
      image: "/projects/Viacommunity-Home-After.jpg",
      caption: "A ground-up rebuild of the Viacommunity platform, modernizing UX and information architecture."
    },
    {
      image: "/projects/Viacommunity-Home-Before.png",
      caption: "A ground-up rebuild of the Viacommunity platform, modernizing UX and information architecture."
    },
  ],
  description: "Senior Developer within the Catalyst internal agency, delivering high-stakes digital products for global brands. Managed cross-functional teams and external agencies to build interactive media for the CEO and Board of Directors.",
  tech: ["JavaScript", "Timeline.js", "Information Architecture", "Agency Management"],
  metrics: [
    { label: "Site Traffic", value: "+65%" },
    { label: "Team Efficiency", value: "+45%" },
    { label: "Mentorship", value: "5 Interns" },
    { label: "Stakeholders", value: "CEO & SVPs" }
  ],
  contentSections: [
    {
      title: "The Mission",
      text: "Operating within the Catalyst department—Viacom’s internal agency—the objective was to showcase high-impact work to facilitate internal partnerships. This required a minimal, high-performance approach to design and engineering that prioritized speed and visual storytelling."
    },
    {
      title: "Executive Interactive Media",
      text: "I led the development of a custom interactive timeline for quarterly earnings calls between CEO Bob Bakish and the Board of Directors. Utilizing the timeline.js framework, we engineered features for filtering show data and color-coding channels, creating a vital tool for presenting upcoming programming content to corporate stakeholders."
    },
    {
      title: "Cross-Functional Collaboration",
      text: "I worked as a core technical lead within a massive creative ecosystem, collaborating daily with designers, copywriters, creative leads, and SVPs. My role involved translating executive vision into functional products while managing external agencies and contract developers to ensure technical consistency across all outsourced initiatives."
    },
    {
      title: "UX & Community Impact",
      text: "For the Viacommunity outreach platform, I led a ground-up redesign of the information architecture and user experience. By simplifying content organization and optimizing assets, we transformed a legacy outreach site into a modern, functional hub that significantly improved community engagement and internal volunteering efforts."
    },
    {
      title: "Mentorship & Pipeline Growth",
      text: "Beyond individual development, I managed the department’s internship pipeline, providing technical mentorship and workflow guidance. By establishing rigorous code review standards and modern development practices, I successfully mentored five interns into full-time technical roles while increasing overall team efficiency by 45%."
    }
  ],
  specs: [
    { 
      label: "Stakeholders", 
      value: "Viacom CEO, Board of Directors, Creative SVPs" 
    },
    { 
      label: "Management", 
      value: "Agency Oversight, Contract Devs, Internship Mentorship" 
    },
    { 
      label: "UX/UI", 
      value: "Information Architecture, Timeline.js, Interactive Data Visualization" 
    }
  ]
},
{
  id: "phantomEye",
  title: "The Phantom Eye",
  category: "Creative Direction & Full-Stack Artist Platform",
  featuredImage: "/projects/phantomeye-bandcamp.png",
  gallery: [
    {
      image: "/projects/phantomeye-home.png",
      caption: "A high-impact, custom-designed landing page optimized for artist branding."
    },
    {
      image: "/projects/phantomeye-contact.png",
      caption: "Custom-styled Bandcamp integration to drive direct-to-fan merchandise sales."
    },
    {
      image: "/projects/phantomeye-bandcamp.png",
      caption: "Dynamic live dates and press kit integration for talent buyers and fans."
    },
  ],
  description: "Designed and engineered a comprehensive digital portfolio for the band from the ground up. This project involved creating a centralized hub for press, live show management, and a seamless e-commerce experience for fans.",
  tech: ["React", "CSS Modules", "Bandcamp API", "YouTube Embed API"],
  metrics: [
    { label: "Merch Sales", value: "+40%" },
    { label: "Spotify Streams", value: "+25k" },
    { label: "YouTube Views", value: "+15k" },
    { label: "Booking Inquiries", value: "+50%" }
  ],
  contentSections: [
    {
      title: "The Mission",
      text: "The objective was to move the band away from fragmented social media profiles and into a professional, centralized digital environment. I designed and built a site from scratch that functions as both a fan-facing experience and a professional press kit for industry scouts."
    },
    {
      title: "Full-Stack Feature Set",
      text: "I engineered a custom architecture to handle the specific needs of a touring artist. This included an automated live show schedule, high-fidelity music video embeds, and a dedicated press page designed to provide journalists and booking agents with instant access to high-resolution assets and bios."
    },
    {
      title: "Direct-to-Fan Commerce",
      text: "To maximize revenue, I custom-styled and integrated the band’s Bandcamp store directly into the site’s aesthetic. By creating a seamless transition between the portfolio and the storefront, we removed friction in the buying process, resulting in a 40% increase in direct merchandise and physical music sales."
    },
    {
      title: "Growth & Visibility",
      text: "Since the launch of the platform, the band has seen a significant uptick in digital engagement. By optimizing the site for search and social sharing, we drove over 25,000 new Spotify streams and 15,000 YouTube views. Most importantly, the professionalized presence led to a 50% increase in high-quality booking opportunities and festival inquiries."
    }
  ],
  specs: [
    { 
      label: "E-Commerce", 
      value: "Bandcamp Integration, Merch Styling, Conversion Optimization" 
    },
    { 
      label: "Media", 
      value: "Video Embed APIs, Photo Galleries, Digital Press Kit (DPK)" 
    },
    { 
      label: "Interactivity", 
      value: "Live Tour Tracking, Contact/Booking Logic, Responsive Design" 
    }
  ]
},
];