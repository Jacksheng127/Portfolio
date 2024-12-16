import ACACert from "../assets/achievements/ACACert.png";
import UMH2024 from "../assets/achievements/umh2024.jpg";
import KitaHack2023 from "../assets/achievements/kitahack_2023.jpg";
import UMH2023 from "../assets/achievements/umh2023.jpg";
import Vitrox from "../assets/experience/vitrox.png";
import ytlDigitalBank from "../assets/experience/ytlDB.png";
import chatbot from "../assets/projects/chatbot.jpg";
import pregnancyApp from "../assets/projects/pregancy.png";
import financialApp from "../assets/projects/financian.png";
import kingdom from "../assets/projects/3king.jpeg";

export const HERO_CONTENT = `I am a passionate tech enthusiast with a strong aptitude for crafting robust and scalable solutions. My expertise spans a wide range of front-end technologies and back-end frameworks. Additionally, I am proficient in working with databases including SQL and NoSQL.
                            Beyond software development, I have gained some experience in cloud computing platforms, such as Alibaba Cloud, Microsoft Azure, and AWS, enabling me to build and deploy efficient cloud-based solutions.
                            My ultimate goal is to leverage this diverse skill set to create innovative, impactful solutions that drive business growth while delivering exceptional user experiences.
                            Throughout my journey, I have worked on several exciting projects, including a Database Chatbot for Inventory Tracking and a Financial Management App, showcasing my ability to solve complex problems through technology.`;

export const ABOUT_TEXT = `I am a passionate tech enthusiast who loves crafting robust and scalable solutions using various tools, platforms, and frameworks. My journey in the tech world began with an innate curiosity about how systems work, which has evolved into a fulfilling career in which I constantly seek opportunities to learn and tackle new challenges.
                          During my professional journey, I worked as a Data Engineer Intern at YTL Digital Bank, where I developed and maintained data pipelines using Apache Airflow, Python, and Helm Chart. This role helped me strengthen my ability to process and manage large-scale data systems effectively.
                          Additionally, I served as a Software Engineer Intern at ViTrox Corporation Berhad, where I contributed to the development of X-ray system features using Java and C++. These experiences not only enhanced my technical capabilities but also honed my problem-solving skills and adaptability.
                          I thrive in collaborative environments where I can contribute to solving complex problems while delivering high-quality solutions. Beyond coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects that align with my interests. My commitment to continuous learning drives me to push boundaries and excel in my field.`;

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
    video: "https://www.youtube.com/embed/AbaEc1z9oxY?si=mfJDYYoNGwNDYqSx",
    link: "https://github.com/Jacksheng127/Water-Conservation-App"
  },
  {
    title: "Database Chatbot for Inventory Tracking",
    image: chatbot,
    description:
      "Utilized LLM (Large Language Model) integration with a vector database for conducting similarity searches, enabling real-time tracking of inventory stocks with features for adding and updating basic stock information, and facilitating inventory inquiries through chatbot interaction.",
    technologies: ["React", "Firestore", "Django", "Pinecone", "Gemini", "PaLM"],
    link: "https://github.com/AsynchronousNotAvailable/Kitahack2024"
  },
  {
    title: "Pregnancy Care App",
    image: pregnancyApp,
    description:
      "Develop a Pregnancy Care App that provides basic information about the formation of a fetus, together with recommendations of the meals and nutrients required by pregnant women and track the pregnant women's pregnancy cycle.",
    technologies: ["Flutter", "Dart", "Python", "Flask", "Machine Learning"],
    link: "https://github.com/yiwan-21/umh23-pregnancy"
  },
  {
    title: "Three Kingdom: Red-Cliff Battle",
    image: kingdom,
    description:
      "A web gamification-based application. This game simulates the scenarios in Three Kingdoms: Red-Cliff Battle where the user will act as Sun Quan’s loyal minister to help Sun Quan to beat Cao Cao. Includes game features such as Forming Wu Kingdom’s Hierarchy, Borrowing Arrows with Straw Boats, Enemy Fortress Attack Simulation, Red Cliff on Fire, and  Engaging Cao Cao at Hua Rong Road. ",
    technologies: ["Java", "React", "Spring Boot"],
    link: "https://github.com/leechenwei/Three-Kingdom-Hosting"
  },
  {
    title: "Financial Management App",
    image: financialApp,
    description:
      "Financial management app with investment insights, a reward system, data visualization and budgeting.",
    technologies: ["React Native", "ExpressJs", "Firebase"],
    link: "https://github.com/SJWONG27/FinFreedom"
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
