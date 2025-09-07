export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Parth was exceptional. His technical expertise in the MERN stack and attention to detail helped us deliver our project ahead of schedule. The quality of code and user experience exceeded our expectations. Highly recommend for any full-stack development needs.",
    name: "Sarah Chen",
    title: "CTO at TechFlow Solutions",
  },
  {
    quote:
      "Parth transformed our outdated website into a modern, responsive platform. His deep understanding of React and Node.js, combined with his creative problem-solving skills, made the entire process smooth and efficient. Our user engagement increased by 40%.",
    name: "David Rodriguez",
    title: "Product Manager at InnovateLab",
  },
  {
    quote:
      "I was impressed by Parth's ability to understand complex requirements and translate them into elegant solutions. His expertise in MongoDB optimization and API design significantly improved our application's performance. A true professional.",
    name: "Emily Watson",
    title: "Founder & CEO at StartupVenture",
  },
  {
    quote:
      "Parth's full-stack development skills are outstanding. He delivered a scalable e-commerce platform that handles thousands of transactions daily. His code is clean, well-documented, and maintainable. We couldn't be happier with the results.",
    name: "Alex Thompson",
    title: "Technical Lead at RetailTech Corp",
  },
  {
    quote:
      "From concept to deployment, Parth demonstrated exceptional skills in both frontend and backend development. His ability to work with modern technologies like Next.js and create seamless user experiences is remarkable. A developer you can trust.",
    name: "Maria Gonzalez",
    title: "Digital Strategy Director at CreativeWorks",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Development Intern",
    desc: "Contributed to the full-stack development lifecycle of web applications, focusing on the seamless integration of MongoDB, Express.js, React.js, and Node.js to deliver robust, scalable solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer (Node.js & MongoDB)",
    desc: "Engineered and deployed a RESTful API using Node.js and Express.js, meticulously handling data models with MongoDB and Mongoose to ensure optimal performance and security.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Personal MERN Stack Project",
    desc: "Spearheaded the end-to-end development of a client-facing web application, leveraging the MERN stack to deliver a high-performance, responsive, and intuitive user experience from concept to production.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "React.js Developer",
    desc: "Developed and maintained dynamic, user-centric interfaces with React.js, meticulously architecting state management and API communication to interact flawlessly with Node.js/Express.js backends.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ksparth12",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ksparth12",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/ksparth12",
  },
];
