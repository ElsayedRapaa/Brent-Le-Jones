import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const renderFormattedDescription = (text) => {
    return text.split("\n\n").map((paragraph, idx) => {
      if (paragraph.trim().startsWith("**") && paragraph.includes("**:")) {
        const parts = paragraph.split("**:");
        const title = parts[0].replace(/\*\*/g, "");
        const content = parts[1];
        return (
          <div key={idx} className="space-y-1 my-3">
            <h4 className="text-[#c5ae77] font-semibold text-base sm:text-lg">
              {title}:
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {content}
            </p>
          </div>
        );
      }
      return (
        <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base my-2">
          {paragraph.replace(/\*\*/g, "")}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-[#222] rounded-2xl overflow-y-auto shadow-2xl flex flex-col my-auto custom-scrollbar"
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#222] sticky top-0 bg-[#0d0d0d]/95 backdrop-blur-md z-30">
          <div className="flex flex-col pr-4">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#c5ae77]">
              {project.category}
            </span>
            <h2 className="text-lg sm:text-2xl font-normal text-white line-clamp-1">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181818] border border-[#333] flex items-center justify-center text-gray-400 hover:border-[#c5ae77] hover:text-[#c5ae77] transition-all shrink-0 cursor-pointer"
            aria-label="Close Modal"
          >
            ✕
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full min-h-87.5 flex flex-col items-center justify-center space-y-4 p-8"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 border-2 border-t-[#c5ae77] border-r-transparent border-b-[#c5ae77] border-l-transparent rounded-full"
                />
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="w-4 h-4 bg-[#c5ae77] rotate-45 rounded-sm shadow-[0_0_12px_#c5ae77]"
                />
              </div>
              <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase">
                Loading System Architecture...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="p-4 sm:p-6 md:p-8 space-y-6"
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#222]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 border-b border-[#222] pb-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Technologies & Languages
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#181818] border border-[#2e2e2e] rounded-lg text-xs font-medium text-[#c5ae77]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {renderFormattedDescription(project.description)}
              </div>

              <div className="pt-6 border-t border-[#222] flex justify-end">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 space-x-reverse bg-[#c5ae77] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#b39b65] transition-colors duration-300 text-sm sm:text-base"
                >
                  <span>Visit Live Platform</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}