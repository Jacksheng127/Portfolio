import ACACert from "../assets/achievements/ACACert.png";
import UMH2024 from "../assets/achievements/umh2024.jpg";
import KitaHack2023 from "../assets/achievements/kitahack_2023.jpg";
import UMH2023 from "../assets/achievements/umh2023.jpg";
import Vitrox from "../assets/experience/vitrox.png";
import ytlDigitalBank from "../assets/experience/ytlDB.png";
import grab from "../assets/experience/grab.png";
import chatbot from "../assets/projects/chatbot.jpg";
import pregnancyApp from "../assets/projects/pregancy.png";
import medimate from "../assets/projects/medimate.png";
import amanahBlock from "../assets/projects/amanahBlock.png";
import KitaHack2025 from "../assets/achievements/KitaHack2025.png";
import UMH2025 from "../assets/achievements/UMH2025.png";
import financialApp from "../assets/projects/financian.png";
import kingdom from "../assets/projects/3king.jpeg";

export const HERO_CONTENT = `I am an engineering-driven software engineer focused on building scalable data platforms, reliable backend systems, and cloud-native infrastructure. 
                              My work sits at the intersection of Data Engineering, Backend Development, and AI systems, where I design and deliver production-ready solutions that are robust, observable, and efficient. I have hands-on experience developing high-performance APIs, distributed data pipelines, and resilient systems using modern cloud and DevOps practices.
                              I enjoy solving real-world problems through clean system design, automation, and strong engineering fundamentals—whether it’s optimizing data workflows, improving system reliability, or integrating AI/LLM capabilities into practical applications.
                              Driven by curiosity and continuous learning, I aim to build impactful systems that scale, perform, and create meaningful value in real-world environments.`;

