import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Oct 2024  ",
    role: "Web Development Internship",
    company: " Starshield- Smart Paints & Coatings",
    description: `This journey has been a fantastic learning experience, allowing me to strengthen my problem-solving abilities, teamwork, and leadership skills. A big thank you to my mentors and colleagues for their constant guidance and support throughout this journey. During this time, I had the opportunity to enhance my skills in JavaScript, HTML, CSS, and Shopify, while working on projects that involved creating engaging websites, optimizing page content for SEO, and crafting user-friendly web pages.`,
    technologies: ["Javascript", "CSS", "Shopify","Html"],
  },
];

export const PROJECTS = [
  {
    title: "RentUp Web App",
    image: project1,
    description:
      "A full-stack property rent up web app focusing on both frontend and backend functionality.",
    technologies: ["EJS", "JS", "NodeJS", "ExpressJS", "MongoDB"],
    link:"https://airbnb-replicate.onrender.com/listings"
  },
  {
    title: "Food Delivery Web App",
    image: project2,
    description:
      "This is a completely frontend-based application where I focused on improving my React skills, state management and UI design.",
    technologies: [ 'React.js', 'React Router', 'React Toastify','Netlify'],
    link:"https://food-delivery-rj.netlify.app/"

    
  },
  {
    title: "HeadPhone Web",
    image: project3,
    description:
      "Responsive landing page built with React and Tailwind CSS, focusing on clean design, layout structure, and reusable components.",
    technologies: ["React.js", "framer motion", "Netlify", "Tailwind"],
    link:"https://headphone-rj.netlify.app/"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
