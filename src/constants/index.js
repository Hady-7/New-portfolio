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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    icon: starbucks,
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
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "JAN 2022 - APRIL 2022",
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
    icon: shopify,
    iconBg: "#383E56",
    date: "AUG 2021 - JAN 2022",
    points: [
      "Collaborate with the design team to translate visual concepts into functional user interfaces using HTML, CSS, and JavaScript.",
      "Develop responsive and mobile-friendly websites and web applications that provide seamless user experiences across various devices and platforms.",
      "Ensure cross-browser compatibility and optimize performance for fast loading speeds.",
      "Implement interactive features and animations to enhance user engagement and visual appeal.",
      "Conduct thorough debugging to identify and fix any front-end issues or bugs.",
      "Stay updated with the latest front-end development trends and technologies, and recommend innovative solutions to improve our digital products.",
    ],
  },
  // {
  //   title: "Software Engineer Intern",
  //   company_name: "PredCo AI",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Apr 2023 - Present",
  //   points: [
  //   "Designed the framework of IOT sensor data integration to an end-to-end ML based analytics software.",
  //   "Created PRD and wireframes for the product, and developed the frontend using ReactJS.",
  //   "Developed Rest APIs, aligning with frontend flow.",
  //   "Integrated Elastic Search and Kibana Dashboards via dynamic APIs.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Priyansh has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
    name: "Khyati Bhatt",
    designation: "CEO",
    company: "Simply Body Talk",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "I highly recommend Priyansh for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Anup Robins",
    designation: "HR Business Partner",
    company: "Experian",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "This guy has what it takes for the first unicorn. Just wait and watch.",
    name: "Aman Sharma",
    designation: "CTO",
    company: "Dinnerfy",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

const projects = [
  {
    name: "Volt",
    description:
      "Volt is a comprehensive portfolio management software which offers a holistic solution for managing startup portfolios. Seamlessly manage your portfolio, track investments, and analyze performance all in one place with Volt's latest industry standards and best practices. Say goodbye to inefficiencies, embrace Volt!",
    tags: [
      {
        name: "web dev",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "software engineering",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/StarticField",
  },
  {
    name: "PredCo",
    description:
      "Web application that processes real-time data coming from IoT sensors installed in various industries. It serves as a powerful tool for Predictive Maintenance, enabling the detection of potential issues and triggering alerts. By optimizing scheduled maintenance activities, the application helps companies achieve significant cost savings.",
    tags: [
      {
        name: "internet of things",
        color: "blue-text-gradient",
      },
      {
        name: "elastic search",
        color: "green-text-gradient",
      },
      {
        name: "kibana",
        color: "pink-text-gradient",
      },
      {
        name: "aws-ec2",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PriyanshNegi/PredCo",
  },
  {
    name: "Prompt-X",
    description:
      "Prompt-X is an undergoing project designed to train language models and enhance prompt engineering. It will offer productivity analytics, personalized recommendations and insights for Chat GPT users. With its focus on training LLM models, Prompt-X is a powerful tool for optimizing workflows and advancing natural language understanding. ",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "web dev",
        color: "green-text-gradient",
      },
      {
        name: "prompt engineering",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PriyanshNegi/Prompt-X-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
