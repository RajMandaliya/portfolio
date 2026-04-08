// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Raj Mandaliya",
  title: "Software Engineer",
  tagline:
    "Specializing in systems programming and distributed infrastructure — building high-performance microservices in Rust and Go for data-intensive workloads at cloud scale.",
  email: "rajmandaliya2249@gmail.com",
  phone: "+1 201-626-0902",
  location: "Los Angeles, CA",
  github: "https://github.com/RajMandaliya",
  blog: "https://dev.to/rajmandaliya",
  linkedin: "", // Add your LinkedIn URL here
  available: true,
};

export const stats = [
  { value: "10M+", label: "Requests/Day Handled" },
  { value: "99.99%", label: "Uptime Maintained" },
  { value: "<50ms", label: "p95 Latency at CF" },
  { value: "40%", label: "Incidents Reduced" },
];

export const experience = [
  {
    company: "Cloudflare",
    role: "Software Development Engineer II (Rust)",
    period: "Nov 2024 — Present",
    location: "Los Angeles, CA",
    bullets: [
      "Designed and implemented high-performance backend services using Rust, handling 10M+ requests/day with <50ms p95 latency and comprehensive performance analysis.",
      "Built async microservices using Tokio and Actix Web, improving system throughput by 35% compared to previous Node.js services.",
      "Developed memory-safe, concurrent systems eliminating segfaults and race conditions, reducing production incidents by 40%.",
      "Led migration of legacy services (Go/Python) to Rust, optimizing CPU usage by 25% and reducing infrastructure costs.",
      "Implemented distributed caching and rate-limiting mechanisms using Redis and Rust-based workers.",
      "Collaborated with DevOps to deploy services using Docker + Kubernetes, ensuring 99.99% uptime.",
      "Mentored junior engineers and conducted code reviews focusing on Rust best practices and performance optimization.",
    ],
    tags: ["Rust", "Tokio", "Actix Web", "Redis", "Kubernetes", "Docker", "Distributed Systems"],
  },
  {
    company: "Razorpay",
    role: "Software Engineer II",
    period: "Jun 2022 — Jul 2023",
    location: "Mumbai, India",
    bullets: [
      "Engineered OAuth2, TLS, and SQL injection defenses for high-throughput payment backends on Java, Spring Boot, and AWS; safeguarded 2,000+ active users with 99.99% uptime.",
      "Designed and optimized 15+ production REST APIs (JAX-RS, Hibernate) with PostgreSQL, reducing p99 query latency by 30% under peak load.",
      "Architected event-driven payment pipelines using Apache Kafka for real-time transaction streaming with guaranteed delivery semantics and fault-tolerant message handling.",
      "Decomposed monolithic auth and payment services into fault-isolated microservices; expanded JUnit/Mockito test coverage to 85%+, cutting bug resolution time by 25%.",
      "Automated cloud infrastructure provisioning with Terraform and Docker; optimized Jenkins CI/CD pipeline caching reducing deployment time by 40%.",
    ],
    tags: ["Java", "Spring Boot", "AWS", "Kafka", "PostgreSQL", "Terraform", "Docker", "Jenkins"],
  },
];

export const projects = [
  {
    name: "mini-agent",
    description:
      "Rust-based AI agent framework implementing the full execution loop (plan → act → observe). Modular tool system with dynamic tool integration, async architecture for multi-step task execution. Published as a reusable library.",
    lang: "Rust",
    stars: 12,
    period: "Jan 2025 — May 2025",
    url: "https://github.com/RajMandaliya/mini-agent",
    tags: ["Rust", "Tokio", "AI Agents", "Async", "LLM"],
  },
  {
    name: "Async-Pipeline",
    description:
      "Asynchronous data processing pipeline in Rust enabling concurrent execution of multiple stages. Processes 1000+ tasks concurrently with backpressure control and task coordination preventing resource exhaustion.",
    lang: "Rust",
    stars: 1,
    period: "Jul 2023 — Dec 2023",
    url: "https://github.com/RajMandaliya/Async-pipeline",
    tags: ["Rust", "Async", "Concurrency", "Pipeline", "Futures"],
  },
  {
    name: "rust-chat-server",
    description:
      "High-performance concurrent chat server using Tokio handling 1K+ simultaneous TCP connections at sub-100ms latency. Event-driven architecture for real-time broadcasting, stress-tested with simulated clients.",
    lang: "Rust",
    stars: 1,
    period: "Oct 2021 — May 2022",
    url: "https://github.com/RajMandaliya/rust-chat-server",
    tags: ["Rust", "Tokio", "TCP", "Networking", "Concurrency"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Rust", "Python", "Java", "C++", "JavaScript", "TypeScript", "Kotlin", "Go", "C#", "Dart"],
  },
  {
    category: "Frameworks",
    items: ["Tokio", "Actix Web", "Spring Boot", "Django", "Flask", "FastAPI", "React.js", "Next.js", "AngularJS"],
  },
  {
    category: "Infrastructure",
    items: ["Kafka", "Redis", "Kubernetes", "Docker", "Terraform", "Jenkins", "AWS", "GCP", "Azure"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Redshift", "Snowflake", "Amazon S3", "Supabase", "CockroachDB"],
  },
  {
    category: "Cloud & MLOps",
    items: ["AWS EC2", "AWS Lambda", "AWS SageMaker", "Azure ML", "MLflow", "CI/CD", "Docker"],
  },
  {
    category: "Concepts",
    items: [
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "Async Programming",
      "Memory Safety",
      "Concurrency",
      "LLM Agents",
      "GenAI",
      "Distributed File Systems",
      "Performance Analysis",
      "Edge Computing",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Pace University",
    location: "New York",
    year: "Jan 2024 — Dec 2025",
    courses: ["Algorithms & Data Structures", "OOP", "Distributed Systems", "AI & ML"],
  },
];

export const certifications = [
  { name: "AWS Certified Developer — Associate", issuer: "Amazon Web Services" },
  { name: "Rust Foundation Certification", issuer: "Rust Foundation" },
  { name: "Google Professional Cloud Developer", issuer: "Google Cloud" },
];
