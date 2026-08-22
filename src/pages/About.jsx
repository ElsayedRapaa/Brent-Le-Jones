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
      details: "React, NextJS, WordPress, Drupal, Shopify, Tailwind, Foundation",
    },
    {
      title: "Languages & Skills:",
      details: "JavaScript, Typescript, HTML, CSS / SCSS, NodeJS, PHP, Git, Web Accessibility",
    },
    {
      title: "Design & Project Management:",
      details: "Figma, Sketch, Adobe Creative Suite, Jira, Asana, Teamwork, Google Workspace, Microsoft Office",
    },
    {
      title: "Education:",
      details: "Bachelor of Science - Web Design and Interactive Media - The Art Institute of Portland (2011-2014)",
    },
  ];

  const companies = [
    "AWS", "Bayer", "Bonne Maman", "Cisco",
    "Deloitte", "Demarini", "FLIR", "Fitbit",
    "Intel", "Nissan", "Rioja", "SOREL",
    "Splunk", "US Bank", "Workday", "Yuga Labs"
  ];

  const instaImages = [
    "/insta_01.webp",
    "/insta_02.webp",
    "/insta_03.webp",
    "/insta_04.webp",
    "/insta_05.webp",
    "/insta_06.webp",
    "/insta_07.webp",
    "/insta_08.webp",
    "/insta_09.webp",
    "/insta_10.webp",
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
              src="/IMG_01.webp"
              alt="James-Photo"
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
              className="font-light text-white pt-2 text-3xl sm:text-4xl md:text-[54px] tracking-wide"
            >
              Hello, I’m Jameson.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              I’ve always been drawn to building and creative problem-solving, especially when given the opportunity to think outside-the-box. So naturally, my journey led me to web development, where I could blend my foundational knowledge in web design with the intricate complexities of development, uniting my creativity with my technical expertise. I thrive on collaboration, excelling in environments where I can engage with diverse teams and clients, bringing a unique versatility to every project.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              My role as a liaison for the development team has been instrumental in shaping me into a more well-rounded professional. It's allowed me to extend beyond my technical proficiencies in development, giving me a broader view of projects. This experience has been pivotal in understanding and meeting the challenging demands of various roles, encompassing responsibilities as a developer, technical lead, frontend team lead, and in client communication.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-8">
              My ability to bridge the gap between technical and non-technical stakeholders, combined with a deep understanding of both development and design principles, enables me to lead and contribute to projects with a balanced and comprehensive approach.
            </motion.p>
            <motion.p variants={itemVariants} className="font-normal text-white tracking-wider text-base md:text-lg">
              I am currently a Senior Product Manager at{" "}
              <a
                href="https://yuga.com/"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#c5ae77]"
              >
                Yuga Labs
              </a>
              .
            </motion.p>
            <motion.p variants={itemVariants} className="font-normal text-white tracking-wider text-base md:text-lg">
              When I am not building online, I enjoy going on adventures around the Pacific Northwest, savoring morning coffee with a book in hand, spending quality time with my friends and family, traveling, and learning new things.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                label={"View Resume"}
                action={"https://jamesonnuss.com/s/Jameson-Nuss-Resume-2025.pdf"}
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
              Over the course of my professional career I have had the opportunity to work on projects with companies of all sizes. Here are some of the companies I’ve worked with:
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
            Instagram is space where I share some of life's adventures.
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
              @jamesonnuss
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