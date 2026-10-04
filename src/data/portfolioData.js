/**
 * CENTRAL PORTFOLIO DATA CONFIGURATION
 * 
 * Configured for: Nitin Yadav
 * AI/ML Developer | Generative AI Specialist | Full-Stack Engineer
 */

export const portfolioData = {
  personal: {
    name: "Nitin Yadav",
    title: "AI/ML Developer | Generative AI Specialist | Full-Stack Engineer",
    tagline: "Building intelligent, data-driven applications with Machine Learning, Generative AI (RAG, Gemini), and modern web stacks.",
    shortBio: "Computer Science undergraduate at Delhi Skill and Entrepreneurship University (DSEU) and BS in Data Science student at IIT Madras. Experienced in building AI fact-checkers, RAG pipelines, GenAI recommendation systems, and full-stack web applications.",
    avatarUrl: "/mp.jpg", // Photo in public/mp.jpg
    location: "New Delhi, India",
    focusArea: "Generative AI (RAG / Gemini), Machine Learning & Full-Stack Development",
    currentGoal: "Seeking AI/ML & Full-Stack Developer Internships / Entry-Level Roles",
    resumePath: "/resume.pdf",
  },

  contact: {
    email: "nitinyadav174104@gmail.com",
    phone: "+91 8588067701",
    location: "New Delhi, India",
    linkedin: "https://www.linkedin.com/in/nitin-yadav-56315a319/",
    github: "https://github.com/23f2003203",
  },

  codingProfiles: {
    github: "https://github.com/23f2003203",
    linkedin: "https://www.linkedin.com/in/nitin-yadav-56315a319/",
    leetcode: "https://leetcode.com/u/hXgiDMLZrn/",
    gfg: "",
    hackerrank: "",
    kaggle: "",
  },

  about: {
    intro: "Computer Science undergraduate at Delhi Skill and Entrepreneurship University and BS in Data Science and Applications student at IIT Madras with hands-on experience in full-stack web development, REST APIs, backend engineering, and machine learning. Skilled in Python, Flask, Vue.js, SQL, JavaScript, and Git. Built AI-powered, data-driven applications using FastAPI, Gemini, Retrieval-Augmented Generation (RAG), Redis, and SQLite.",
    currentEducation: "BS in Data Science @ IIT Madras | B.Tech CSE @ DSEU",
    technicalInterests: [
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI & Gemini 1.5/2.5 API",
      "Full-Stack Web Architecture (Flask / FastAPI / Vue / Next.js)",
      "Exploratory Data Analysis & Machine Learning",
      "Vector Databases & Live Web Grounding"
    ],
    specializations: ["Generative AI & RAG", "Backend Engineering & REST APIs", "Machine Learning & Data Analysis"],
    careerInterests: ["AI/ML Software Engineer Intern", "Generative AI Developer", "Full-Stack Software Engineer"],
    location: "New Delhi, India",
  },

  skills: {
    programming: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
    aiMl: ["Machine Learning", "Deep Learning", "Exploratory Data Analysis (EDA)", "Feature Engineering", "Data Preprocessing", "Scikit-learn", "Pandas", "NumPy"],
    genAi: ["Generative AI", "Retrieval-Augmented Generation (RAG)", "Google Gemini 1.5 / 2.5", "Local Vector Databases", "Live Web Grounding", "Prompt Engineering"],
    webDev: ["FastAPI", "Flask", "Vue.js", "Next.js", "React", "Jinja2", "REST APIs", "Bootstrap", "HTML5", "CSS3"],
    databases: ["SQLite", "Redis", "SQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
  },

  projects: [
    {
      id: "truth-guard",
      name: "Truth Guard - AI Fact-Checking Platform",
      category: "Generative AI",
      description: "An AI-powered real-time fact-checking platform using Next.js, FastAPI, Google Gemini, Retrieval-Augmented Generation (RAG), local vector database, and live web grounding.",
      problem: "Online misinformation and unverified news articles spread rapidly without automated, zero-hallucination verification mechanisms.",
      solution: "Engineered an end-to-end RAG architecture pairing Google Gemini with local vector storage and live web search grounding to verify claim credibility with source citations.",
      features: [
        "Retrieval-Augmented Generation (RAG) Fact Verification",
        "Live Web Grounding with Real-Time News Retrieval",
        "Local Vector Database Chunk Indexing",
        "Interactive Next.js & FastAPI Frontend Dashboard"
      ],
      techStack: ["Next.js", "FastAPI", "Python", "Google Gemini API", "RAG", "Vector Database", "Web Grounding"],
      githubUrl: "https://github.com/TanayKumar-V2/TruthGuard",
      liveDemoUrl: "",
      isFeatured: true,
      caseStudy: {
        overview: "Truth Guard is an AI-driven platform built to combat online misinformation by verifying news statements against live grounded web content and vector database embeddings.",
        motivation: "Created to provide journalists, researchers, and everyday readers with instant, evidence-backed fact checking.",
        architectureFlow: "User Statement → Next.js UI → FastAPI Backend → Vector Database Lookup → Live Web Grounding Search → Gemini RAG Analysis → Verified Fact Report & Source Links",
        developmentProcess: "Designed the RAG retrieval pipeline in FastAPI, integrated Google Gemini 1.5 API with grounding parameters, set up local vector embeddings, and built a reactive Next.js dashboard.",
        challenges: [
          "Eliminating LLM hallucination when evaluating ambiguous news headlines.",
          "Minimizing API latency when combining web search grounding with vector lookup."
        ],
        howSolved: [
          "Enforced strict prompt boundaries requiring source attribution and factual confidence scores.",
          "Implemented asynchronous parallel fetching for vector storage and live search APIs."
        ],
        results: "Delivered accurate fact-checking reports with sub-2 second response times and verifiable web source citations."
      }
    },
    {
      id: "interview-ai",
      name: "Interview-AI - Personalized GenAI Interview Prep",
      category: "Generative AI",
      description: "Full-stack GenAI application that uses Google Gemini to analyze resumes and job descriptions, generating personalized interview reports, questions, skill-gap analysis, and preparation plans.",
      problem: "Job seekers struggle to identify exact skill gaps between their current resume and target job descriptions prior to technical interviews.",
      solution: "Developed an intelligent candidate prep platform that parses resumes against JDs using Gemini to output custom question banks and actionable preparation roadmaps.",
      features: [
        "Automated Resume & Job Description Parsing",
        "AI Skill-Gap Identification & Scoring",
        "Custom Technical & Behavioral Question Generation",
        "Comprehensive Interview Preparation Roadmap"
      ],
      techStack: ["Python", "FastAPI", "React", "Google Gemini API", "Prompt Engineering", "Tailwind CSS"],
      githubUrl: "https://github.com/23f2003203/interview-ai",
      liveDemoUrl: "",
      isFeatured: true,
      caseStudy: {
        overview: "Interview-AI empowers job applicants by delivering instant, AI-generated interview prep materials customized specifically to their background and target job description.",
        motivation: "To bridge the gap between job applications and interview performance using generative AI coaching.",
        architectureFlow: "Resume PDF & JD Text → FastAPI Extractor → Gemini LLM Analysis → Skill-Gap Matrix → Custom Interview Question Bank",
        developmentProcess: "Engineered structured JSON prompts for Gemini, created AST resume text extractors, constructed FastAPI endpoints, and styled a modern dark-mode React interface.",
        challenges: [
          "Handling unstructured PDF formats with non-standard section headers.",
          "Generating consistent structured JSON output from LLM responses."
        ],
        howSolved: [
          "Applied robust text regex normalization prior to LLM context ingestion.",
          "Utilized Gemini structured output schemas to guarantee clean response formatting."
        ],
        results: "Helped candidates identify missing skills and prepare tailored answers in under 60 seconds."
      }
    },
    {
      id: "vibebite",
      name: "VibeBite - Emotion-Based AI Recipe System",
      category: "AI & Machine Learning",
      description: "An AI-powered recipe recommendation system using Gemini 2.5 and FlavorDB to generate scientifically grounded meal suggestions based on user emotions.",
      problem: "Conventional recipe apps recommend meals based strictly on available ingredients, ignoring mood, psychological craving, and flavor chemistry.",
      solution: "Integrated Gemini 2.5 with scientific flavor compound data (FlavorDB) to map user emotions into scientifically paired culinary recommendations.",
      features: [
        "Emotion-to-Flavor Compound AI Mapping",
        "FlavorDB Scientific Ingredient Pairing Integration",
        "Gemini 2.5 Generative Recipe Customization",
        "Responsive Meal Explorer & Nutritional Breakdown"
      ],
      techStack: ["Python", "Gemini 2.5", "FlavorDB", "Flask", "REST APIs", "JavaScript"],
      githubUrl: "https://github.com/23f2003203/VibeBite",
      liveDemoUrl: "",
      isFeatured: true,
      caseStudy: {
        overview: "VibeBite combines mood psychology with molecular gastronomy data to suggest meals that enhance emotional well-being.",
        motivation: "Exploring novel intersections between generative AI, psychological emotion states, and flavor data science.",
        architectureFlow: "User Mood Input → Gemini 2.5 Emotion Classifier → FlavorDB Compound Matcher → Recipe Generation Engine → Nutritional Display",
        developmentProcess: "Scraped and indexed FlavorDB molecular pairings, trained Gemini prompt pipelines for emotion categorization, and built a Flask microservice.",
        challenges: [
          "Mapping subjective human emotions into objective chemical flavor profiles.",
          "Ensuring generated recipes remain practical with standard household ingredients."
        ],
        howSolved: [
          "Created an intermediary flavor matrix connecting mood categories to sensory profile attributes.",
          "Constrained Gemini recipe generation to commonly available pantry items."
        ],
        results: "Engineered a unique GenAI food app demonstrating scientific flavor pairing for personalized dining."
      }
    },
    {
      id: "vehicle-parking-app",
      name: "Vehicle Parking Management System",
      category: "Full-Stack Development",
      description: "A full-stack parking management system using Flask, Vue.js, SQLite, Redis, and REST APIs featuring admin/user roles, caching, and automated spot allocation.",
      problem: "Inefficient manual parking space allocation causes congestion and high query latency during peak operating hours.",
      solution: "Architected a full-stack platform with Vue.js single-page application frontend, Flask REST APIs, and Redis caching for sub-millisecond spot state lookups.",
      features: [
        "Role-Based Access Control (Admin & User Dashboards)",
        "Real-Time Parking Spot Allocation & Reservation",
        "Redis Caching for High-Speed Query Optimization",
        "Automated Parking Ticket & Fee Calculation"
      ],
      techStack: ["Vue.js", "Flask", "Python", "Redis", "SQLite", "REST APIs", "Bootstrap"],
      githubUrl: "https://github.com/23f2003203/vehicle-parking-app-v2",
      liveDemoUrl: "",
      isFeatured: true,
      caseStudy: {
        overview: "A scalable parking management platform providing real-time spot tracking and automated billing for urban parking facilities.",
        motivation: "Building a high-concurrency backend system utilizing caching and role-based permissions.",
        architectureFlow: "Vue.js SPA → Flask RESTful API → Redis Cache (Spot Status) → SQLite Database (Transactions)",
        developmentProcess: "Designed relational database schema in SQLite, implemented JWT user authentication, optimized search endpoints with Redis caching, and built reactive Vue components.",
        challenges: [
          "Preventing double-booking race conditions during simultaneous spot allocation requests.",
          "Maintaining database consistency between cache and disk."
        ],
        howSolved: [
          "Implemented Redis atomic transaction locks during spot reservation cycles.",
          "Set up write-through cache eviction policies on database updates."
        ],
        results: "Reduced spot lookup response latency by 80% with Redis caching."
      }
    },
    {
      id: "quiz-master-app",
      name: "Quiz Master - Online Examination Platform",
      category: "Full-Stack Development",
      description: "Multi-user online examination platform using Flask, Jinja2, SQLite, and Bootstrap with role-based authentication, quiz management, score tracking, and responsive UI.",
      problem: "Educational platforms need secure, multi-tenant examination engines with automated timer enforcement and score tracking.",
      solution: "Built a web application offering admin test creation interfaces, timed student examination portals, and automated score analytics.",
      features: [
        "Role-Based Authentication (Admin & Student Roles)",
        "Dynamic Quiz Creation, Timing & Question Management",
        "Automated Scoring & Historical Result Analytics",
        "Responsive Bootstrap UI Layout"
      ],
      techStack: ["Python", "Flask", "Jinja2", "SQLite", "Bootstrap", "HTML5", "CSS3"],
      githubUrl: "https://github.com/23f2003203/quiz-master-mad1",
      liveDemoUrl: "",
      isFeatured: false,
      caseStudy: {
        overview: "Quiz Master is a robust online assessment application designed for educational institutions to conduct timed quizzes seamlessly.",
        motivation: "To build a complete server-side rendered full-stack web app with clean security practices.",
        architectureFlow: "Student Login → Quiz Session → Flask Router → SQLite Quiz Store → Auto Scoring Engine → Result Summary",
        developmentProcess: "Engineered Flask view handlers, configured Werkzeug password hashing, wrote raw SQL queries in SQLite, and crafted Jinja2 HTML templates.",
        challenges: [
          "Auto-submitting test sessions accurately when client timer expires.",
          "Preventing unauthorized question access across user sessions."
        ],
        howSolved: [
          "Integrated JavaScript client-side timers with server-side session expiration checks.",
          "Enforced strict Flask session middleware permission decorators."
        ],
        results: "Successfully hosted multi-user examination sessions with 100% automated score accuracy."
      }
    }
  ],

  experience: [
    {
      id: "maincrafts-internship",
      role: "AI/ML Intern",
      company: "MAINCRAFTS Technology",
      duration: "6 Weeks (2025)",
      location: "India",
      description: "Completed an intensive 6-week internship focused on Artificial Intelligence, Data Analysis, and Machine Learning workflows.",
      responsibilities: [
        "Performed end-to-end data preprocessing, data cleaning, feature engineering, and exploratory data analysis (EDA) on structured datasets.",
        "Built and evaluated machine learning models for classification and regression tasks using Scikit-learn.",
        "Documented dataset insights and model evaluation metrics to optimize model performance."
      ],
      achievements: [
        "Successfully delivered data preprocessing pipelines for machine learning model training.",
        "Engineered key feature sets improving model validation accuracy."
      ],
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "EDA", "Data Cleaning"]
    }
  ],

  education: [
    {
      id: "iit-madras",
      degree: "BS in Data Science and Applications",
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      startYear: "2nd Year",
      graduationYear: "Diploma Level",
      location: "Chennai, India",
      gpa: "Programming in Python: S Grade",
      coursework: [
        "Programming in Python (S Grade)",
        "Data Science Foundations",
        "Database Management Systems",
        "Mathematical Statistics",
        "Application Development"
      ]
    },
    {
      id: "dseu",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Delhi Skill and Entrepreneurship University (DSEU)",
      startYear: "Undergraduate",
      graduationYear: "Present",
      location: "New Delhi, India",
      gpa: "",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++/Java)",
        "Web Engineering & REST APIs",
        "Operating Systems & Software Engineering"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-python-iitm",
      name: "Programming in Python - S Grade",
      issuer: "IIT Madras",
      date: "2025",
      credentialId: "IITM-BS-PY-SGRADE",
      url: "https://drive.google.com/file/d/1bbZVYPnYm77E-0k5OjyVsQnXZdmVD30M/view?usp=sharing"
    },
    {
      id: "cert-git-github-iitm",
      name: "Code, Commit, Collaborate: Git & GitHub Workshop",
      issuer: "IIT Madras",
      date: "2025",
      credentialId: "IITM-GIT-WORKSHOP",
      url: "https://drive.google.com/file/d/1LNV1AuI4oykRZQ6843xP65pmkzy50bQl/view?usp=sharing"
    },
    {
      id: "cert-mip-iitm",
      name: "MIP (Mathematics Intersection Programming) Workshop",
      issuer: "IIT Madras",
      date: "2025",
      credentialId: "IITM-MIP-WORKSHOP",
      url: "https://drive.google.com/file/d/1plUpieYtMLw59CIOMk6ARPZI0VENZn57/view?usp=sharing"
    },
    {
      id: "cert-udemy-ml",
      name: "Machine Learning Certification",
      issuer: "Udemy",
      date: "2025",
      credentialId: "UC-ML-CERT-2025",
      url: "https://drive.google.com/file/d/15lBHNTe-fLj4eM8SdaFScfdUjrI6KC2j/view?usp=sharing"
    },
    {
      id: "cert-foodoscope-iiitd",
      name: "Foodoscope Fork IT Challenge Hackathon Certificate",
      issuer: "IIIT Delhi",
      date: "2025",
      credentialId: "IIITD-FOODOSCOPE-2025",
      url: "https://drive.google.com/file/d/1OlmEj2-UMOy8ysS6FZHUdzoPP9E--aWT/view?usp=sharing"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Programming in Python - S Grade (Highest Distinction)",
      organization: "IIT Madras BS Degree Program",
      date: "2025",
      description: "Achieved the prestigious S Grade (top academic score tier) in the rigorous Programming in Python coursework at IIT Madras.",
      link: "https://drive.google.com/file/d/1bbZVYPnYm77E-0k5OjyVsQnXZdmVD30M/view?usp=sharing"
    },
    {
      id: "ach-2",
      title: "Participant - Foodoscope Fork IT Challenge Hackathon",
      organization: "IIIT Delhi",
      date: "2025",
      description: "Competed in the Foodoscope AI hackathon at IIIT Delhi, developing data-driven food flavor and recipe recommendation models.",
      link: "https://drive.google.com/file/d/1OlmEj2-UMOy8ysS6FZHUdzoPP9E--aWT/view?usp=sharing"
    },
    {
      id: "ach-3",
      title: "Active LeetCode Competitive Programmer",
      organization: "LeetCode",
      date: "Ongoing",
      description: "Solved technical algorithm & data structures problems on LeetCode focusing on Python, SQL, and problem solving.",
      link: "https://leetcode.com/u/hXgiDMLZrn/"
    }
  ]
};
