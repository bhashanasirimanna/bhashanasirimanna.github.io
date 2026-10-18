export type Category = "AI & Enterprise" | "Web" | "Mobile";

export type ProjectSection = {
  heading: string;
  /** Plain bullet text, or a bolded label followed by text. */
  items: Array<string | { label: string; text: string }>;
};

export type Project = {
  name: string;
  /** Full title shown in the modal; falls back to `name`. */
  title?: string;
  period: string;
  category: Category;
  /** Short blurb for the card. */
  summary: string;
  /** Paragraphs shown at the top of the modal. */
  intro: string[];
  sections?: ProjectSection[];
  technologies: string[];
  /** File names inside /public/images/project. First one is the card cover. */
  images?: string[];
  /** Show the cover on a light background without cropping (logos). */
  logoCover?: boolean;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  paperUrl?: string;
};

export const projectImage = (file: string) => `/images/project/${file}`;

export const projects: Project[] = [
  {
    name: "BrineX",
    title: "BrineX: Integrated Climate-Intelligent Salt Production Ecosystem",
    period: "Jun 2025 – May 2026",
    category: "AI & Enterprise",
    featured: true,
    summary:
      "Final year research project with the Puttalam Salt Society: a four-module AI ecosystem moving Sri Lanka's solar salt industry to data-driven production planning.",
    intro: [
      "BrineX is a final year research project developed in partnership with the Puttalam Salt Society (PSS). The platform is a four module AI ecosystem deployed as cloud native containerized microservices, designed to transition Sri Lanka's solar salt industry from manual, experience based decision making to proactive, data driven production planning.",
      "My component: Crystal, the Crystallization Forecasting Engine.",
    ],
    sections: [
      {
        heading: "My Component: Crystal",
        items: [
          {
            label: "Predictive Architecture",
            text: "Engineered a dual input Bidirectional LSTM network that forecasts daily crystallization conditions over a 60-day horizon.",
          },
          {
            label: "Model Accuracy",
            text: "Achieved a test R² of 0.8175, trained on 1,095 daily records combining 8 pond crystallization parameters and 14 OpenWeatherMap features.",
          },
          {
            label: "Production Calibration",
            text: "Developed a causal Linear Regression model to convert daily LSTM outputs into monthly volume forecasts, achieving an R² of 0.9732 and a holdout R² of 0.9350, a significant improvement over the ARIMA baseline's R² of 0.4100.",
          },
          {
            label: "Microservice Deployment",
            text: "Serialised the trained model to ONNX format and served it through ONNX Runtime in a NestJS microservice, with zero failed requests across 3,112 stress test invocations and an 88.80ms average response time.",
          },
        ],
      },
      {
        heading: "Full System Highlights",
        items: [
          {
            label: "Crystal (Crystallization Forecasting)",
            text: "Dual input BiLSTM forecasting and Linear Regression production calibration.",
          },
          {
            label: "Compass (Intelligent Planning)",
            text: "Converts predictive forecasts, real time market data, and regulatory requirements into optimized operational strategies.",
          },
          {
            label: "Vision (Quality Control)",
            text: "Real time automated salt quality and impurity detection using a YOLOv8m computer vision architecture.",
          },
          {
            label: "Valor (Waste Valorization)",
            text: "Distributed federated learning infrastructure for privacy-preserving by-product reuse optimization across saltern sites.",
          },
        ],
      },
    ],
    technologies: ["BiLSTM", "ONNX Runtime", "NestJS", "YOLOv8", "Federated Learning", "Microservices"],
    images: ["brinex-logo.jpg"],
    logoCover: true,
    paperUrl: "#",
  },
  {
    name: "MontiParents",
    title: "MontiParents – NurseryConnect iOS, macOS & visionOS App",
    period: "Feb 2026 – May 2026",
    category: "Mobile",
    summary:
      "Multi-platform Parent/Guardian app for the NurseryConnect nursery management system, delivered for iOS, macOS and visionOS.",
    intro: [
      "Built a multi-platform mobile application for the Parent/Guardian role of NurseryConnect, a nursery management system, as part of SE4020 Mobile Application Design and Development at SLIIT.",
      "The project was developed across two assignments, delivering three platform targets.",
    ],
    sections: [
      {
        heading: "Platforms",
        items: [
          {
            label: "iOS (Assignment 01)",
            text: "Designed and built a SwiftUI iPhone app featuring a Daily Diary & Activity Monitoring dashboard and a Meal Recording & Dietary Management system. Implemented MVVM architecture, SwiftData for local persistence with cascade delete rules, and the @Observable macro for efficient state management. Built to comply with UK GDPR and FSA allergen guidelines.",
          },
          {
            label: "macOS (Assignment 02 — Part A)",
            text: "Extended the app to a native macOS target with a new Attendance & Pickup Tracking feature, Swift Charts for visual data representation, and native macOS features optimized for desktop use.",
          },
          {
            label: "visionOS (Assignment 02 — Part B)",
            text: "Built MontiVision, an immersive spatial computing prototype for Apple Vision Pro, with a multi-window spatial environment using RealityKit and visionOS-specific UI components.",
          },
        ],
      },
    ],
    technologies: ["SwiftUI", "SwiftData", "MVVM", "Swift Charts", "RealityKit", "visionOS"],
    images: [
      "montiparent-home-tab.jpeg",
      "montiparent-diary-tab.jpeg",
      "montiparent-meals-tab.jpeg",
      "montiparent-profile-tab.jpeg",
    ],
  },
  {
    name: "Booksphere",
    period: "Dec 2024 – Dec 2024",
    category: "Web",
    summary:
      "Full-stack MERN book review platform with RESTful APIs, dynamic rating calculations and advanced filtering.",
    intro: [
      "Developed as part of a technical evaluation for my software engineering internship at Coullax, Booksphere is a full-stack web application built using the MERN stack for comprehensive book review management. The platform features robust RESTful APIs to seamlessly handle user submissions alongside dynamic rating calculations and advanced filtering options.",
    ],
    sections: [
      {
        heading: "Key Features",
        items: [
          {
            label: "Full CRUD Functionality",
            text: "Browse, add, edit, and delete detailed book reviews containing titles, authors, comments, and individual ratings.",
          },
          {
            label: "Advanced Filtering & Ratings",
            text: "Dynamically calculate average ratings across books and filter the review feed by specific criteria or rating tiers.",
          },
          {
            label: "RESTful API Architecture",
            text: "Node.js and Express backend with structured endpoints to securely process frontend requests.",
          },
          {
            label: "NoSQL Data Management",
            text: "MongoDB stores and retrieves review documents with automated timestamping.",
          },
        ],
      },
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST API"],
    images: ["booksphere-landing.png", "booksphere-list.png", "booksphere-book-details.png"],
  },
  {
    name: "BusMateSL",
    period: "Jul 2024 – Oct 2024",
    category: "Mobile",
    summary:
      "React Native app modernizing public bus transit in Sri Lanka with live tracking, schedules and ETAs.",
    intro: [
      "BusMateSL is a React Native mobile application engineered to modernize public bus transit across Sri Lanka. By bringing essential technology to the heart of public transportation, the app empowers daily commuters with a smoother, more reliable travel experience by placing vital transit data directly at their fingertips.",
    ],
    sections: [
      {
        heading: "Key Features",
        items: [
          {
            label: "Real-Time Bus Tracking",
            text: "Integrates Mapbox for precise geolocation, allowing users to track active public buses live on the map.",
          },
          {
            label: "Live Schedules & ETAs",
            text: "Up to date bus schedules and accurate estimated arrival times to reduce wait times.",
          },
          {
            label: "Dynamic Route Mapping",
            text: "Clear, visual breakdowns of transit routes to help users navigate their journeys.",
          },
          {
            label: "Seamless Commuter Experience",
            text: "A user-centric interface that keeps vital transportation information accessible for everyday travelers.",
          },
        ],
      },
    ],
    technologies: ["React Native", "Mapbox", "Geolocation"],
    images: ["busmatesl-poster.jpg"],
  },
  {
    name: "Cinemania",
    period: "Jun 2024 – Oct 2024",
    category: "Web",
    summary:
      "Responsive Java web app for discovering the latest movies and TV series, backed by SQL and Apache Tomcat.",
    intro: [
      "Cinemania is a responsive Java web application designed to help users discover and explore the latest movies and television series. Built with a robust backend using Java, SQL, and Apache Tomcat, the platform provides a seamless and user friendly experience for browsing top-rated and newly released entertainment content.",
    ],
    sections: [
      {
        heading: "Key Features",
        items: [
          {
            label: "Content Discovery",
            text: "A curated catalog of the latest movies and trending TV shows directly from the home page.",
          },
          {
            label: "Detailed Listings",
            text: "Full descriptions, release dates, and ratings for each title.",
          },
          { label: "Advanced Search", text: "An intuitive, built-in search bar to locate specific media." },
          {
            label: "Responsive UI",
            text: "A smooth, cross-device experience for desktop and mobile using HTML and CSS.",
          },
        ],
      },
    ],
    technologies: ["Java", "SQL", "Apache Tomcat", "HTML", "CSS"],
    images: ["cinemania-landing.png", "cinemania-movie-list.png", "cinemania-logo.png"],
  },
  {
    name: "Clean Path",
    period: "Jun 2024 – Oct 2024",
    category: "Web",
    summary:
      "Smart waste management web app streamlining collection schedules, collectors and resident device requests.",
    intro: [
      "CleanPath is a smart waste management web application designed to streamline urban waste collection and promote sustainability. The platform empowers administrators to efficiently manage collection schedules, track waste collectors, and process resident requests for smart devices. Featuring a highly responsive and user-friendly interface, CleanPath bridges the gap between residents and city services to deliver a transparent, technology-driven solution for modern urban environments.",
    ],
    technologies: ["Web App", "Waste Management", "Admin Dashboard"],
    images: ["clean-path.jpg"],
  },
  {
    name: "My Friend",
    period: "May 2024 – Jun 2024",
    category: "Mobile",
    summary:
      "Multi-platform task management app for organizing daily routines, with responsive performance anywhere.",
    intro: [
      "\"My Friend\" is a versatile task management application designed to help users effortlessly organize their daily routines and projects. Built with a clean, user friendly interface, it allows users to quickly create, update, delete, and check off tasks.",
      "With multi platform support across desktop, tablet, and mobile, it ensures responsive performance anywhere. Whether planning a day or jotting down reminders, My Friend makes productivity and task tracking a seamless experience.",
    ],
    technologies: ["Task Management", "Cross-platform", "Responsive UI"],
    images: ["my-friend-flash.jpg", "my-friend-dashboard.jpg"],
  },
  {
    name: "Pinnacle",
    title: "Pinnacle – Game Streaming and Purchasing Platform",
    period: "Feb 2024 – Jun 2024",
    category: "Web",
    summary:
      "Game streaming and purchasing platform built by a team of 8 for the Information Technology Project module.",
    intro: [
      "Developed as part of the Information Technology Project (ITP) module in our year 2 semester 2 curriculum, with a team of 8 members. Our aim was a comprehensive website offering a wide range of entertainment options, tapping into the growing trend of online gaming and streaming services. Efficient management systems are crucial for handling the many aspects of such a platform, all geared towards a seamless user experience.",
    ],
    sections: [
      {
        heading: "Features",
        items: [
          { label: "Membership management", text: "User registration, login, and profile management." },
          {
            label: "Game management",
            text: "Cataloging and categorizing games available for streaming and purchase.",
          },
          { label: "Streaming management", text: "Seamless streaming of games for users." },
          { label: "Social engagement", text: "Social features to enhance user interaction." },
          {
            label: "Feedback management",
            text: "Gathering and analyzing user feedback to improve the platform.",
          },
          { label: "Shopping cart management", text: "Smooth handling of user purchases." },
          {
            label: "Payment management",
            text: "Secure payment processing for purchasing games or premium services.",
          },
          {
            label: "Leaderboard management",
            text: "Tracking and displaying user achievements and rankings.",
          },
        ],
      },
    ],
    technologies: ["Team of 8", "Streaming", "Payments", "Web App"],
    images: ["pinnacle-landing.png"],
  },
  {
    name: "Space Survivor",
    title: "Space Survivor Android Game",
    period: "Apr 2024 – May 2024",
    category: "Mobile",
    summary:
      "Action-packed native Android arcade game built with Kotlin: dodge and destroy enemy fleets to survive.",
    intro: [
      "Space Survivor is an action packed mobile arcade game where players navigate the vast expanse of space, dodging and destroying enemy fleets to survive as long as possible. Developed natively using Kotlin and Android Studio, the project focuses on delivering a responsive, high-performance mobile gaming experience with scalable game logic.",
    ],
    sections: [
      {
        heading: "Key Features",
        items: [
          {
            label: "Dynamic Combat & Navigation",
            text: "Intuitive touch controls to maneuver the spacecraft and use weapon systems against enemy targets.",
          },
          {
            label: "Progressive Difficulty Engine",
            text: "Enemy spawn rates, speed, and overall difficulty scale with the player's survival time.",
          },
          {
            label: "Persistent Score Tracking",
            text: "Local score management so players can track performance and beat their high scores.",
          },
          {
            label: "Optimized UI & Visuals",
            text: "Vibrant graphics and smooth animations tailored for rendering and battery performance on Android.",
          },
        ],
      },
    ],
    technologies: ["Kotlin", "Android Studio", "Game Logic Design", "Mobile Game Development"],
    images: ["space-survivor-before-start.jpg", "space-survivor-whil-play.jpg"],
  },
  {
    name: "UniBoard",
    period: "Mar 2024 – Apr 2024",
    category: "Mobile",
    summary:
      "Native Android app connecting students with landlord-provided boarding options near their campuses.",
    intro: [
      "UniBoard is a centralized mobile application designed to eliminate the stress of university accommodation hunting. By replacing inefficient traditional methods like classified ads and word of mouth with a streamlined digital platform, UniBoard seamlessly connects students with tailored, landlord provided boarding options near their campuses.",
      "Built natively using Java and the Android SDK, UniBoard replaces the chaos of student house-hunting with a user-centric design, empowering students to focus on their academic journey rather than their living arrangements.",
    ],
    sections: [
      {
        heading: "Key Features",
        items: [
          {
            label: "Intuitive Search Functionality",
            text: "Filter properties by location, rent range, and desired amenities.",
          },
          {
            label: "Detailed Property Listings",
            text: "High quality photos, comprehensive descriptions, and direct landlord contact details.",
          },
          {
            label: "Favorites Feature",
            text: "Save, manage, and compare preferred boarding options for future reference.",
          },
        ],
      },
    ],
    technologies: ["Java", "Android SDK"],
    images: ["uniboard-logo.png"],
    logoCover: true,
  },
  {
    name: "Real Time Flood Warning System",
    period: "Dec 2023 – Jan 2024",
    category: "AI & Enterprise",
    summary:
      "Real-time flood monitoring and alerting for the Mathara district, predicting flood conditions two days ahead.",
    intro: [
      "The Flood Monitoring System is designed to provide real-time monitoring and alerts for the Mathara district. It gathers data from various environmental sensors to monitor humidity, rainfall, water levels in lakes, and temperature. The system uses these inputs to predict potential flood conditions for the next two days and sends email warnings to registered users.",
    ],
    technologies: ["Environmental Sensors", "Flood Prediction", "Email Alerts"],
  },
  {
    name: "Pluss International Website",
    title: "Web Development for Pluss International (pvt) Ltd",
    period: "Jul 2023 – Sep 2023",
    category: "Web",
    summary: "Client website built as a first-year undergraduate side project.",
    intro: [
      "This side project was done as a first-year undergraduate. Developing the website for this client made me improve a lot and learn so many skills related to the field.",
    ],
    technologies: ["Web Development", "Client Project"],
  },
  {
    name: "Your Way",
    title: "Your Way – Car Rental System",
    period: "Jan 2023 – Mar 2023",
    category: "Web",
    summary:
      "Web-based car rental system connecting car owners, customers, and drivers.",
    intro: [
      "Your Way is a web-based car rental system that connects car owners, customers, and drivers, providing a seamless platform for renting vehicles and hiring drivers. Car owners can list their cars for rent, customers can book cars on an hourly basis, and drivers can offer their services through the system.",
    ],
    technologies: ["Web Development", "Booking System"],
  },
];
