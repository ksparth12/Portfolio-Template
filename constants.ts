import { Tag } from "./components/Project";

export interface MyProject {
  id: string | number;
  title: string;
  description: string;
  subDescription?: string[];
  href: string;
  logo?: string;
  image: string;
  tags: Tag[];
}

export const myProjects: MyProject[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Engineered a scalable e-commerce platform to handle product listings, user accounts, and secure transactions.",
    subDescription: [
      "Developed the back-end using Node.js and Express.js to manage data and a React.js front end for a dynamic user interface.",
      "Utilized MongoDB for efficient data storage and implemented secure user authentication with JWT (JSON Web Tokens).",
      "Designed a responsive and modern user interface, ensuring a consistent and intuitive experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ecomWeb.png",
    tags: [
      { id: 1, name: "React", path: "/assets/react.svg" },
      { id: 2, name: "MongoDb", path: "/assets/logos/mongodb.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "Developed a robust and secure user management system to handle user registration, login, and access control.",
    subDescription: [
      "Designed and built the back end with Node.js and Express.js to handle user data and API routes.",
      "Used React on the front end to create a seamless user interface for registration, login, and profile management.",
      "Implemented secure user authentication and JSON Web Tokens (JWT) for managing user sessions and protecting private routes.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Auth.png",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "AI-Powered Career Coach",
    description:
      "Developed an AI-powered platform that provides personalized career guidance and tailored advice to users based on their skills and career goals.",
    subDescription: [
      "Engineered a recommendation system that suggests relevant skills, job roles, and learning paths.",
      "Integrated with a database to store and manage career-related data, allowing for dynamic and data-driven advice.",
      "Designed a user-friendly interface to make the AI tool intuitive and accessible for all users.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/pathorix.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "snapURL",
    description:
      "Developed a full-stack web application that allows users to create short, memorable, and trackable links from long URLs.",
    subDescription: [
      "Engineered the back end to manage URL redirections efficiently and securely, including generating unique short codes.",
      "Implemented a database to store mappings between original and shortened URLs.",
      "Designed a user interface that is simple and intuitive, allowing users to shorten URLs with just a few clicks.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/snapUrl.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];
