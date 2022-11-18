import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hacking.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'CV crisa97',
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hola,soy Cristhian, my aK es Crisa97.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Yo soy <strong className="text-stone-100">Analista de seguridad</strong>, actualmente trabajo en{' '}
        <strong className="text-stone-100">Coxti S.A.S</strong> ayudo en la parte de ciberseguridad en la organización,
        como lo es revisión de código estático, entre otras funciones.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Mi tiempo libre lo dedico a estudiar <strong className="text-stone-100">seguridad informática</strong>,
        resolviendo <strong className="text-stone-100">CTF (Capture The Flag)</strong>, en la plataforma de{' '}
        <strong className="text-stone-100">tryhackme</strong>.
      </p>
    </>
  ),
  actions: [
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
  description: `Soy estudiante de ingeniería de sistemas y telecomunicaciones apasionado por la ciberseguridad
  o seguridad informática en la parte de aplicaciones web.\nTambién cuento con una página web donde comparto 
  información sobre desarrollo de CTF en la plataforma de tryhackme donde me identifico con el alias de crisa97.`,
  aboutItems: [
    {label: 'Location', text: 'Manizales, Caldas', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Colombia', Icon: FlagIcon},
    {label: 'Interests', text: 'Hacking, programación y scripting', Icon: SparklesIcon},
    {label: 'Study', text: 'Universidad de Manizales', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Analista de seguridad', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Actualmente',
    location: 'Manizales, Caldas',
    title: 'Univercidad de Manizales',
    content: <p>ingeniería de sistemas y telecomunicaciones.</p>,
  },
  {
    date: 'Agosto 2022',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>Implementacion de framework de ciberseguridad nist.</p>,
  },
  {
    date: 'Julio 2021',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>OWASP ZAP From Scratch.</p>,
  },
  {
    date: 'Octubre 2021',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>OWASP TOP 10 Web 2021 + 2017.</p>,
  },
  {
    date: 'Octubre 2021',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>OWASP TOP 10 Mobile.</p>,
  },
  {
    date: 'Julio 2021',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>Penetration Testing with KALI and More.</p>,
  },
  {
    date: 'Septiembre 2020',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>Ciberseguridad en linea.</p>,
  },
  {
    date: 'Septiembre 2020',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>Ethical Hacking - SQL Injection Attack.</p>,
  },
  {
    date: 'Junio 2020',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>GNU/Linux: Da tus primeros pasos!! (Curso básico).</p>,
  },
  {
    date: 'Septiembre 2019',
    location: 'San Francisco, Estados Unidos',
    title: 'Udemy',
    content: <p>Curso de Servidores Linux en CENTOS para principiantes.</p>,
  },
  {
    date: 'Diciembre 2016',
    location: 'Manizales, Caldas',
    title: 'Sena',
    content: <p>Tecnico de sistemas.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Julio 2021 - Actualmente',
    location: 'CoxTI S.A.S',
    title: 'Analista de seguridad',
    content: (
      <p>
        Analisis de codigo estatigo, búsqueda de fallos de seguridad en aplicaciones web, capacitaciones sobre detección
        de phishing, auditoria a plataformas de terceros y mitigación de brechas de seguridad.
      </p>
    ),
  },
  {
    date: 'Diciembre 2021 - Julio 2021',
    location: 'Comdata Group',
    title: 'Asesor comercial',
    content: <p>Atención al cliente y vendedor de servicios de internet,</p>,
  },
  {
    date: 'Enero 2017 - Diciembre 2021',
    location: 'Independiente',
    title: 'Técnico en sistemas',
    content: <p>Mantenimiento preventivo, mantenimiento correctivo y soporte técnico.</p>,
  },
  {
    date: 'Julio 2017 - Diciembre 2017',
    location: 'Alcaldía de Manizales',
    title: 'Técnico en sistemas',
    content: <p>Mantenimiento preventivo, mantenimiento correctivo y soporte técnico.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/crisa.97/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/crisa97',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/crisa97'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/crisa97/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/crisa.97/'},
];
