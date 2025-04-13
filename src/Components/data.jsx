import { FaPython } from "react-icons/fa";
import { attributions } from "./aboutMeIcons";

export const links = [
    "https://github.com/tianye-chen",
    "https://www.linkedin.com/in/tianyechen/",
    "mailto:tianyechen1@gmail.com",
];

export const broad_skills = [
  "Machine Learning",
  "Deep Learning",
  "Reinforcement Learning",
  "Data Science",
  "Web Development",
  "Software Engineering",
  "Game Design & Development",
];

export const prog_skills = [
  "Python",
  "PyTorch",
  "JavaScript",
  "React",
  "C Sharp",
  "Unity",
  "Java",
  "Firebase",
];

export const hobbies = [
  "Video Games",
  "Model Building",
  "Cooking",
  "Gym",
  "Gardening",
  "Hardware Tinkering",
  "Visiting New Places",
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "SUNY University at Buffalo",
    focusArea: "Artificial Intelligence",
    duration: "2023 - 2025",
    bg: "ub",
    courses: [
      "Introduction to Machine Learning",
      "Reinforcement Learning",
      "Introduction to Computer Vision",
      "Data Models and Query Language",
      "Data Intensive Computing",
      "Deep Learning",
    ],
    gpa: 3.6,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    university: "CUNY Brooklyn College",
    focusArea: "General Software Engineering",
    duration: "2019 - 2023",
    bg: "bc",
    courses: [
      "Data Structures",
      "Game Design and Development",
      "Analysis of Algorithms",
      "Large-Scale Web Applications",
      "Multimedia Computing",
      "Modern Programming Techniques",
    ],
    gpa: 3.7,
  },
];

export const experience = [
  {
    title: "Fellow",
    company: "CUNY Tech Prep",
    duration: "2022 - 2023",
    description:
      "Full-stack web development and professional development program",
    skills: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "Express",
      "PostgreSQL",
      "Git",
      "MVC",
      "Agile",
      "Scrum",
      "CI/CD",
    ],
  },
];

export const projects = [
  {
    title: "Portfolio Website v4 (This Website)",
    description: "A personal portfolio website showcasing myself.",
    year: "2025",
    attributes: ["Solo"],
    repo: "https://github.com/tianye-chen/portfolio4",
    demo: "https://tianye-chen.github.io/portfolio4/",
    tech: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "GSAP",
      "Vite",
      "MatterJS",
      "Web Development"
    ]
  },
  {
    title: "osu!Mania Deep Reinforcement Learning Model",
    description: "A trained Deep RL model to play the rhythm game osu!Mania with data inputs via computer vision",
    year: "2025",
    attributes: ["Team", "Member"],
    repo: "https://github.com/tianye-chen/Osu-mania-RL-agent",
    demo: "",
    tech: [
      "Python",
      "PyTorch",
      "Roboflow",
      "Deep Learning",
      "Reinforcement Learning",
      "Computer Vision",
    ]
  },
  {
    title: "CelebA Attributes Classifier",
    description: "A deep learning model hosted on Firebase that predicts facial features given an image of a face.",
    year: "2024",
    attributes: ["Solo"],
    repo: "https://github.com/tianye-chen/celeba-attributes-classifier",
    demo: "https://celeba-classifier.web.app/",
    tech: [
      "Python",
      "PyTorch",
      "Convolution Neural Networks",
      "Flask",
      "JavaScript",
      "React",
      "TailwindCSS",
      "Firebase"
    ]
  },
  {
    title: "Career Predictions using Machine Learning",
    description: "Using industry data and multiple machine learning models to predict career related attributes such as salary, similar jobs, experience level required, etc.",
    year: "2023",
    attributes: ["Team", "Member"],
    repo: "https://github.com/tianye-chen/career-ml-predictions",
    demo: "https://tianye-chen-career-ml-predictions-main-18c57t.streamlit.app/",
    tech: [
      "Python",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "Naive Bayes",
      "Decision Trees",
      "Logistic Regression",
      "K Nearest Neighbors",
      "Data Science",
      "Streamlit"
    ]
  },
  {
    title: "Project Aether",
    description: "A 2D rogue-like infinite dungeon crawler developed in Unity with procedurally generated levels and enemies.",
    year: "2023",
    attributes: ["Team", "Leader"],
    repo: "https://github.com/tianye-chen/ProjectAether",
    demo: "",
    tech: [
      "C#",
      "Unity",
      "Game Design",
      "Game Development",
      "Procedural Generation",
      "2D Graphics"
    ]
  },
  {
    title: "MusChart",
    description: "A fullstack web application that allows users to search, rate and review songs and supports user authentication.",
    year: "2023",
    attributes: ["Team", "Leader"],
    repo: "https://github.com/tianye-chen/music-app",
    demo: "https://muschart.fly.dev/",
    tech: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Git",
      "MVC",
      "Agile",
      "Scrum",
      "CI/CD",
      "Web Development",
    ]
  },
  {
    title: "Worldreaver",
    description: "A 2D bullet hell game developed in Unity with two intricate boss battles.",
    year: "2021",
    attributes: ["Solo"],
    repo: "https://github.com/tianye-chen/worldreaver-unity-game-project",
    demo: "https://tianyechen.itch.io/worldreaver",
    tech: [
      "C#",
      "Unity",
      "Game Design",
      "Game Development",
      "2D Graphics"
    ]
  }
]