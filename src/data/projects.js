export const projects = [
{
  id: "orderful",
  title: "Orderful",
  category: "From Infrastructure Debt to Data-Driven Growth",
  featuredImage: "./src/projects/orderful-after.png",
  gallery: [
    {
      image: "../src/projects/orderful-after.png",
      caption: "The result of a cleaned up and redesigned homepage"
    },
    {
      image: "../src/projects/orderful-before.png",
      caption: "The homepage error message before I was brought in to cleanup the site"
    },
    {
      image: "../src/projects/orderful-landingpage.png",
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
    id: 'onsolve',
    title: 'OnSolve',
    category: 'Enterprise / Next.js',
    image: '/images/projects/onsolve-sq.jpg',
    description: 'Lead developer for the full site migration to a modern headless architecture...',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://onsolve.com'
  },
    {
    id: 'viacom',
    title: 'Viacom',
    category: 'Enterprise / Next.js',
    image: '/images/projects/onsolve-sq.jpg',
    description: 'Lead developer for the full site migration to a modern headless architecture...',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://onsolve.com'
  },
];