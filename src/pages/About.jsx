import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";

export default function About() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const skillsData = [
    {
      title: "Platforms & Frameworks:",
      details: "React, Next.js, Node.js, Python, FastAPI, PHP, Laravel, CodeIgniter, C#, Kubernetes, Docker, Supabase, Redis",
    },
    {
      title: "Languages & AI Skills:",
      details: "TypeScript, JavaScript (ES6+), Python, PHP, C#, HTML5, CSS3, SQL, NoSQL, OpenAI API, Anthropic Claude, RAG, AI Agents",
    },
    {
      title: "Architecture & Engineering:",
      details: "SaaS Architecture, Multi-Tenant Systems, REST & GraphQL APIs, Microservices, PostgreSQL, MySQL, SQL Server, MongoDB, AWS, CI/CD",
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
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 pt-12 mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 shrink-0"
          >
            <img
              src="/insta_03.jpg"
              alt="Brent-Photo"
              className="w-full h-auto max-h-150 object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full md:w-1/2 flex flex-col space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-light text-white pt-2 text-2xl sm:text-3xl md:text-[54px] tracking-tight"
            >
              Hello, I’m Brent Lee Jones.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              I’m a Principal Software Engineer with over 18 years of experience architecting and delivering production software across frontend, backend, cloud infrastructure, distributed systems, and AI-powered applications. My focus is on turning complex business requirements into scalable, reliable, and highly maintainable systems.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              Throughout my career, I’ve moved seamlessly across system boundaries—from domain modeling and application architecture to cloud infrastructure, performance optimization, and AI engineering. I thrive on collaborating closely with product and engineering teams to build robust software built to evolve.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              My expertise spans modern full-stack frameworks, multi-tenant SaaS architectures, complex data systems, and cutting-edge GenAI/RAG implementations, enabling me to lead technical strategies with both principal-level judgment and hands-on execution.
            </motion.p>
            <motion.p variants={itemVariants} className="font-normal text-white tracking-wider text-base md:text-lg">
              I am currently working as a Principal AI & SaaS Engineer, building AI-powered SaaS platforms with Next.js, React, TypeScript, Python, FastAPI, Supabase, and PostgreSQL.
            </motion.p>
            <motion.p variants={itemVariants} className="font-normal text-white tracking-wider text-base md:text-lg">
              Based in Arkansas, US, when I am not architecting systems, I enjoy exploring emerging technologies, mentoring engineers, and continuous learning.
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
            <motion.h1
              variants={itemVariants}
              className="text-center text-[40px] my-28 sm:text-[50px] font-normal text-white tracking-wider"
            >
              Recent{" "}
              <Link to="/work" className="underline text-[#c5ae77]">
                Work
              </Link>
              .
            </motion.h1>

            <motion.img
              variants={itemVariants}
              src="/IMG_02.webp"
              alt="Img"
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
            <motion.h1
              variants={itemVariants}
              className="text-white font-light text-3xl md:text-4xl tracking-wide mb-8 text-center"
            >
              Who I’ve worked with.
            </motion.h1>

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
            <p
              className="text-gray-200 hover:text-white transition-colors text-base md:text-lg"
            >
              @brentleejones
            </p>
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
                  alt={`Instagram ${index + 1}`}
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