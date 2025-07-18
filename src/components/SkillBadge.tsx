/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

// Skill Badge
function SkillBadge({ name }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gray-800 text-gray-300 text-center py-3 px-2 rounded-md text-sm font-medium"
    >
      {name}
    </motion.div>
  );
}

export default SkillBadge;
