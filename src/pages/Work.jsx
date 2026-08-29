import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Card from "../components/Card";
import Container from "../components/Container";
import MarqueeSection from "../components/Marquee";
import ProjectModal from "../components/ProjectModal";

const projectsData = [
  {
    id: "auxilia-dev",
    title: "Auxilia — Cloud Infrastructure & Platform Tooling",
    category: "Cloud Infrastructure & Platform Engineering",
    imageUrl: "/01.png",
    liveUrl: "https://auxilia.dev/",
    techStack: ["AWS", "Kubernetes", "Docker", "Go", "Terraform", "Python", "gRPC", "Prometheus"],
    description: `
      **Project Overview:**
      Auxilia is a high-performance cloud infrastructure automation platform designed to streamline orchestration, environment provisioning, and developer workflow automation across complex distributed cloud environments.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Architectural Standard & Boundary Design:** Brent established the core cloud-native architecture, breaking down legacy monolithic orchestration pipelines into decoupled, highly scalable micro-services communicating via low-latency gRPC APIs.
      * **Advanced Problem Solving:** Solved severe cross-region data consistency and race conditions during automated environment provisioning by introducing a distributed state machine with deterministic locks and dynamic quorum strategies.
      * **Technical Mentorship & Advisory:** Directed and mentored 12+ senior engineers on declarative infrastructure patterns (Infrastructure-as-Code), establishing rigorous code review guidelines and zero-downtime deployment strategies.
      * **Key Innovation:** Invented an automated cloud-cost control operator that predicts resource over-provisioning using heuristic analysis, reducing cloud infrastructure expenditure by 38% for enterprise tenants.
    `
  },
  {
    id: "micro-gabster",
    title: "Gabster Micro — Edge AI & Micro-Services Gateway",
    category: "Distributed Systems & GenAI Platform",
    imageUrl: "/02.png",
    liveUrl: "https://micro.gabster.ai/en",
    techStack: ["Node.js", "TypeScript", "Python", "FastAPI", "Redis", "Kafka", "OpenAI API", "Docker"],
    description: `
      **Project Overview:**
      Gabster Micro provides ultra-low latency API gateway infrastructure for micro-agents, serving high-throughput generative AI workloads and edge-data transformation for real-time applications.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Core System Architecture:** Brent defined the dynamic message-routing pipeline and asynchronous event-driven model using Kafka and Redis, enabling the system to process tens of thousands of requests per second smoothly.
      * **Advanced Technical Breakthrough:** Overcame massive latency bottlenecks in LLM context routing by engineering an in-memory intelligent prompt-caching system that eliminated duplicate upstream model calls.
      * **Team Guidance & Strategic Decisions:** Advised executive leadership and led cross-functional teams on adopting fail-safe circuit breaker patterns and strict rate-limiting policies to safeguard downstream model dependencies.
      * **Key Innovation:** Pioneered an automated fallback routing framework that dynamically switches AI model providers based on real-time latency, token cost, and health metrics without breaking end-user state.
    `
  },
  {
    id: "knowlium-io",
    title: "Knowlium — Enterprise Knowledge & RAG Engine",
    category: "Enterprise AI & Data Architecture",
    imageUrl: "/03.png",
    liveUrl: "https://knowlium.io/",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Supabase", "Pinecone", "Next.js", "React"],
    description: `
      **Project Overview:**
      Knowlium is an enterprise-grade Retrieval-Augmented Generation (RAG) platform that indexes massive unstructured organization data to enable secure, context-aware semantic search and enterprise AI agent capabilities.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Domain & Data Architecture:** Brent architected the hybrid vector/keyword search pipeline and enterprise-grade tenant isolation model within PostgreSQL and Pinecone, satisfying strict SOC2 data privacy requirements.
      * **Complex Problem Resolution:** Resolved severe context window truncation and vector embedding degradation issues by designing a custom semantic chunking algorithm that dynamically parses complex nested documents.
      * **Leadership & Engineering Culture:** Spearheaded architecture design reviews (ADRs) and mentored backend engineers on optimizing high-dimensional vector index queries under concurrent high-throughput workloads.
      * **Key Innovation:** Conceived a deterministic "Human-in-the-loop" approval state machine that interfaces directly with LLM function outputs to prevent hallucinated actions in critical workflow executions.
    `
  },
  {
    id: "gethyper-ai",
    title: "GetHyper AI — Multi-Tenant Agentic Workflows",
    category: "Agentic AI & Workflow Automation",
    imageUrl: "/04.png",
    liveUrl: "https://gethyper.ai/",
    techStack: ["React", "TypeScript", "Python", "Anthropic Claude API", "LangChain", "GraphQL", "AWS Lambda"],
    description: `
      **Project Overview:**
      GetHyper AI is an autonomous AI agent workspace that allows teams to build, test, and orchestrate complex multi-step AI agents that execute actions across third-party SaaS APIs.

      **Principal Engineering Leadership & Architectural Impact:**
      * **System Design & Governance:** Brent authored the master system architecture separating non-deterministic LLM reasoning from deterministic business-logic execution modules to ensure complete application reliability.
      * **Critical Engineering Solution:** Designed a self-healing state execution engine that automatically catches API rate-limit errors and schema mismatches during live agent execution, retrying actions safely.
      * **Cross-Team Leadership:** Guided frontend and AI teams in building real-time streaming WebSocket protocols, enabling smooth token rendering and live tool-execution visibility for complex UI states.
      * **Key Innovation:** Created a zero-trust multi-tenant execution sandbox for running arbitrary AI-generated script actions safely inside isolated execution containers.
    `
  },
  {
    id: "skyhook-io",
    title: "Skyhook — Scalable Web3 & Infrastructure Gateway",
    category: "Distributed Web3 & SaaS Platform",
    imageUrl: "/05.png",
    liveUrl: "https://www.skyhook.io/",
    techStack: ["PHP", "Laravel", "Vue.js", "Node.js", "Solidity", "MySQL", "Redis", "Docker"],
    description: `
      **Project Overview:**
      Skyhook delivers high-availability API bridges and transaction processing infrastructure connecting Web2 enterprise backends with Web3 blockchain networks.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Enterprise Scalability Architecture:** Brent redesigned the asynchronous transaction queue, moving away from legacy blocking cron tasks to a horizontally scalable Redis-backed queue system.
      * **Complex System Engineering:** Solved critical blockchain transaction congestion and nonce-collision bugs during peak network spikes by inventing a dynamic gas-price estimator and nonce management lock mechanism.
      * **Technical Coaching & Standards:** Trained senior developers on high-concurrency database indexing, row-level locking strategies, and secure cryptographic key vault operations.
      * **Key Innovation:** Engineered a dual-ledger state reconciliation mechanism that automatically cross-checks on-chain events with internal SQL databases to guarantee 100% financial transaction accuracy.
    `
  },
  {
    id: "stacktura-com2",
    title: "Stacktura — Enterprise Software Architecture System",
    category: "Enterprise Software & Multi-Tenant SaaS",
    imageUrl: "/06.png",
    liveUrl: "https://stacktura.com",
    techStack: ["C#", ".NET Core", "SQL Server", "React", "TypeScript", "Azure DevOps", "Kubernetes"],
    description: `
      **Project Overview:**
      Stacktura is a high-performance enterprise SaaS framework designed for enterprise organizations requiring strict tenant isolation, customizable domain logic, and compliance auditing.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Principal-Level Domain Modeling:** Brent modeled the entire domain architecture and domain-driven design (DDD) patterns, establishing clean boundaries between tenant data isolation, authorization, and billing services.
      * **High-Level Problem Solving:** Eliminated multi-tenant database contention issues by implementing a dynamic schema routing engine that seamlessly distributes high-volume tenants to dedicated database instances.
      * **Advisory & Executive Influence:** Led technical strategy discussions with client enterprise architects, establishing software engineering best practices, CI/CD automated test gates, and code review standards.
      * **Key Innovation:** Invented a dynamic RBAC (Role-Based Access Control) evaluation system capable of resolving deeply nested permission hierarchies in under 3 milliseconds.
    `
  },
  {
    id: "scaffoldhub-io",
    title: "ScaffoldHub — Full-Stack Application Generator",
    category: "Developer Tools & Full-Stack Automation",
    imageUrl: "/07.png",
    liveUrl: "https://scaffoldhub.io/",
    techStack: ["Node.js", "Express", "React", "Vue.js", "MongoDB", "PostgreSQL", "Prisma", "Docker"],
    description: `
      **Project Overview:**
      ScaffoldHub is an advanced developer tool and code generation engine that builds production-ready enterprise full-stack web applications with built-in authentication, ORM integration, and admin dashboards.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Framework Engineering & Design:** Brent architected the core code AST (Abstract Syntax Tree) transformation engine that dynamically generates modular backend services and frontend UI components based on user schemas.
      * **Overcoming Technical Limits:** Solved code generation redundancy and circular dependency bugs across multiple SQL and NoSQL database adapters (MongoDB, Postgres, MySQL) by building a unified abstract data layer.
      * **Mentorship & Team Leadership:** Conducted architecture reviews for junior and senior contributors, defining strict modular code standards that allowed 3rd-party developers to easily write plugins.
      * **Key Innovation:** Designed an automated database migration generator that compares custom schema changes and safely produces backward-compatible SQL migration scripts automatically.
    `
  },
  {
    id: "munus-io",
    title: "Munus — Digital Assets & Smart Contract Operations",
    category: "Web3 Platform & Financial Engineering",
    imageUrl: "/08.png",
    liveUrl: "https://munus.io/",
    techStack: ["TypeScript", "Next.js", "React", "Ethers.js", "Solidity", "Tailwind CSS", "GraphQL", "Node.js"],
    description: `
      **Project Overview:**
      Munus is a decentralized finance and digital asset management platform built to provide institution-grade security, automated smart contract execution, and seamless cross-chain portfolio tracking.

      **Principal Engineering Leadership & Architectural Impact:**
      * **Platform Architecture & Security:** Brent defined the high-level security architecture and Web3 state machine, ensuring end-to-end cryptographic integrity across web wallets and automated smart contract interactions.
      * **Solving Complex Web3 Edge Cases:** Resolved high-concurrency RPC node throttling and network synchronization delays by architecting a custom multi-provider fallback web-socket bridge that keeps real-time portfolio metrics synced across chains without UI blocking.
      * **Technical Advisory & Team Mentorship:** Led technical discussions with smart contract auditors and guided frontend engineers on implementing strict memory management and preventing memory leaks in persistent Web3 streaming sessions.
      * **Key Innovation:** Designed an automated transaction payload verification engine that simulates smart contract calls client-side before submission, preventing failed gas fees and user errors by over 92%.
    `
  }
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const pageTitle = "Selected Work & Engineering Portfolio | Brent Lee Jones";
  const pageDescription =
    "Explore featured engineering projects by Brent Lee Jones, including cloud infrastructure tools, RAG engines, multi-tenant AI systems, and enterprise SaaS platforms.";
  const canonicalUrl = "https://brentleejones.dev/work";
  const ogImageUrl = "https://brentleejones.dev/01.png";

  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projectsData.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": project.title,
          "applicationCategory": project.category,
          "url": project.liveUrl,
          "image": `https://brentleejones.dev${project.imageUrl}`
        }
      }))
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const firstRow = projectsData.slice(0, 2);
  const remainingProjects = projectsData.slice(2);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(workSchema)}
        </script>
      </Helmet>
      <div>
        <MarqueeSection />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
          >
            {firstRow.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
              >
                <Card imageUrl={project.imageUrl} title={project.title} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-8"
          >
            {remainingProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
              >
                <Card imageUrl={project.imageUrl} title={project.title} />
              </motion.div>
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-3xl font-normal text-white tracking-wider my-28"
          >
            More work available{" "}
            <Link to="/contact" className="underline text-[#c5ae77]">
              upon request
            </Link>
            .
          </motion.h2>
        </Container>
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}