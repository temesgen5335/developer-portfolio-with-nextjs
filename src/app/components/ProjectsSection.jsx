"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ethiopian Startup Community platform",
    description: "A unified and thriving Ethiopian startup community platform, where entrepreneurs, investors, government bodies, and other ecosystem builders and support organizations collaborate to accelerate startup growth and innovation. Built an inclusive, accessible, and sustainable digital platform that connects and supports all stakeholders of the startup ecosystem—entrepreneurs, investors, accelerators, incubators, training providers, and government agencies—in fostering the growth and development of startups in Ethiopia.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects",
  },
  {
    id: 2,
    title: "Fetir Ecommerece Website",
    description: "This project aims to empower creative artists and craftsmen by providing a platform to showcase, sell, and gain recognition for their unique and innovative creations",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects",
  },
  {
    id: 3,
    title: "ELO A decentralized application (DApp)",
    description: "A decentralized application (DApp) ELO stands for Effortless Order Foods. ELO is designed to reward users for their orders. The pre-sale platform currently allows users to buy ELO tokens before our public launch. The staking functionality will allow holders to stake their tokens and earn rewards, while the trading interface is aimed at providing liquidity and facilitating transactions among users.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects",
  },
  {
    id: 4,
    title: "Crypto trading Engineering",
    description: "Built a reliable and scalable platform for crypto back-testing trading strategies. That leverages advanced time-series forecasting methods to predict future price trends with greater accuracy.",
    image: "/images/projects/4.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/temesgen5335/crypto-trading-engineering-scalable-backtesting-infrastructure.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Scalable Data Warehouse for LLM Fine-tuning ",
    description: "Built a scalable data warehouse for Large Language Model (LLM) fine-tuning with a team of 5. Empowered Amharic language customer support and engagement using LLM capabilities. We've achieved this by fine-tuning the Llama model on a dataset of Amharic news articles scraped from various websites.",
    image: "/images/projects/5.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/temesgen5335/data-warehouse-for-llm-finetuning.git",
    previewUrl: "/projects",
  },
  {
    id: 6,
    title: "Automated Storyboard Synthesis for Digital Advertising",
    description: "Developed an automated system that transforms textual descriptions of advertisement concepts and assets into detailed, visually compelling storyboards by integration of cutting-edge machine learning, natural language processing, and computer vision technologies to revolutionize the ad creation process.",
    image: "/images/projects/6.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/temesgen5335/Automated-Storyboard-Synthesis-for-Digital-Advertising.git",
    previewUrl: "/projects",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        My Projects
      </h2>
      
      {/* Tags */}
      <div className="flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="h-full"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
