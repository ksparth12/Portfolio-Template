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
    title: "ThinkForge",
    description:
      "Discover AI-powered project ideas tailored for skill development, hackathons, and resume building. Transform your learning journey with personalized, innovative concepts.",
    subDescription: [
      "Built with Next.js and React for a modern, responsive user interface",
      "Integrated AI algorithms to generate personalized project suggestions based on user preferences",
      "Implemented user analytics to track learning progress and project completion rates",
      "Designed with purple gradient theme and modern UI/UX principles",
    ],
    href: "https://github.com/ksparth12/ThinkForge",
    logo: "",
    image: "/assets/projects/ThinkForge.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "TypeScript", path: "/ts.svg" },
    ],
  },
  {
    id: 2,
    title: "DSA Hub",
    description:
      "Interactive platform to visualize, learn & practice Data Structures & Algorithms with interactive visualizations and practice problems to master DSA concepts with ease.",
    subDescription: [
      "Developed interactive algorithm visualizations with animated sorting and searching demonstrations",
      "Created comprehensive practice problem sets with difficulty levels and detailed solutions",
      "Built a modern code playground for testing and running algorithms in real-time",
      "Implemented progress tracking system to monitor learning advancement",
    ],
    href: "https://github.com/ksparth12/DSA-HUB",
    logo: "",
    image: "/assets/projects/DsaHub.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
    ],
  },
  {
    id: 3,
    title: "SnapURL",
    description:
      "Transform long URLs into powerful links. Create branded, memorable links in seconds. Track performance, generate QR codes, and elevate your digital presence with our modern link shortening platform.",
    subDescription: [
      "Developed a full-stack URL shortening service with custom domain support",
      "Implemented detailed analytics and performance tracking for shortened links",
      "Added QR code generation feature for easy sharing and mobile accessibility",
      "Built with modern green-themed UI and instant link generation capabilities",
    ],
    href: "https://github.com/ksparth12/SnapURL-2",
    logo: "",
    image: "/assets/projects/snapUrl.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];
