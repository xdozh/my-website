import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  AUS,
  sabis,
  WebOOK, Google, Google_Skill, aus_big, ISC_Dubai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "President",
    company_name: "SABIS MUN Club",
    icon: sabis,
    iconBg: "#fff",
    date: "September 2020 - June 2022",
    points: [
      "Overlook the operations of the club",
      "Develop and maintain the quality of the club.",
      "Host conferences",
      "Give the Introductory Presentation",

    ],
  },
  {
    title: "Debater",
    company_name: "SABIS Debate Club",
    icon: sabis,
    iconBg: "#fff",
    date: "April 2020 - June 2022",
    points: [
      "Work it either teams of two or three to win weekly debates",
      "Adjudicate the debate",
      "Help the newly joined members",
    ],
  },
  {
    title: "Vice-President",
    company_name: "SABIS Coding Club,",
    icon: sabis,
    iconBg: "#fff",
    date: "February 2021 - June 2022",
    points: [
      "Tasked with managing and setting up meetings.",
      "Resourcing educational material.",
      "Guide new members & help them setup the required software.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "WebOOK",
    icon: WebOOK,
    iconBg: "#fff",
    date: "November 2019 - Present",
    points: [
      "Conducted surveys & prepared the presentation.",
      "Built mock website for final presentation.",
      " Presented the idea to the Director of ISCDXB.",
    ],
  },
  {
    title: "Resident Assistant",
    company_name: "American University of Sharjah",
    icon: AUS,
    iconBg: "#fff",
    date: "September 2023 - Present",
    points: [
      "Part of the Student Residential Life Department, ensuring everything is running smoothly.",
      "Led one of the biggest events organised by SLRD",
      "Incharge of 28 students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const education = [
  {
    name: "High School Diploma",
    description: "The International School of Choueifat",
    date: "September 2019 - June 2022",
    tags: [],
    image: ISC_Dubai,
    image2: sabis,
    source_code_link: "https://iscdubai.sabis.net/"
  },

  {
    name: "BSc Computer Science",
    description:
        "The American University of Sharjah",
    date: "September 2022 - Present",
    tags: [],
    image: aus_big,
    image2: AUS,
    source_code_link: "https://www.aus.edu/",
  },
  {
    name: "Fundamentals of Digital Marketing",
    description:
        "Google Skillshop-(Google Garage)",
    date: "December 2022 - January 2023",
    tags: [],
    image: Google_Skill,
    image2: Google,
    source_code_link: "https://www.aus.edu/",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
