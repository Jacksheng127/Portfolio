import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import ACACert from "../assets/achievements/ACACert.png";
import UMH2024 from "../assets/achievements/umh2024.jpg";
import KitaHack2023 from "../assets/achievements/kitahack_2023.jpg";
import UMH2023 from "../assets/achievements/umh2023.jpg";
import Vitrox from "../assets/experience/vitrox.png";
import ytlDigitalBank from "../assets/experience/ytlDB.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - October 2024",
    image: ytlDigitalBank,
    role: "Data Engineer Intern",
    company: "YTL Digital Bank",
    description: `Develop and maintain data pipelines using Apache Airflow, Python, and Helm Chart.
    Implement CI/CD pipelines for automated deployment of data pipelines.
    Design and develop data models and ETL processes using PostgreSQL, Apache Spark, and DBT.
    Deploy and manage data infrastructure on Alibaba Cloud using Docker, Kubernetes, and Terraform.`,
    technologies: ["Python", "Apache Airflow", "Helm Chart", "CI/CD", "Docker", "Kubernetes", "PostgreSQL", "Apache Spark", "Alibaba Cloud", "Extract, Transform, Load (ETL)", "DBT", "Terraform"],
  },
  {
    year: "July 2023 - October 2023",
    image: Vitrox,
    role: "Software Engineer Intern",
    company: "ViTrox Corporation Berhad",
    description: `Unit testing by using JUnit and Google Test frameworks.
    Develop X-ray system features using Java and C++.
    Apply software architecture principles, focusing on designing system flows, and implementing necessary functions and classes.
    Use localization.properties files to support multiple languages within the software application.
    Implement and utilize Gradle scripts to run unit tests written in C++ and generate results in HTML format.
    Design and develop the frontend interface for the machine using JavaFX.`,
    technologies: ["Java", "C++", "Git", "Gradle", "JavaFX"],
  },
];

export const PROJECTS = [
  {
    title: "Water Conservation App",
    description:
      "Create a mobile application that help to monitor water usage and provide alerts for water wastage, also provide tips to save water.",
    technologies: ["FLutter", "Dart", "Firebase", "IOT"],
    video: "https://www.youtube.com/embed/AbaEc1z9oxY?si=mfJDYYoNGwNDYqSx"
  },
  {
    title: "Database Chatbot for Inventory Tracking",
    image: project2,
    description:
      "Utilized LLM (Large Language Model) integration with a vector database for conducting similarity searches, enabling real-time tracking of inventory stocks with features for adding and updating basic stock information, and facilitating inventory inquiries through chatbot interaction.",
    technologies: ["React", "Firestore", "Django", "Pinecone", "Gemini", "PaLM"],
  },
  {
    title: "Pregnancy Care App",
    image: project3,
    description:
      "Develop a Pregnancy Care App that provides basic information about the formation of a fetus, together with recommendations of the meals and nutrients required by pregnant women and track the pregnant women's pregnancy cycle.",
    technologies: ["Flutter", "Dart", "Python", "Flask", "Machine Learning"],
  },
  {
    title: "Three Kingdom: Red-Cliff Battle",
    image: project4,
    description:
      "A web gamification-based application. This game simulates the scenarios in Three Kingdoms: Red-Cliff Battle where the user will act as Sun Quan’s loyal minister to help Sun Quan to beat Cao Cao. Includes game features such as Forming Wu Kingdom’s Hierarchy, Borrowing Arrows with Straw Boats, Enemy Fortress Attack Simulation, Red Cliff on Fire, and  Engaging Cao Cao at Hua Rong Road. ",
    technologies: ["Java", "React", "Spring Boot"],
  },
  {
    title: "Financial Management App",
    image: project4,
    description:
      "Financial management app with investment insights, a reward system, data visualization and budgeting.",
    technologies: ["React Native", "ExpressJs", "Firebase"],
    video: "vhack"
  },
];

export const ACHEIVEMENTS = [
  {
    title: "Alibaba Cloud Certified Associate (ACA)",
    image: ACACert,
    description:
      "Certification in cloud computing fundamentals, covering topics like cloud architecture, security, and deployment.",
    technologies: ["Cloud Computing", "Alibaba Cloud"],
  },
  {
    title: "UM Hackathon 2024 Director",
    image: UMH2024,
    description:
      "Conducted a National hackathon event with over 200 participants from more then 15 universities across Malaysia, focusing on developing innovative solutions for real-world problems with the implementation of machine learning and data science.",
    technologies: ["Leadership", "Hackathon", "Machine Learning", "Data Science"],
  },
  {
    title: "KitaHack 2023",
    image: KitaHack2023,
    description:
      "Create a mobile application that help to monitor water usage and provide alerts for water wastage, also provide tips to save water.",
    technologies: ["Flutter", "Firebase", "IOT"],
  },
  {
    title: "UM Hackathon 2023 2nd Runner-Up",
    image: UMH2023,
    description:
      "Create a mobile application that help preganant woman to monitor their health and baby health.",
    technologies: ["Flutter", "SQLite", "Machine Learning", "Flask", "Python"],
  },
];

export const shortTermGoals = [
  "Learn how to build a full-stack website using React",
  "Completed learn a course in Data Engineering",
  "Paricipate in a EY Open Science AI and Data Challenge 2025 Hackathon",
];

export const longTermGoals = [
  "Become a experienced Senior Software Developer within 3 years after graduated",
  "Become a lead developer in a tech company within 5 years after graduated",
  "Provide solution / comments on stack overflow",
  "Contribute to open source projects",
];

export const CONTACT = {
  phoneNo: "+60 12 xxx xxxx",
  email: "limjacksheng127@gmail.com",
};
