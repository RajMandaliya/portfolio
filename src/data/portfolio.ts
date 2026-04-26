// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Raj Mandaliya",
  title: "Software Engineer",
  tagline:
    "Specializing in systems programming, distributed infrastructure, and high-performance computing — building custom CPU emulators, Rust-based edge services processing 10M+ requests daily, and event-driven fintech pipelines.",
  email: "rajmandaliyasurvey@gmail.com",
  phone: "+1 201-626-0902",
  location: "Los Angeles, CA",
  github: "https://github.com/RajMandaliya",
  blog: "https://dev.to/rajmandaliya",
  linkedin: "https://linkedin.com/in/raj-mandaliya-78a622249",
  available: true,
};

export const stats = [
  { value: "10M+", label: "Requests/Day Handled" },
  { value: "99.99%", label: "Uptime Maintained" },
  { value: "<50ms", label: "p95 Latency at CF" },
  { value: "205", label: "Tests Passing" },
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
    name: "cpu16",
    description:
      "Custom 16-bit CPU emulator built from first principles in Rust. Includes a hand-designed 35-instruction ISA with fixed-width encoding, a two-pass assembler with forward-reference resolution, a 5-stage in-order pipeline (IF→ID→EX→MEM→WB) with RAW data hazard stall detection and 2-cycle branch flush, and a direct-mapped write-through L1 cache simulation classifying misses as cold vs conflict. Six assembly programs included: bubble sort, binary search, Sieve of Eratosthenes, RPN stack calculator, Fibonacci, and Factorial. 49 integration tests · 5 versioned releases · CI: fmt + clippy + test on every push.",
    lang: "Rust",
    stars: 0,
    period: "2024 — 2025",
    url: "https://github.com/RajMandaliya/cpu16",
    tags: ["Rust", "CPU Architecture", "Pipeline Simulation", "Cache Modeling", "ISA Design", "Assembler"],
  },
  {
    name: "mini-agent",
    description:
      "Rust-based AI agent framework implementing the full execution loop (plan → act → observe). Modular tool system with dynamic tool integration, async architecture for multi-step task execution. Published as a reusable library on crates.io.",
    lang: "Rust",
    stars: 12,
    period: "Jan 2025 — May 2025",
    url: "https://github.com/RajMandaliya/mini-agent",
    tags: ["Rust", "Tokio", "AI Agents", "Async", "LLM"],
  },
  {
    name: "anomaly-detection",
    description:
      "Real-time anomaly detection pipeline ingesting three live Kafka streams — server metrics, financial transactions, and IoT sensors. Every event scored by a PyOD ensemble (IForest + LOF + HBOS) with majority voting. Anomalies surfaced via FastAPI REST + WebSocket feed, persisted to PostgreSQL. 44 pytest tests passing.",
    lang: "Python",
    stars: 0,
    period: "2025",
    url: "https://github.com/RajMandaliya/anomaly-stream-detector",
    tags: ["Kafka", "PyOD", "FastAPI", "WebSocket", "PostgreSQL", "Docker", "Python"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Rust", "Python", "Java", "C++", "JavaScript", "TypeScript", "Go"],
  },
  {
    category: "Backend",
    items: ["Tokio", "Actix Web", "Spring Boot", "FastAPI", "JAX-RS", "Hibernate", "Django"],
  },
  {
    category: "AI / ML",
    items: ["PyOD", "TensorFlow", "Scikit-learn", "LLM Agents", "Ensemble ML"],
  },
  {
    category: "Infrastructure",
    items: ["Kafka", "Redis", "Kubernetes", "Docker", "Terraform", "AWS", "GitHub Actions"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Redshift", "Snowflake", "Amazon S3"],
  },
  {
    category: "Concepts",
    items: [
      "CPU Architecture",
      "Cache Simulation",
      "Pipeline Hazard Detection",
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "Memory Safety",
      "Concurrency",
      "Async Programming",
      "CI/CD",
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