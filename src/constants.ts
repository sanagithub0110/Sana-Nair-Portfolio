import { Project, Experience, DevInfo } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CodeChaos — Gamified DSA Learning Platform',
    description: 'A gamified DSA learning platform with real-time visualization and progress analytics to improve learning interactivity and retention. Built with Angular and Django.',
    tags: ['AngularJS', 'Django', 'MySQL', 'Docker'],
    github: '#'
  },
  {
    id: '2',
    title: 'Right-Click Smart Actions Extension',
    description: 'Chrome extension enabling users to copy blocked text, translate selections, and trigger instant searches via context menu. Bypasses restricted content using scripting APIs.',
    tags: ['Chrome Extensions', 'JavaScript', 'DOM APIs', 'Clipboard API'],
    github: 'https://github.com/sanagithub0110/Text-Extractor'
  },
  
  {
    id: '3',
    title: "Skill Gap Analyzer",
    description: "A web application that analyzes user skills and suggests personalized learning paths to bridge skill gaps based on industry requirements.",
    tags: ["React", "Python", "ML", "MongoDB"],
    github: "https://github.com/sanagithub0110/SkillGapAnalyzer",
}
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Web Development Internship',
    company: 'RD Infro Technology',
    period: 'Jan 2026 – Feb 2026',
    description: [
      'Developed a responsive internship landing page using HTML, CSS and ReactJS.',
      'Worked on MySQL integration for managing data.',
      'Implemented form handling, UI/UX improvements and version control using GitHub.'
    ]
  },
  {
    id: '2',
    role: 'Team Lead',
    company: 'RoboHawk',
    period: 'Aug 2025 – Present',
    description: [
      'Leading end-to-end planning and execution of a national level robotics event.',
      'Demonstrated strong leadership for a team of 50+ members and stakeholder coordination.',
      'Developed communication, decision-making and problem-solving skills through active management.'
    ]
  },
  {
    id: '3',
    role: 'Full Time Internship',
    company: 'KinnyRabbit',
    period: 'Oct 2024 – Dec 2024',
    description: [
      'Assisted in planning and executing projects, market research, and social media content.',
      'Supported client and partner outreach and analyzed marketing data.',
      'Managed online presence to boost engagement.'
    ]
  }
];

export const SKILLS = [
  { name: 'C++', level: 85 },
  { name: 'ReactJS / AngularJS', level: 90 },
  { name: 'Node.js / Express.js', level: 70 },
  { name: 'TailwindCSS / GSAP', level: 85 },
  { name: 'MySQL / MongoDB', level: 90 },
  { name: 'Python and Java', level: 75 },
  { name: 'Git / GitHub', level: 90 }
];

export const DEV_INFO: DevInfo = {
  name: 'Sana Santosh Nair',
  role: 'Computer Engineering Student & Web Developer',
  tagline: 'Computer Engineering student passionate about building scalable, user-focused solutions and solving real-world problems.',
  about: 'I am a Bachelor of Computer Engineering student at Pimpri Chinchwad College of Engineering and Research with a CGPA of 8.4. I have a strong foundation in web technologies and a passion for interactive design and problem solving.',
  location: 'Pune, Maharashtra',
  email: 'sanasantosh05@gmail.com',
  phone: '+91-8087666355',
  github: 'https://github.com/sanagithub0110',
  linkedin: 'https://linkedin.com/in/sananair/',
  leetcode: 'https://leetcode.com/u/FjHoH4xwTH/' 
};

export const ACHIEVEMENTS = [
  'NPTEL Enhancing Soft Skills and Personality – Elite Achievement | IIT Kanpur',
  'Poster Presentation – 1st Place | FESA PCCOE&R',
  'Kathak Certification - Madhyama Poorna (5th Level) | ABGVM',
  'Organized Self – Defense Workshop for Women | PCCOE&R',
  'International General Knowledge Olympiad – Second (2nd) Rank | SOF'
];

export const CERTIFICATIONS = [
  'Database Programming with SQL | Oracle (Nov 2025)',
  'OCI AI Foundations | Oracle (Oct 2025)',
  'Introduction to Mongo DB | Mongo DB University (June 2025)',
  'Data Analytics and Visualization | Deloitte Australia (June 2025)',
  'IOT Training (Traffic Light System and Smart Doorbell) | Infosys (Aug 2024)',
  'Front-End Development | Great Learning (June 2024)',
  'Cloud Computing Job Simulation | Verizon x Forage (June 2024)'
];
