/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

// Section with fade-in animation
function AnimatedSection({ id, children }: any) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;