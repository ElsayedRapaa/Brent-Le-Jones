import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Card({ imageUrl, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  return (
    <div className="group flex flex-col space-y-4 my-4 w-full items-center text-center cursor-pointer">
      <div className="w-full aspect-16/10 max-w-142.5 rounded-2xl bg-white p-0 group-hover:p-2 transition-all duration-300 ease-in-out overflow-hidden relative">
        <div className="w-full h-full rounded-[10px] overflow-hidden relative flex items-center justify-center bg-white">
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] z-10"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-2 border-t-[#c5ae77] border-r-transparent border-b-[#c5ae77] border-l-transparent rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-4 h-4 bg-[#c5ae77] rotate-45 rounded-sm shadow-[0_0_12px_#c5ae77]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onLoad={handleImageLoad}
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
              isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md"
            }`}
          />
        </div>
      </div>
      <h3 className="text-xl font-normal text-white w-full max-w-142.5 text-left">
        {title}
      </h3>
    </div>
  );
}