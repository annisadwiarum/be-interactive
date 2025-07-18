/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import React from 'react';

// Social Media Link
function SocialLink({ href, icon }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

export default SocialLink;