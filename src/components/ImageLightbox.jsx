import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageLightbox({ images, currentIndex, onClose, onSelectIndex }) {
  const isVisible = currentIndex !== null;

  const handleNext = (e) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      onSelectIndex((currentIndex + 1) % images.length);
    }
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      onSelectIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isVisible) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, currentIndex]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center select-none"
          onClick={onClose}
        >
          {/* زر الإغلاق */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-white/80 hover:text-white text-3xl font-light z-50 p-2 cursor-pointer transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          <div
            onClick={handlePrev}
            className="absolute left-0 top-0 bottom-0 w-1/3 z-30 cursor-pointer flex items-center justify-start pl-6 group"
          >
            <button
              onClick={handlePrev}
              className="p-3 text-white/50 group-hover:text-white transition-colors bg-black/30 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100"
            >
              ❮
            </button>
          </div>

          <div
            onClick={handleNext}
            className="absolute right-0 top-0 bottom-0 w-1/3 z-30 cursor-pointer flex items-center justify-end pr-6 group"
          >
            <button
              onClick={handleNext}
              className="p-3 text-white/50 group-hover:text-white transition-colors bg-black/30 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100"
            >
              ❯
            </button>
          </div>

          <div
            className="relative z-40 max-w-[90vw] max-h-[85vh] p-2 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Instagram detail ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}