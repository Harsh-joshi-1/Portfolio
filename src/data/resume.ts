const CLOUDINARY_BASE = "https://res.cloudinary.com/dp4xt0bve/image/upload";
const CLOUDINARY_VERSION = "v1778140840";
export const RESUME_URL = "/resume-v3.pdf"; // The actual file location

const optimizedImage = (path: string, width?: number, version?: string) => {
  if (path.startsWith('/images/')) {
    return path;
  }
  // Remove leading slash if present
  const fileName = path.startsWith('/') ? path.slice(1) : path;
  // Replace spaces with underscores and ensure .webp extension
  const cleanName = fileName.replace(/\s+/g, '_').replace(/\.(png|jpg|jpeg|svg)$/, '.webp');

  // Optimization parameters: f_auto (format), q_auto (quality)
  let params = "f_auto,q_auto";
  if (width) params += `,w_${width},c_limit`; // c_limit ensures we don't upscale

  const useVersion = version || CLOUDINARY_VERSION;
  return `${CLOUDINARY_BASE}/${params}/${useVersion}/${cleanName}`;
};

export const resumeData = {
  personalInfo: {
    name: "Harsh Joshi",
    role: "Electronics and Communication Engineering Student",
    phone: "+91 7717413070",
    email: "joshi407harsh@gmail.com",
    linkedin: "https://linkedin.com/in/harshjoshi001", // Placeholder link
    github: "https://github.com/Harsh-joshi-1", // Placeholder link
    summary: "ECE student at NIT Jalandhar building full stack and AI-powered applications. Experienced in developing real-world products and integrating LLM-based features. Interested in backend systems, scalable architectures, and applying AI to real-world problems.",
    image: optimizedImage("harsh.jpg", 1200, "v1778146871"), // Hero image limited to 1200px
    resume: "/resume"
  },
  skills: {
    languages: ["C/C++", "Python", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    aiml: ["OpenAI API", "LLM Integration", "NLP-based query handling", "ML Model Inference"],
    systems: ["Multithreading", "Event-driven Architecture", "WebSockets"],
    tools: ["Git", "GitHub", "Redis", "Kafka"],
    deployment: ["AWS", "Render", "Railway", "Vercel"]
  },
  education: [
    {
      institution: "Dr. B. R. Ambedkar National Institute of Technology (NIT), Jalandhar",
      degree: "Bachelor of Technology in Electronics and Communication",
      score: "CGPA: 8.43/10",
      period: "2024-2028"
    },
    {
      institution: "PM SHRI Kendriya Vidyalaya No.1, Air Force Station Pathankot, Punjab",
      degree: "Class XII (Senior Secondary) [Board: CBSE]",
      score: "Percentage: 94.6%",
      period: "2023-2024"
    }
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Grey Volk",
      companyLink: "https://greyvolk-portal.vercel.app",
      period: "JUNE 2026",
      type: "professional",
      points: [
        "Leveraged AI-assisted workflows to architect a 45-user internal operations platform, significantly accelerating full-stack feature delivery.",
        "Engineered 8 operational modules (Payroll, Inventory, HR) with strict Role-Based Access Control (RBAC) and schema validation across 30+ RESTful APIs.",
        "Architected an asynchronous AI support agent using LLM function calling and Redis queues to parse, classify, and auto-respond to customer emails.",
        "Owned the software development lifecycle, implementing automated testing practices to ensure production stability and continuous enhancements."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Haven Homes Punjab",
      companyLink: "https://havenhomespunjab.in",
      period: "APRIL 2026",
      type: "professional",
      points: [
        "Built and deployed a real estate platform (HavenHomes) for a client, handling end-to-end development.",
        "Improved Core Web Vitals and reduced load time using lazy loading and optimization techniques",
        "Developed backend APIs for lead capture and user interaction",
        "Integrated AI-powered assistant (Project Vienna) to enhance engagement and automation"
      ]
    }
  ],
  projects: [
    {
      id: 7,
      name: "HRMS Dashboard",
      role: "Developer",
      description: "A comprehensive internal operations portal featuring automated attendance, payroll cycles, leave balance tracking, and role-based workspaces.",
      techStack: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      links: [
        { name: "Live", url: "https://greyvolk-portal.vercel.app" }
      ],
      points: [
        "Architected and deployed a multi-module internal platform managing attendance, leaves, and payroll for 45+ users",
        "Engineered strict Role-Based Access Control (RBAC) separating Super Admin, Admin, and Employee workflows",
        "Developed schema-validated REST APIs to guarantee secure transaction processing and data integrity"
      ],
      images: [optimizedImage("/images/hrms.png")]
    },
    {
      id: 8,
      name: "Email Customer Support Agent",
      role: "Developer",
      description: "An asynchronous AI-powered email support agent that automatically processes, categorizes, and generates drafts for incoming customer emails.",
      techStack: ["Node.js", "Redis", "OpenAI API", "React.js"],
      links: [],
      points: [
        "Designed an event-driven email processor using Redis queues for background job handling",
        "Integrated LLM function calling to classify tickets into categories like Open Tickets and Fan Mail",
        "Built a real-time admin support desk showing tickets status and auto-synced Gmail inbox updates"
      ],
      images: [optimizedImage("/images/support.png")]
    },
    {
      id: 2,
      name: "Distributed Settlement Engine for Predictive Markets",
      role: "Developer",
      description: "A high-performance system for concurrent financial transaction processing.",
      techStack: ["Kafka", "C++", "REST APIs", "WebSockets"],
      links: [],
      points: [
        "Developing a high-performance system for concurrent financial transaction processing.",
        "Designed event-driven architecture using Kafka for real-time trade handling.",
        "Implemented multithreaded processing in C++ to ensure consistency under concurrency.",
        "Built REST APIs and WebSocket-based real-time market feeds.",
        "Created real-time trade dashboards for visual monitoring."
      ],
      images: [optimizedImage("2.png")]
    },
    {
      id: 3,
      name: "Haven Homes",
      role: "Developer",
      description: "A full-stack real estate platform featuring an admin panel, secure authentication, and natural language search enhancements.",
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js"],
      links: [
        { name: "Live", url: "https://havenhomespunjab.in" },
        { name: "Demo", url: "https://youtu.be/QFknFDHEONI" },
        { name: "Code", url: "https://github.com/Harsh-joshi-1/Haven_Homes" }
      ],
      points: [
        "Built a responsive real estate frontend with complex search capabilities",
        "Developed an admin panel with secure authentication and data management",
        "Implemented natural language search enhancements for localities"
      ],
      images: [optimizedImage("3.png")]
    },
    {
      id: 4,
      name: "Project Seattle",
      role: "Developer",
      description: "AWS production deployment of Haven Homes real estate platform.",
      techStack: ["JavaScript", "AWS", "Docker", "React 19", "Tailwind 4"],
      links: [
        { name: "Demo", url: "https://youtu.be/QFknFDHEONI" },
        { name: "Code", url: "https://github.com/Harsh-joshi-1/Project-seattle" }
      ],
      points: [
        "Containerized the MERN stack application for cloud deployment",
        "Modernized the stack to React 19, Tailwind 4, and Vite 6",
        "Configured AWS infrastructure for production scaling"
      ],
      images: [optimizedImage("4.png")]
    },
    {
      id: 6,
      name: "Groomify",
      role: "Developer",
      description: "A web application offering grooming services and appointments.",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      links: [
        { name: "Code", url: "https://github.com/Harsh-joshi-1/Groomify" }
      ],
      points: [
        "Developed a customer-facing portal for booking grooming services",
        "Created an intuitive UI with Tailwind CSS and modern design principles",
        "Handled state management and API integrations"
      ],
      images: [optimizedImage("5.png")]
    },
    {
      id: 1,
      name: "Project Vienna – AI-Powered Real Estate Assistant",
      role: "Developer",
      description: "An AI-powered assistant for real estate queries and recommendations with dynamic backend APIs to process queries and personalized responses.",
      techStack: ["React.js", "Node.js", "AI/NLP tools"],
      links: [
        { name: "Live", url: "https://kyoto-murex.vercel.app/" },
        { name: "Demo", url: "https://youtu.be/QfUpYXGFnhc" },
        { name: "Code", url: "https://github.com/joshi407harsh" }
      ],
      points: [
        "Built an AI-powered assistant for real estate queries and recommendations",
        "Designed backend APIs to process user queries and fetch relevant data dynamically",
        "Implemented a priority-based appointment system for admins to handle high-intent leads",
        "Improved user engagement through personalized responses and automation"
      ],
      images: [optimizedImage("1.png")]
    }
  ],
  achievements: [
    "Solved 250+ algorithmic problems on LeetCode (Data Structures, Graphs, DP).",
    "Achieved Pupil rank (1373) on Codeforces by consistently competing in algorithmic programming contests. (Codeforces)"
  ]
};
