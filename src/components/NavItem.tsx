/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion,useTransform } from 'framer-motion';
import React from 'react';

// Navigation Item with scroll progress indicator
function NavItem({ href, text, scrollYProgress, range }: any) {
  const width = useTransform(scrollYProgress, range, ['0%', '100%']);
  return (
    <a href={href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
      <motion.div style={{ width }} className="h-[2px] bg-cyan-400" />
      <span className="text-lg">{text}</span>
    </a>
  );
}

export default NavItem;