export const ABOUT_TEXT = `I am a passionate tech enthusiast who loves crafting robust and scalable solutions using various tools, platforms, and frameworks. My journey in the tech world began with an innate curiosity about how systems work, which has evolved into a fulfilling career in which I constantly seek opportunities to learn and tackle new challenges.
                          During my professional journey, I worked as a Data Engineer Intern at YTL Digital Bank, where I developed and maintained data pipelines using Apache Airflow, Python, and Helm Chart. This role helped me strengthen my ability to process and manage large-scale data systems effectively.
                          Additionally, I served as a Software Engineer Intern at ViTrox Corporation Berhad, where I contributed to the development of X-ray system features using Java and C++. These experiences not only enhanced my technical capabilities but also honed my problem-solving skills and adaptability.
                          I thrive in collaborative environments where I can contribute to solving complex problems while delivering high-quality solutions. Beyond coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects that align with my interests. My commitment to continuous learning drives me to push boundaries and excel in my field.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - January 2025",
    image: grab,
    role: "Data Engineer Intern",
    company: "Grab",
    description: `1. Improved API performance and reliability by standardizing timestamp formatting across query engines and designing a simplified GetMetricSimpleV2 API to reduce query engine dependency.
    2. Refactored core metric services by splitting the monolithic QueryMetric API into GetMetricQuery and GetMetricValue, and enhancing the Metric Availability API with derived metrics support and a new latest-timestamp feature.
    3. Enhanced SDK and query capabilities by adding support for one-sided filter expressions and improving filter DSL toString() output for better debugging and usability.
    4. Contributed to AI/LLM tooling and automation through prompt engineering for metric documentation, evaluation using Langsmith, and developing a new Forecast Tool for the MCP ecosystem.
    5. Implementing Hystrix circuit breakers to strengthen system resilience and scalability by introducing safeguards at critical execution points to prevent database overload during high-traffic scenarios`,
    technologies: ["Python",  "Golang", "AWS", "Hystrix-Go", "Datadog", "Langsmith."],
  },
  {
    year: "July 2024 - October 2024",
    image: ytlDigitalBank,
    role: "Data Engineer Intern",
    company: "YTL Digital Bank",
    description: `1. Develop and maintain data pipelines using Apache Airflow, Python, and Helm Chart.
    2. Implement CI/CD pipelines for automated deployment of data pipelines.
    3. Design and develop data models and ELT processes using PostgreSQL, Apache Spark, and DBT.
    4. Deploy and manage data infrastructure on Alibaba Cloud using Docker, Kubernetes, and Terraform.`,
    technologies: ["Python", "Apache Airflow", "Helm Chart", "CI/CD", "Docker", "Kubernetes", "PostgreSQL", "Apache Spark", "Alibaba Cloud", "Power Automate", "Microsoft Azure", "Extract, Load, Transform (ELT)", "DBT", "Terraform"],
  },
  {
    year: "July 2023 - October 2023",
    image: Vitrox,
    role: "Software Engineer Intern",
    company: "ViTrox Corporation Berhad",
    description: `1. Unit testing by using JUnit and Google Test frameworks.
    2. Develop X-ray system features using Java and C++.
    3. Use localization.properties files to support multiple languages within the software application.
    4. Implement and utilize Gradle scripts to run unit tests written in C++ and generate results in HTML format.
    5. Design and develop the frontend interface for the machine using JavaFX.`,
    technologies: ["Java", "C++", "Git", "Gradle", "JavaFX"],
  },
];

export const PROJECTS = [
  {
    title: "Database Chatbot for Inventory Tracking",
    image: chatbot,
    description:
      "Utilized LLM (Large Language Model) integration with a vector database for conducting similarity searches, enabling real-time tracking of inventory stocks with features for adding and updating basic stock information, and facilitating inventory inquiries through chatbot interaction.",
    technologies: ["React", "Firestore", "Django", "Pinecone", "Gemini", "PaLM"],
    link: "https://github.com/AsynchronousNotAvailable/Kitahack2024"
  },
  {
    title: 'Medimate, AI-Powered Healthcare Assistant',
    image: medimate,
    description: 
      "MediMate is an AI-powered healthcare assistant that enhances medication adherence, chronic disease management, and mental well-being. Key features include a voice-activated glucose checker, 24/7 Conversational AI, AI Health Transcriber, and Smart MedScan for instant medication registration via image capture. It also supports financial aid automation, integrates with wearables for real-time monitoring, and uses gamification to boost user engagement.",
    technologies: ["React Native", "Expo Go", "Python", "Firebase", "Gemini AI", "Google STT", "ElevenLabs", "Google Vision API", "Google Fit API", "Google Maps API"],
    link: "https://github.com/szeyu/Medimate-v3"
  },
  {
    title: "AmanahBlock, Blockchain-Powered for Charity Organizations",
    image: amanahBlock,
    description: 
    "AmanahBlock is a decentralized platform that combines blockchain technology, AI, and Shariah-compliant financial practices to transform the charitable giving ecosystem. Designed for transparency, inclusiveness, and impact, AmanahBlock addresses major inefficiencies and trust issues prevalent in traditional donation systems.",
    technologies: ["React", "Metamask", "Privy integration", "OpenAI", "Gemini", "BigChainDB", "IPFS (Pinata)", "Solidity on Ethereum", "OpenStreetMap API", "HAQQ & Firoza Finance"],
    link: "https://github.com/szeyu/AmanahBlock"
  },
  {
    title: "Pregnancy Care App",
    image: pregnancyApp,
    description:
      "Develop a Pregnancy Care App that provides basic information about the formation of a fetus, together with recommendations of the meals and nutrients required by pregnant women and track the pregnant women's pregnancy cycle.",
    technologies: ["Flutter", "Dart", "Python", "Flask", "Machine Learning"],
    link: "https://github.com/yiwan-21/umh23-pregnancy"
  },
  
];

export const ACHEIVEMENTS = [
  {
    title: "Alibaba Cloud Certified Associate (ACA)",
    image: ACACert,
    description:
      "Certification in cloud computing fundamentals, covering topics like cloud architecture, security, and deployment.",
  },
  {
    title: "UM Hackathon 2024 Director",
    image: UMH2024,
    description:
      "Conducted a National hackathon event with over 200 participants from more then 15 universities across Malaysia, focusing on developing innovative solutions for real-world problems with the implementation of machine learning and data science.",
  },
  {
    title: "KitaHack 2025 1st Runner-Up",
    image: KitaHack2025,
    description:
      "Created a Mobile App called MediMate is an AI-powered healthcare assistant that improves medication adherence, chronic disease management, and mental wellness through conversational AI, voice-enabled monitoring, smart medication scanning, wearable integration, and automated health support workflows.",
  },
  {
    title: "UM Hackathon 2025 1st Runner-Up",
    image: UMH2025,
    description:
      "Create an Application calledAmanahBlock is a decentralized charity platform that leverages blockchain, AI, and Shariah-compliant finance principles to enable transparent, secure, and trustworthy charitable giving",
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
