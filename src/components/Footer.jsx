import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [location.pathname]);

  const animatedClass = (delayClass) =>
    `transition-all duration-700 ease-out transform ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <footer ref={sectionRef} className="w-full bg-black text-white px-6 md:px-16 py-16 font-kepler">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          <div className="max-w-md space-y-6">
            <h2 className={`text-2xl md:text-3xl font-normal tracking-wide mb-8 ${animatedClass("delay-300")}`}>
              Let’s Build Together
            </h2>

            <p className={`text-white leading-relaxed text-base md:text-lg ${animatedClass("delay-600")}`}>
              Feel free to email me with your <br /> questions, project ideas or just to <br /> say hello!
            </p>

            <div className={animatedClass("delay-900")}>
              <a
                href="mailto:hello@brentleejones.com"
                className="inline-block border-b border-white pb-1 text-lg hover:opacity-70 transition-opacity duration-300"
              >
                Get in touch.
              </a>
            </div>
          </div>

          <div className="space-y-10 md:pr-20">
            <h3 className={`text-xl font-normal ${animatedClass("delay-300")}`}>
              Connect
            </h3>

            <p className={`text-gray-200 text-lg ${animatedClass("delay-600")}`}>
              hello@brentleejones.com
            </p>

            <div className={`flex items-center gap-4 text-xl ${animatedClass("delay-900")}`}>
              <a href="https://www.linkedin.com/in/brentleejones/" className="hover:opacity-70 transition-opacity text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/brentleejones" className="hover:opacity-70 transition-opacity text-2xl">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/brentleejones/" className="hover:opacity-70 transition-opacity text-2xl">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/brentleejones" className="hover:opacity-70 transition-opacity text-2xl">
                <FaTwitter />
              </a>
              <a href="mailto:hello@brentleejones.com" className="hover:opacity-70 transition-opacity text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        <div className={`mt-16 pt-8 text-center text-sm text-white ${animatedClass("delay-1200")}`}>
          <p>© BRENT LEE JONES Nuss 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}