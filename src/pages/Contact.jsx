import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Container from "../components/Container";
import Button from "../components/Button";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
  const pageTitle = "Contact Brent Lee Jones | Get in Touch";
  const pageDescription =
    "Have a project idea, questions, or software engineering inquiry? Contact Brent Lee Jones to discuss SaaS architecture, AI integration, or technical consulting.";
  const canonicalUrl = "https://brentleejones.dev/contact";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Brent Lee Jones",
      "url": "https://brentleejones.dev",
      "sameAs": [
        "https://www.linkedin.com/in/jamesonnuss/",
        "https://github.com/jamesonnuss",
        "https://www.instagram.com/jamesonnuss/",
        "https://twitter.com/jamesonnuss"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/jamesonnuss/" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/jamesonnuss" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/jamesonnuss/" },
    { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com/jamesonnuss" },
    { name: "Email", icon: <FaRegEnvelope />, href: "mailto:hello@jamesonnuss.com" },
  ];

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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <Container>
        <div className="pt-12 pb-24 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 lg:gap-24"
          >
            <motion.div variants={itemVariants} className="w-full md:w-[45%] flex flex-col space-y-8">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-[56px] font-light tracking-wide leading-tight"
              >
                Get in touch.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-white text-base md:text-lg leading-relaxed max-w-sm"
              >
                Feel free to email me with your questions, project ideas or just to say hello!
              </motion.p>
              <motion.div variants={itemVariants} className="space-y-2 pt-2">
                <h2 className="text-xl font-semibold tracking-wide text-white">Email</h2>
                <a
                  href="mailto:hello@jamesonnuss.com"
                  className="block text-white hover:text-gray-300 transition-colors text-base md:text-lg"
                >
                  hello@jamesonnuss.com
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-4 -mt-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="text-white hover:text-gray-300 text-xl transition-colors duration-200"
                  >
                    {item.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-[55%]">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-lg font-light text-white mb-2">Name</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2 space-y-1">
                      <label htmlFor="firstName" className="text-sm text-white font-light mb-2 block">
                        First Name <span className="text-sm text-gray-400 font-light">(required)</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        className="w-full bg-[#eee] text-black px-4 py-3 outline-none border-none"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 space-y-1 mb-2">
                      <label htmlFor="lastName" className="text-sm text-white font-light mb-2 block">
                        Last Name <span className="text-sm text-gray-400 font-light">(required)</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        className="w-full bg-[#eee] text-black px-4 py-3 outline-none border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-lg font-light text-white mb-2">
                    Email <span className="text-sm text-gray-400 font-light">(required)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-[#eee] text-black px-4 py-3 outline-none border-none"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-lg font-light text-white mb-2">
                    Message <span className="text-sm text-gray-400 font-light">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-[#eee] text-black px-4 py-3 outline-none border-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <Button label="Send" type="submit" />
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}