// --- Preloader Component ---

import { motion, Variants } from "framer-motion";

// Animasi SVG yang akan muncul sebelum halaman utama
const PreLoader = () => {
  const ア_PATH = "M 0 0 L 0 100 L 50 100 M 0 50 L 50 50";
  const ニ_PATH = "M 100 100 L 100 0 L 150 100 L 150 0";
  const サ_PATH = "M 100 100 L 100 0 L 150 100 L 150 0";

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-[#111111]"
    >
      <svg width="150" height="100" viewBox="0 0 150 100">
        <motion.path
          d={ア_PATH}
          stroke="#06b6d4" // cyan-500
          strokeWidth="8"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d={ニ_PATH}
          stroke="#ffffff"
          strokeWidth="8"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d={サ_PATH}
          stroke="#ffffff"
          strokeWidth="8"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
};

export default PreLoader;
