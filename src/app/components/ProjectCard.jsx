import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div 
      className="relative group rounded-xl overflow-hidden bg-[#181818] h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-48 sm:h-64 w-full relative"
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with links */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-12 w-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-4">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        
        {/* Description with hover effect */}
        <div className="relative overflow-hidden">
          <motion.p 
            className="text-[#ADB7BE] text-sm absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {description}
          </motion.p>
          <div className="h-0 group-hover:h-auto transition-all duration-300">
            <p className="text-transparent">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
