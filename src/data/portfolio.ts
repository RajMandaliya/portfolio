// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Raj Mandaliya",
  title: "Software Engineer",
  tagline: "Building scalable distributed systems, high-reliability backends, and AI-integrated applications.",
  email: "rajmandaliya2249@gmail.com",
  phone: "+1 201-626-0902",
  location: "Los Angeles, CA",
  github: "https://github.com/RajMandaliya",
  blog: "https://dev.to/rajmandaliya",
  linkedin: "", // Add your LinkedIn URL here
  available: true, // Set to false to hide "Available for roles" badge
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99.99%", label: "Uptime Maintained" },
  { value: "15+", label: "APIs Architected" },
  { value: "40%", label: "CI/CD Time Saved" },
];

export const experience = [
  {
    company: "Razorpay",
    role: "Software Engineer II",
    period: "Jun 2022 — Jul 2023",
    location: "Mumbai, India",
    bullets: [
      "Designed and secured high-reliability payment backends using Java, Spring Boot, and AWS with OAuth2, TLS, and SQL injection defenses protecting 2,000+ users; sustained 99.99% uptime in production.",
      "Architected 15+ REST APIs (JAX-RS, Hibernate) and UI components (AngularJS/TypeScript) backed by PostgreSQL across critical payment workflows at scale.",
      "Refactored distributed Java microservices (auth, payments); expanded JUnit/Mockito coverage cutting bug resolution time by 25%; automated infra with Terraform reducing CI/CD deploy time by 40%.",
    ],
    tags: ["Java", "Spring Boot", "AWS", "PostgreSQL", "Terraform", "AngularJS", "OAuth2", "Microservices"],
  },
  {
    company: "Simform Solutions",
    role: "Software Engineer Intern",
    period: "Feb 2020 — Jun 2021",
    location: "Ahmedabad, India",
    bullets: [
      "Automated MySQL index tuning and AWS RDS configuration in Python, reducing query latency by 15% across high-volume data pipelines.",
      "Built cross-platform React Native app with Google Maps API and Firebase; achieved 99% automated test coverage with Django and Jest.",
    ],
    tags: ["Python", "React Native", "Firebase", "MySQL", "AWS RDS", "Django", "Jest"],
  },
  {
    company: "TatvaSoft",
    role: "Software Developer Intern",
    period: "Jun 2020 — Apr 2021",
    location: "Ahmedabad, India",
    bullets: [
      "Built AI-powered scheduling system in Python and Flask using genetic algorithms, resolving 500+ conflicts/week with 70% faster generation time on AWS EC2.",
      "Shipped Kotlin Android app with real-time data visualizations (MPAndroidChart) adopted by 1,000+ users at launch.",
    ],
    tags: ["Python", "Flask", "Kotlin", "AWS EC2", "Genetic Algorithms", "Android"],
  },
];

export const projects = [
  {
    name: "mini-agent",
    description:
      "Async-first LLM agent framework with multi-provider support (OpenAI, Anthropic, Ollama, OpenRouter), JSON schema tool calling, and ReAct-style reasoning loop with pluggable providers.",
    lang: "Rust",
    stars: 12,
    url: "https://github.com/RajMandaliya/mini-agent",
    tags: ["Rust", "Tokio", "OpenAI API", "Anthropic", "Async"],
  },
  {
    name: "cpu16",
    description:
      "A custom 16-bit CPU emulator written from scratch — includes a hand-designed ISA, two-pass assembler, fetch-decode-execute engine, stack, flags register, and interrupt handling.",
    lang: "Rust",
    stars: 2,
    url: "https://github.com/RajMandaliya/cpu16",
    tags: ["Rust", "Systems", "Emulation", "Custom ISA"],
  },
  {
    name: "Async-Pipeline",
    description:
      "Composable async candidate ranking pipeline: sourcing → hydration → filtering → scoring → selection → side effects. Concurrent sources, deterministic ranking stages, each independently testable.",
    lang: "Rust",
    stars: 1,
    url: "https://github.com/RajMandaliya/Async-pipeline",
    tags: ["Rust", "Tokio", "async-trait", "Pipeline"],
  },
  {
    name: "rust-chat-server",
    description:
      "Async chat server in Rust demonstrating concurrency, networking, and clean architecture patterns using Tokio's async runtime and TCP stream handling.",
    lang: "Rust",
    stars: 1,
    url: "https://github.com/RajMandaliya/rust-chat-server",
    tags: ["Rust", "Tokio", "Networking", "Concurrency"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Rust", "Python", "Java", "C++", "JavaScript", "TypeScript", "Kotlin", "Go", "C#", "Dart"],
  },
  {
    category: "Frameworks",
    items: ["Tokio", "Spring Boot", "Django", "Flask", "FastAPI", "React.js", "Next.js", "AngularJS"],
  },
  {
    category: "Infrastructure",
    items: ["Kafka", "Redis", "Kubernetes", "Docker", "Terraform", "Jenkins", "AWS", "GCP", "Azure"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "SQLite", "GraphQL"],
  },
  {
    category: "Concepts",
    items: [
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "CI/CD",
      "NLP",
      "GenAI",
      "LLM Agents",
      "System Design",
      "OAuth2 / TLS",
      "Async Programming",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Pace University",
    location: "New York",
    year: "Dec 2025",
    courses: ["Algorithms", "Distributed Systems", "Software Engineering", "Computer Architecture", "AI & ML"],
  },
  {
    degree: "B.E. Information Technology",
    school: "P.P. Savani University",
    location: "India",
    year: "Jun 2023",
    courses: ["Data Structures", "OOP", "Operating Systems", "Networking", "Cloud Computing", "Web Development"],
  },
];
