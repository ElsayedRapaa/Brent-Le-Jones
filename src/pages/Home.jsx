import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="pt-12 px-4 w-full"
    >
      <motion.h3
        variants={itemVariants}
        className="
          text-2xl
          max-w-210
          mx-auto
          my-8
          md:text-[28px]
          text-[30px]
          text-white
          leading-relaxed
          tracking-wide
        "
      >
        Principal Software Engineer with 18+ years of experience architecting and delivering production software across frontend, backend,
        <br />
        <br />
        cloud infrastructure, distributed systems, and AI-powered applications. Deep hands-on expertise across React, TypeScript, Node.js,
        <br />
        <br />
        Python, PHP/Laravel, SQL and NoSQL databases, APIs, Kubernetes, and cloud-native architecture, with a career spanning enterprise
        <br />
        <br />
        systems, large-scale SaaS platforms, and modern AI products. Proven ability to move across system boundaries-from domain modeling
        <br />
        <br />
        and application architecture to production implementation, performance, reliability, and infrastructure-while leading technical
        <br />
        <br />
        decisions that keep complex systems scalable and maintainable. Combines principal-level architectural judgment with hands-on
        <br />
        <br />
        engineering, working closely with product and engineering teams to turn complex business requirements into reliable software built
        to evolve.
      </motion.h3>

      <motion.h3
        variants={itemVariants}
        className="
          text-2xl
          max-w-210
          mx-auto
          mb-8
          md:text-[28px]
          text-[30px]
          text-white
          leading-relaxed
          tracking-wide
        "
      >
        I thrive at the intersection of engineering and product development, helping cross-functional teams navigate complexity from idea to execution. My focus is solving complex technical problems and delivering thoughtful, high-quality solutions that create meaningful impact.
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="
          text-white
          text-[20px]
          max-w-210
          mx-auto
          mt-4
        "
      >
        <em>I’m currently a Senior Product Manager at </em>
        <a
          href="https://yuga.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#c5ae77]"
        >
          Yuga Labs
        </a>
        <em>.</em>
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="
          py-16
        "
      >
        <h1 className="text-center text-[40px] sm:text-[50px] font-normal text-white tracking-wider">
          Recent{" "}
          <Link to="/work" className="underline text-[#c5ae77]">
            Work
          </Link>
          .
        </h1>
      </motion.div>
    </motion.div>
  );
}