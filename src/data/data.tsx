import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yi-Qing Lin's Website',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yi-Qing (Elliot) Lin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Davis, CA based <strong className="text-stone-100">Software Engineer</strong>, currently exploring opportunities <br></br>to contribute in areas of software development and UX Design.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Yi-Qing Lin.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! I'm Elliot, a CS Master student in UC Davis expecting to graduate in March 2025.
  I specialize in Software Development and User-Centric application design. I'm passionate about leveraging 
  technology to improve manual processes and create user-friendly applications. When I'm not programming, I 
  enjoy systematic trading, cryptography, and fashion. I'm keen to engage in projects that challenge me and expand my horizons.
  `,
  aboutItems: [
    {label: 'Location', text: 'Davis, CA', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Trading, Fashion', Icon: SparklesIcon},
    {label: 'Study', text: 'UC Davis', Icon: AcademicCapIcon},
    {label: 'Employment', text: '', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 5,
      },
    ],
  },
  {
    name: 'AI Agent Tools',
    skills: [
      {
        name: 'OpenAI API',
        level: 9,
      },
      {
        name: 'Ollama',
        level: 9,
      },
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'GCP',
        level: 7,
      },
      {
        name: 'Azure',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend Technologies',
    skills: [
      {
        name: 'Flask',
        level: 9,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'FastAPI',
        level: 7,
      },
      {
        name: 'NextJS',
        level: 6,
      },
    ],
  },
  {
    name: 'HPC development',
    skills: [
      {
        name: 'CUDA',
        level: 8,
      },
      {
        name: 'OpenMP',
        level: 7,
      },
      {
        name: 'MPI',
        level: 7,
      },
      {
        name: 'Threading',
        level: 6,
      },
    ],
  },
  {
    name: 'Database Management',
    skills: [
      {
        name: 'PostgreSQL',
        level: 6,
      },
      {
        name: 'MySQL',
        level: 5,
      },
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'Redis',
        level: 4,
      },
    ],
  },
  {
    name: 'Crypto',
    skills: [
      {
        name: 'Solidity',
        level: 3,
      },
      {
        name: 'Aiken',
        level: 3,
      },
      {
        name: 'Rust',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Knowledge Support Chatbot',
    description: 'Python-based user-centric AI chatbot integrating minimum domain knowledge to support new users in planning goals and performing tasks',
    url: 'https://github.com/Elliot0122/knowledge-support-chatbot',
    image: porfolioImage1,
  },
  {
    title: 'Fortran-precision-tuning',
    description: 'Tuning Fortran code precision with Loki to boost performance',
    url: 'https://github.com/Elliot0122/Fortran-precision-tuning-with-Loki',
    image: porfolioImage4,
  },
  {
    title: 'Single-2D-Image-to-3D-Model',
    description: 'Reconstruct 3D model from a single 2D image using primitive segmentation and 3D reconstruction',
    url: 'https://github.com/Elliot0122/Single-2D-Image-to-3D-Model',
    image: porfolioImage3,
  },
  {
    title: 'Daily Tech Job Update',
    description: 'Simply find job posting from tech companies without diving into the company website',
    url: 'elliot0122.github.io/Daily-Tech-Job-Update/',
    image: porfolioImage5,
  },
  {
    title: 'Three Point Bending Data Visualization',
    description: 'Data visualization tool for three point bending experiments',
    url: 'https://github.com/Elliot0122/Three-Point-Bending-Data-Visualization',
    image: porfolioImage2,
  },
  {
    title: 'Potential Crime Spots Visualization',
    description: 'Combination of crime data and event data to visualize potential crime spots',
    url: 'https://github.com/Elliot0122/PotentialCrimeAlert',
    image: porfolioImage6,
  },
  {
    title: 'Res-a-Me',
    description: 'Blockchain-based platform for users to share their resume and search for jobs',
    url: 'tobyyu007.github.io/resame/',
    image: porfolioImage7,
  },
  {
    title: 'GPU-Accelerated Cellular Automation',
    description: 'GPU-accelerated cellular automation for Conway\'s Game of Life',
    url: '',
    image: porfolioImage9,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep. 2022 - Mar. 2025',
    location: 'University of California, Davis',
    title: 'Master of Science in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'Sep. 2017 - Jul. 2021',
    location: 'National Tsing Hua University, Hsinchu, Taiwan',
    title: 'Bachelor of Science in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan. 2024 - Dec. 2024',
    location: 'Collaborative and Social Computing Lab',
    title: 'Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Jul. 2021 - Jun. 2022',
    location: 'Scientific Computing on Parallel Environment Lab',
    title: 'Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me using the links below or directly send a message!",
  items: [
    {
      type: ContactType.Email,
      text: 'legolas49494@gmail.com',
      href: 'mailto:legolas49494@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Davis, California',
      href: 'https://maps.app.goo.gl/2fVpFMySN3hGXgKX7',
    },
  
    {
      type: ContactType.Github,
      text: 'Elliot0122',
      href: 'https://github.com/Elliot0122',
    },
    {
      type: ContactType.Instagram,
      text: '@fangze_0122',
      href: 'https://www.instagram.com/fangze_0122',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Elliot0122'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yi-qing-lin/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/fangze_0122'},
];
