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
  figma,
  docker,
  sejall,
  vijua,
  vegadata,
  financial,
  jobit,
  moviesflex,
  weather,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Mearn stack",
    icon: creator,
  },
  {
    title: "UI/UX",
    icon: backend,
  },
  {
    title: "word press",
    icon: mobile,
  },
];

const technologies = [
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Vijua",
    icon: vijua,
    iconBg: "#383E56",
    date: "APRIL 2022 - Present",
    points: [
      "Utilized industry-standard ebook creation tools (e.g., Figma , Calibre) to design and format ebooks for various platforms and devices.",
      "Architect and develop complex web applications with a focus on scalability, performance, and maintainability",
      "Developed and created engaging ebooks for diverse user demographics, ensuring high-quality content and visually appealing layouts.",
      "Develop responsive and mobile-first interfaces that provide seamless experiences across multiple devices and platforms",
      "Stay up-to-date with emerging technologies, industry trends, and best practices, and propose innovative solutions to enhance our technical capabilities.",
      "Collaborate closely with UX/UI designers to translate design concepts into functional, pixel-perfect user interfaces.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Vega Data",
    icon: vegadata,
    iconBg: "#E6DEDD",
    date: "OCT 2021 - APRIL 2022",
    points: [
      "Collaborate closely with data analysts and designers to create visually appealing and interactive data visualizations using HTML, CSS, and JavaScript.",
      "Develop and implement responsive and user-friendly web interfaces for data analysis tools and applications.",
      "Utilize front-end libraries and frameworks, to efficiently render complex data into dynamic and insightful visual representations.",
      "Optimize data visualizations for performance, ensuring fast loading times and smooth interactions",
      "Work closely with back-end developers to integrate front-end components with data processing and storage systems.",
      "Conduct thorough debugging of data visualizations across different devices and browsers to ensure cross-platform compatibility.",
      "Stay updated with the latest front-end development trends and technologies, and propose innovative solutions to improve data visualization capabilities.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Sejall technology 84",
    icon: sejall,
    iconBg: "#383E56",
    date: "APRIL 2021 - OCT 2021",
    points: [
      "Collaborate with the design team to translate visual concepts into functional user interfaces using HTML, CSS, and JavaScript.",
      "Develop responsive and mobile-friendly websites and web applications that provide seamless user experiences across various devices and platforms.",
      "Ensure cross-browser compatibility and optimize performance for fast loading speeds.",
      "Implement interactive features and animations to enhance user engagement and visual appeal.",
      "Conduct thorough debugging to identify and fix any front-end issues or bugs.",
      "Stay updated with the latest front-end development trends and technologies, and recommend innovative solutions to improve our digital products.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Hady has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
    name: "Ayman Abdelrahman",
    designation: "CEO",
    company: "Vijua",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "I highly recommend Hady for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Shehab",
    designation: "Senior Technical Talent Acquisition ",
    company: "Valu",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "It was my pleasure to work with Hady. He is a passionate , discipline, enthusiastic and great teammate. Hady displayed great talents in angular, typscript and React js. He is also good with troubleshooting. I am absolutely confident that Hady would be a great fit for frontend developer position!",
    name: "Hafsa Ahmed",
    designation: "Frontend Developer",
    company: "We Build Websites LLC",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

const projects = [
  {
    name: "Financial Dashboard",
    description:
      " a simplified version of full-stack Next.js applications the financial dashboard that has : A public home page. , A login page. , Dashboard pages that are protected by authentication. , The ability for users to add, edit, and delete invoices. The dashboard will also have an accompanying database a PostgreSQL ",
    tags: [
      {
        name: "Next TS",
        color: "blue-text-gradient",
      },
      {
        name: "data fetching",
        color: "green-text-gradient",
      },
      {
        name: "CRUD system",
        color: "pink-text-gradient",
      },{
        name: "a PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: financial,
    source_code_link: "https://github.com/Hady-7/Financial-dashboard",
  },
  {
    name: "Weather",
    description:
      "Simple App for Weather, your all-in-one weather companion that brings meteorological information to life. Whether you're planning your day, a weekend getaway, or a week-long adventure, WeatherSphere provides accurate and detailed weather forecasts to keep you informed and prepared.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },{
        name: "Weather API",
        color: "blue-text-gradient",
      },
      {
        name: "Data fetching",
        color: "pink-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Hady-7/weather",
  },
  {
    name: "CliniDo",
    description:
      "CliniDo a website to solve the problem that patients face in finding and booking an appointment with the appropriate medical authority, whether it is a doctor, hospital, radiology center or analysis laboratory, in addition to the possibility of saving all the medical history Techonlogy used in App : Angular TS and Firebase ",
    tags: [
      {
        name: "Angular TS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Symantic HTML5",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hady-7/CliniDo",
  },
  {
    name: "Moviesflex",
    description:
      "Simple Movies app to Enjoy a vast library of movies at your fingertips. Cinemate integrates with popular streaming services, allowing you to watch your favorite films trailer and it's rating without switching between multiple apps. and Stay ahead of the curve with information on upcoming movie releases. ",
    tags: [
      {
        name: "movies API",
        color: "blue-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
      {
        name: "Data fetching",
        color: "pink-text-gradient",
      },
    ],
    image: moviesflex,
    source_code_link: "https://github.com/Hady-7/Moviesflix",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
