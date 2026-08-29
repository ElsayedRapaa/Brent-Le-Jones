import { useEffect, useState } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // استيراد Link

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        className={`
          h-34
          w-full
          flex
          items-center
          bg-black
          sticky
          top-0
          z-50
          transition-all
          duration-300
          ease-in-out
          ${isScrolled ? "py-2.5" : "py-3.75"}
        `}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/NLOGO.png" alt="Logo" height={120} width={120} />
            </Link>

            <nav className="md:flex items-center space-x-4 hidden">
              <Navbar link="Home" />
              <Navbar link="Work" />
              <Navbar link="About" />
              <Navbar link="Contact" />
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center z-50 cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-6 h-[1.5px] bg-gray-300 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-6 h-[1.5px] bg-gray-300 rounded-full"
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center md:hidden"
          >
            <div className="absolute top-8 left-8">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src="/NLOGO.png" alt="Logo" height={50} width={50} />
              </Link>
            </div>

            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-y-20 w-full"
            >
              {navLinks.map((link, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-5xl font-light tracking-wider hover:text-gray-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}