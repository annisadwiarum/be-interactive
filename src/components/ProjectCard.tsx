/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Interactive Project Card
function ProjectCard({ title, description, tags, liveUrl, codeUrl }: any) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0px 0px 15px rgba(56, 189, 248, 0.3)",
        borderColor: "rgba(56, 189, 248, 0.5)"
      }}
      className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 transition-all group"
    >
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-gray-400 mt-2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: any) => (
          <span key={tag} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-auto">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors">
          Lihat Live <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors">
          Lihat Kode <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;