export interface Milestone {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // YouTube link
  materials: { title: string; url: string }[];
  isProject?: boolean;
}

export interface RoadmapData {
  id: string;
  title: string;
  description: string;
  milestones: Milestone[];
}

export const roadmaps: RoadmapData[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Master React, Next.js, and modern CSS to build scalable user interfaces.',
    milestones: [
      {
        id: 'fe-1',
        title: 'Core React Fundamentals',
        description: 'Understand state, effects, context, and component lifecycle.',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk', // React tutorial placeholder
        materials: [
          { title: 'React Official Docs', url: 'https://react.dev/learn' },
          { title: 'Hooks Deep Dive', url: 'https://react.dev/reference/react' }
        ]
      },
      {
        id: 'fe-2',
        title: 'Next.js App Router',
        description: 'Learn server components, routing, and data fetching in Next 14+.',
        videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
        materials: [
          { title: 'Next.js Routing', url: 'https://nextjs.org/docs/app/building-your-application/routing' },
          { title: 'Data Fetching Patterns', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching' }
        ]
      },
      {
        id: 'fe-3',
        title: 'Advanced Styling & Animation',
        description: 'Build polished UIs using Tailwind CSS and Framer Motion.',
        videoUrl: 'https://www.youtube.com/watch?v=z8x7e2Xw-tY',
        materials: [
          { title: 'Framer Motion Guide', url: 'https://www.framer.com/motion/' },
          { title: 'Tailwind Best Practices', url: 'https://tailwindcss.com/docs' }
        ]
      },
      {
        id: 'fe-final',
        title: 'Capstone Project Validation',
        description: 'Submit your final full-stack e-commerce UI to validate your skills and earn your verified certificate.',
        materials: [
          { title: 'Project Requirements', url: '#' }
        ],
        isProject: true
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems & APIs',
    description: 'Build robust, secure APIs and understand database design with Node & PostgreSQL.',
    milestones: [
      {
        id: 'be-1',
        title: 'RESTful API Design',
        description: 'Design stateless APIs, handle routing, and structure Express apps.',
        videoUrl: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
        materials: [
          { title: 'REST Best Practices', url: 'https://restfulapi.net/' },
          { title: 'Express.js Routing', url: 'https://expressjs.com/en/guide/routing.html' }
        ]
      },
      {
        id: 'be-2',
        title: 'Database Modeling & Supabase',
        description: 'Schema design, relations, and Row Level Security.',
        videoUrl: 'https://www.youtube.com/watch?v=7uKQBl9uZ00',
        materials: [
          { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
          { title: 'Supabase RLS Guide', url: 'https://supabase.com/docs/guides/auth/row-level-security' }
        ]
      },
      {
        id: 'be-3',
        title: 'Authentication & Security',
        description: 'Secure your endpoints with JWT, OAuth, and middleware validation.',
        videoUrl: 'https://www.youtube.com/watch?v=mbsmsi7l3r4',
        materials: [
          { title: 'JWT Intro', url: 'https://jwt.io/introduction' },
          { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }
        ]
      },
      {
        id: 'be-final',
        title: 'Capstone Project Validation',
        description: 'Submit your final resilient API service to validate your skills and earn your verified certificate.',
        materials: [
          { title: 'Project Requirements', url: '#' }
        ],
        isProject: true
      }
    ]
  }
];
