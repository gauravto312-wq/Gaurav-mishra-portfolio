export interface ProjectSummary {
  id: string;
  name: string;
  slug: string;
  category: string;
  badge: string;
  shortDescription: string;
  problemStatement: string;
  solutionOverview: string;
  engineeringHighlights: string[];
  techTags: string[];
  verifiedTests: {
    count: number;
    passRate: string;
    details: string;
  };
  links: {
    caseStudy: string;
    github?: string;
    backendGithub?: string;
    androidGithub?: string;
    liveDemo?: string;
    backendApi?: string;
    videoDemo?: string;
    release?: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; note?: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
}

export interface ThinkingPoint {
  title: string;
  subtitle: string;
  statement: string;
  reflection: string;
  exampleContext: string;
}

export const PERSONAL_INFO = {
  name: "Gaurav Mishra",
  headline: "Java Backend Developer",
  shortStatement: "Focused on building reliable backend systems and turning real-world problems into practical software solutions.",
  about: `I am a Computer Science Engineering undergraduate at Babu Banarasi Das University, Lucknow (expected graduation 2027), specializing in Java backend development. My technical foundation was built through rigorous Core and Advanced Java training at GRAstech and solidified by engineering production-grade distributed architectures such as SafeWalk and NGOConnect. I focus on developing clean, secure, and maintainable backend systems—prioritizing robust request lifecycles, role-based security, relational data integrity, and event-driven patterns. I enjoy digging into architectural trade-offs, understanding business constraints, and translating real-world operational challenges into reliable, verifiable software solutions.`,
  location: "India",
  email: "gauravto312@gmail.com",
  github: "https://github.com/gauravto312-wq",
  linkedin: "https://linkedin.com/in/gaurav-mishra-a0349029a",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Core Java",
    description: "Deep foundation in modern Java syntax, OOP design, and JVM execution mechanics.",
    skills: [
      { name: "Java 17+", highlight: true },
      { name: "Core Java", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "Collections & Generics", highlight: true },
      { name: "Multithreading & Concurrency" },
      { name: "Exception Handling" },
      { name: "File I/O & Streams" },
      { name: "JVM Internals & Memory Model" },
      { name: "SQL (Structured Query Language)", highlight: true },
      { name: "Kotlin (Android Basics)" }
    ]
  },
  {
    title: "Backend Frameworks & Persistence",
    description: "Production experience designing layered APIs, ORM mapping, and transaction management.",
    skills: [
      { name: "Spring Boot (3.2 & 3.3)", highlight: true },
      { name: "Spring MVC", highlight: true },
      { name: "Spring Data JPA", highlight: true },
      { name: "Hibernate ORM", highlight: true },
      { name: "JDBC" },
      { name: "MySQL 8.0", highlight: true },
      { name: "H2 In-Memory DB (Testing)" },
      { name: "Redis 7 (GEO & In-Memory Cache)", highlight: true },
      { name: "Cloudinary Java SDK" }
    ]
  },
  {
    title: "Security & Access Control",
    description: "Stateless security architecture, cryptographic tokens, and granular permission enforcement.",
    skills: [
      { name: "Spring Security 6.x", highlight: true },
      { name: "JWT (JJWT 0.12.6)", highlight: true },
      { name: "Role-Based Access Control (RBAC)", highlight: true },
      { name: "Stateless Session Management" },
      { name: "BCrypt Password Hashing" },
      { name: "Method-Level Security (@PreAuthorize)" },
      { name: "IDOR Prevention & Ownership Verification" }
    ]
  },
  {
    title: "API Design & Distributed Systems",
    description: "Real-time communication, event streaming, and decoupled asynchronous messaging.",
    skills: [
      { name: "RESTful API Design & Best Practices", highlight: true },
      { name: "WebSocket & STOMP Protocol", highlight: true },
      { name: "Apache Kafka (KRaft Mode)", highlight: true },
      { name: "Firebase Cloud Messaging (FCM)", highlight: true },
      { name: "Microservices Fundamentals", note: "Self-study exposure" },
      { name: "Cloud Deployment Fundamentals", note: "Self-study exposure" },
      { name: "Finite State Machine (FSM) Lifecycle Design" }
    ]
  },
  {
    title: "Architecture & Engineering Patterns",
    description: "Established architectural blueprints ensuring clean separation of concerns.",
    skills: [
      { name: "Layered (Controller-Service-Repository) Architecture", highlight: true },
      { name: "MVC (Model-View-Controller) Pattern" },
      { name: "Client-Server System Design" },
      { name: "Event-Driven Architecture" },
      { name: "Clean Architecture & MVVM (Mobile)" },
      { name: "Defensive Programming & Fail-Closed Protocols" }
    ]
  },
  {
    title: "Testing, Tooling & DevOps",
    description: "Automated verification pipelines, build tools, containerization, and developer utilities.",
    skills: [
      { name: "JUnit 5 & Mockito", highlight: true },
      { name: "Spring Boot Starter Test (@SpringBootTest, MockMvc)", highlight: true },
      { name: "Isolated Test Profiles (application-test.yml)" },
      { name: "Apache Maven", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Docker & Docker Compose", highlight: true },
      { name: "Postman API Testing", highlight: true },
      { name: "IntelliJ IDEA" },
      { name: "Vercel & Render Cloud Platforms" }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectSummary[] = [
  {
    id: "ngoconnect",
    name: "NGOConnect",
    slug: "ngoconnect",
    category: "Full-Stack Social-Impact Platform",
    badge: "Production Deployed",
    shortDescription: "Enterprise-grade community food redistribution and volunteer coordination platform connecting citizens, restaurants, verified NGOs, and volunteers.",
    problemStatement: "Substantial quantities of edible food are wasted daily by commercial and household donors while charities suffer shortages due to fragmented communication and a lack of tamper-proof, verifiable pickup and handover logistics.",
    solutionOverview: "A centralized, role-based platform that coordinates surplus meal publishing, on-demand NGO claiming with concurrency guards, two-stage code-verified volunteer handovers, and audited compliance workflows.",
    engineeringHighlights: [
      "Strict 5-role multi-tenant RBAC (Citizen, Restaurant, NGO, Volunteer, Admin) enforced through Spring Security 6, stateless JJWT bearer parsing, and method-level access guards.",
      "Tamper-proof Two-Stage Verification Code System for volunteer task handovers (requiring separate donor-pickup and recipient-dropoff PIN confirmations to prevent fraudulent claims).",
      "Tiered Cloudinary integration isolating public media assets from sensitive legal compliance filings (80G/12A/NGO Darpan), served exclusively via short-lived 5-minute cryptographically signed download URLs."
    ],
    techTags: [
      "Java 17",
      "Spring Boot 3.2",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL 8.0",
      "Cloudinary SDK",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "Render",
      "Vercel"
    ],
    verifiedTests: {
      count: 181,
      passRate: "100% (0 Failures, 0 Errors)",
      details: "Comprehensive suite across RBAC authorization, duplicate claim conflict handling (409), MIME/size security validation, and contact inquiry persistence."
    },
    links: {
      caseStudy: "/projects/ngoconnect",
      github: "https://github.com/gauravto312-wq/ngoconnect",
      liveDemo: "https://ngoconnect-frontend.vercel.app",
      backendApi: "https://ngoconnect-m2aq.onrender.com"
    }
  },
  {
    id: "safewalk",
    name: "SafeWalk",
    slug: "safewalk",
    category: "Distributed Emergency Assistance System",
    badge: "Native Android & Event-Driven Backend",
    shortDescription: "High-security, real-time emergency safety and community assistance system coordinating rapid SOS dispatches, geospatial discovery, and live duplex tracking.",
    problemStatement: "In critical personal safety crises, conventional emergency dispatch suffers from high response latency, lack of real-time continuous GPS telemetry, and inability to alert nearby capable citizens within walking distance.",
    solutionOverview: "A distributed event-driven platform pairing a native Android client with a Spring Boot backend, utilizing Redis GEO for sub-second responder discovery, Apache Kafka for decoupled SOS event pipelines, and STOMP WebSockets for live telemetry.",
    engineeringHighlights: [
      "Sub-second Geospatial Discovery engine leveraging Redis 7 GEO commands (GEOADD, GEOSEARCH) to query and notify candidate responders within a 2km bounding radius.",
      "Decoupled asynchronous event pipeline with Apache Kafka (KRaft mode) publishing SOS lifecycle events, ensuring zero blocking on database transactions during emergency initiation.",
      "Strict 'Zero Client Authority' Finite State Machine enforcing a 5-second grace cancellation window and mutual dual-confirmation resolution to eliminate coerced cancellations."
    ],
    techTags: [
      "Java 17",
      "Spring Boot 3.3.4",
      "Spring WebSocket (STOMP)",
      "Redis 7 GEO",
      "Apache Kafka",
      "Firebase Cloud Messaging (FCM)",
      "Spring Security",
      "JWT",
      "MySQL 8.0",
      "Kotlin 2.2",
      "Jetpack Compose",
      "MapLibre"
    ],
    verifiedTests: {
      count: 317,
      passRate: "100% (317 Tests Executed, 0 Failures)",
      details: "Full verification of STOMP interceptors, Redis GEO indexing, Kafka producer/consumer flows, 5-second timer boundaries, and Haversine spatial algorithms."
    },
    links: {
      caseStudy: "/projects/safewalk",
      backendGithub: "https://github.com/gauravto312-wq/safewalk-backend",
      androidGithub: "https://github.com/gauravto312-wq/SafeWalk-Android",
      release: "https://github.com/gauravto312-wq/SafeWalk-Android/releases/tag/v1.0.0",
      backendApi: "https://safewalk-backend-production-e3a1.up.railway.app",
      videoDemo: "https://youtu.be/91b0QSqxUSY"
    }
  }
];

export const MY_THINKING_POINTS: ThinkingPoint[] = [
  {
    title: "Ownership Beyond Writing Code",
    subtitle: "Taking end-to-end accountability for systems in runtime",
    statement: "I believe a developer's responsibility does not end when a feature is committed. If I build something, I must understand how it operates, monitor its runtime behavior, and be ready to investigate and fix failures.",
    reflection: "Writing clean syntax is only the first step. When implementing emergency workflows in SafeWalk or food claims in NGOConnect, true engineering accountability meant writing comprehensive test suites for edge cases, analyzing thread safety under concurrent requests, and ensuring database rollbacks protect business state during failures.",
    exampleContext: "Engineered 317 backend tests for SafeWalk to verify state machine transitions and race-condition safety under Redis and WebSocket disconnections."
  },
  {
    title: "Understanding What Is Needed vs. What Is Wanted",
    subtitle: "Separating surface requests from core architectural necessities",
    statement: "I want to understand the real problem before deciding what to build. A requested feature and a genuinely necessary feature are rarely identical.",
    reflection: "Stakeholders often request elaborate features that add surface complexity without solving root bottlenecks. In NGOConnect, instead of building complex real-time messaging for deliveries, the critical problem was fraud prevention and verification. Introducing a deterministic two-stage PIN verification protocol delivered immediate security and trust without introducing unnecessary operational fragility.",
    exampleContext: "Prioritized secure verification codes over chat interfaces to eliminate fraudulent claim handovers in NGOConnect."
  },
  {
    title: "The \"Why\" Mentality",
    subtitle: "Interrogating architectural trade-offs before choosing technology",
    statement: "I like understanding why a particular language, architecture, technology, or implementation decision was chosen, what problem it solves, and why an alternative might not be appropriate.",
    reflection: "Adopting tools without understanding their trade-offs produces fragile software. For SafeWalk, we chose Redis GEO specifically because executing trigonometric bounding box queries in MySQL under continuous 3-second location broadcasts would degrade relational throughput. Redis provided sub-millisecond in-memory spatial indexing, while MySQL remained dedicated to ACID audit trails.",
    exampleContext: "Architected dual-storage topology separating Redis GEO fast-path queries from MySQL relational transaction records."
  },
  {
    title: "Thinking Beyond the Current Task",
    subtitle: "Designing extensible systems prepared for future constraints",
    statement: "I enjoy exploring new ideas, identifying real-world edge cases, and anticipating how a system will need to scale or evolve beyond the initial ticket.",
    reflection: "A feature built in isolation usually breaks when context expands. When implementing NGO document verification, considering future compliance audits led directly to designing short-lived 5-minute pre-signed URLs rather than open file endpoints, ensuring organizations' confidential tax documents remain strictly protected.",
    exampleContext: "Implemented isolated H2 test profiles with transactional boundaries to allow hundreds of CI tests without mutating persistent local datasets."
  },
  {
    title: "Building, Understanding, and Improving",
    subtitle: "Treating engineering as a continuous loop of deep comprehension",
    statement: "I want to understand the system I create rather than treating development as a one-time act of writing code.",
    reflection: "Building software is an iterative journey of discovery. Reading JVM memory specs, observing how Hibernate generates SQL queries under Lazy vs Eager loading, and testing WebSocket heartbeat dropouts transforms theoretical concepts into instinctual engineering practices.",
    exampleContext: "Audited every JPA entity relationship and query across NGOConnect to prevent N+1 queries and guarantee atomic state updates."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Summer Internship & Training",
    organization: "GRAstech",
    period: "June – August 2026",
    location: "BBD Campus, Lucknow",
    type: "90-Hour Intensive Project-Based Training",
    highlights: [
      "Completed 90 hours of rigorous, project-oriented training in Core Java and Advanced Java architecture.",
      "Gained deep practical grounding in Object-Oriented Programming (OOP) paradigms: Polymorphism, Inheritance, Encapsulation, and Abstraction.",
      "Engineered data-driven exercises applying Java Collections Framework (Lists, Sets, Maps), Generics, and custom Comparator/Comparable contracts.",
      "Developed robust Exception Handling hierarchies and File I/O stream processing routines for tabular dataset manipulation.",
      "Practiced low-level debugging, stack-trace analysis, memory leak inspection, and algorithmic problem-solving in modern IDE environments."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Babu Banarasi Das University (BBDU)",
    period: "2023 – 2027 (Expected)",
    location: "Lucknow, Uttar Pradesh",
    details: "Focusing on backend software engineering, data structures, relational database management systems (RDBMS), system design principles, and object-oriented architectures."
  },
  {
    degree: "Senior Secondary (Class XII) — Science Stream",
    institution: "DBS Inter College",
    period: "2023",
    location: "Jaunpur, Uttar Pradesh",
    details: "Completed higher secondary curriculum with a focus on Mathematics, Physics, and Chemistry."
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "DBS Inter College",
    period: "2021",
    location: "Jaunpur, Uttar Pradesh",
    details: "Foundational education in general science and mathematics."
  }
];

export const CERTIFICATION_DATA: CertificationItem[] = [
  {
    title: "Data Visualization Using Python",
    issuer: "IBM",
    issueDate: "October 2024"
  },
  {
    title: "Robots are Coming! Build IoT Apps with Watson AI, Swift, and Node-RED",
    issuer: "IBM",
    issueDate: "October 2024"
  }
];
