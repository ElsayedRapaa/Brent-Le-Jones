import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";

export default function About() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const pageTitle = "About Brent Lee Jones | Principal AI & SaaS Engineer";
  const pageDescription =
    "Brent Lee Jones is a Principal Software Engineer & AI Architect with 18+ years of experience building scalable SaaS, enterprise cloud infrastructure, RAG systems, and AI-powered applications.";
  const canonicalUrl = "https://brentleejones.dev/about";
  const ogImageUrl = "https://brentleejones.dev/insta_03.jpg";

  // Structured Data (JSON-LD) for Search Engines
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brent Lee Jones",
    "jobTitle": "Principal AI & SaaS Engineer",
    "url": "https://brentleejones.dev",
    "image": ogImageUrl,
    "sameAs": [
      "https://github.com/brentleejones",
      "https://linkedin.com/in/brentleejones",
      "https://instagram.com/brentleejones"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Texas A&M University",
        "degree": "Master of Computer Science"
      },
      {
        "@type": "EducationalOrganization",
        "name": "University of Arkansas at Fayetteville",
        "degree": "Bachelor of Computer Science"
      }
    ],
    "knowsAbout": [
      "Software Architecture",
      "Artificial Intelligence",
      "SaaS Development",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "RAG Systems",
      "Cloud Infrastructure"
    ]
  };

  const skillsData = [
    {
      title: "Platforms & Frameworks:",
      details: "React, Next.js, Node.js, Python, FastAPI, PHP, Laravel, CodeIgniter, C#, Kubernetes, Docker, Supabase, Redis",
    },
    {
      title: "Languages & AI Skills:",
      details: "TypeScript, JavaScript (ES6+), Python, PHP, C#, HTML5, CSS3, SQL, NoSQL, OpenAI API, Anthropic Claude, RAG, AI Agents, Prompt Engineering",
    },
    {
      title: "Architecture & Engineering:",
      details: "SaaS Architecture, Multi-Tenant Systems, REST & GraphQL APIs, Microservices, Event-Driven Systems, PostgreSQL, MySQL, SQL Server, MongoDB, AWS, CI/CD",
    },
    {
      title: "Education:",
      details: "Master of Computer Science - Texas A&M University (2005-2007) | Bachelor of Computer Science - University of Arkansas at Fayetteville (2001-2005)",
    },
  ];

  const companies = [
    "ActiTrak", "First Orion", "Elyxor", "Mainstream Technologies",
    "AWS", "OpenAI", "Anthropic", "Supabase"
  ];

  const instaImages = [
    "/insta_01.webp",
    "/insta_02.webp",
    "/insta_03.jpg",
    "/insta_04.webp",
    "/insta_05.jpg",
    "/insta_06.webp",
    "/insta_07.jpg",
    "/insta_08.jpg",
    "/insta_09.jpg",
    "/insta_10.jpg",
    "/insta_11.webp",
    "/insta_12.webp",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.12,
      },
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

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Brent Lee Jones Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <Container>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16 pt-12 mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-5/12 shrink-0 flex"
          >
            <div className="relative w-full h-105 sm:h-125 md:h-[clamp(500px,70vh,720px)] overflow-hidden rounded-2xl">
              <img
                src="/about.png"
                alt="Brent Lee Jones - Principal Software Engineer and AI Systems Architect"
                className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full md:w-7/12 flex flex-col space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-light text-white pt-2 text-2xl sm:text-3xl md:text-[54px] tracking-tight"
            >
              Hello, I’m Brent Lee Jones.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              I engineer what comes next. With 18+ years of experience, I operate at the intersection of software architecture, AI, SaaS, distributed systems, and cloud engineering—designing and delivering the systems that power complex products at scale.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              My work spans the entire technology stack, from React, Next.js, TypeScript, Node.js, Python, and FastAPI to PostgreSQL, MongoDB, Redis, AWS, Docker, Kubernetes, microservices, and cloud-native infrastructure. On top of that foundation, I architect production AI systems using LLMs, RAG, embeddings, vector search, AI agents, tool calling, structured outputs, and agentic workflows.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              I go beyond building applications. I architect intelligent systems that connect AI reasoning with real-world software, data, APIs, business rules, and human workflows—while preserving the security, reliability, scalability, and deterministic behavior that production systems demand.
            </motion.p>
            <motion.p variants={itemVariants} className="font-normal text-white tracking-wider text-base md:text-lg">
              Architect. Engineer. Problem Solver. AI Builder. I turn complex ideas into production-grade systems built to scale, evolve, and endure.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                label={"View Resume"}
                action={"/BrentLJones_Resume.pdf"}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full max-w-225 mx-auto pt-24 pb-16 text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="space-y-12 md:space-y-16"
          >
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12"
              >
                <h3 className="text-2xl md:text-[30px] max-w-95 md:leading-[1.2] font-normal md:w-1/2">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed md:w-1/2">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-center text-[40px] my-28 sm:text-[50px] font-normal text-white tracking-wider"
            >
              Recent{" "}
              <Link to="/work" className="underline text-[#c5ae77]">
                Work
              </Link>
              .
            </motion.h2>
            <motion.img
              variants={itemVariants}
              src="/IMG_02.webp"
              alt="Brent Lee Jones Software Engineering Portfolio Showcase"
              className="object-cover max-w-217.5 w-full rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="pt-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-white font-light text-3xl md:text-4xl tracking-wide mb-8 text-center"
            >
              Who I’ve worked with.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white text-center text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-16 font-light"
            >
              Over the course of my 18+ year career, I’ve had the privilege of architecting and building systems for scale across companies of various sizes:
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-12 text-center text-white text-lg md:text-xl font-medium"
            >
              {companies.map((company, index) => (
                <motion.div key={index} variants={itemVariants} className="tracking-wide">
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
      <div className="w-full px-12 pt-32 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-white font-light text-4xl md:text-5xl text-center mb-6 tracking-wide"
          >
            Instagram
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-center text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-1"
          >
            Instagram is a space where I share a glimpse of my life outside of software engineering.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-center text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-3"
          >
            I would love to connect with you, feel free to follow me
          </motion.p>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <a
              href="https://instagram.com/brentleejones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors text-base md:text-lg inline-block"
            >
              @brentleejones
            </a>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
          >
            {instaImages.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedImageIndex(index)}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer bg-neutral-900"
              >
                <img
                  src={src}
                  alt={`Brent Lee Jones personal photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <ImageLightbox
        images={instaImages}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelectIndex={(index) => setSelectedImageIndex(index)}
      />
    </div>
  );
}