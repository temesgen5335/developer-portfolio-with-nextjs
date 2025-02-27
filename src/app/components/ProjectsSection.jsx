"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ethiopian Startup Community platform",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Fetir Ecommerece Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ELO A decentralized application (DApp)",
    description: "A decentralized application (DApp) ELO stands for Effortless Order Foods. ELO is designed to reward users for their orders. The pre-sale platform currently allows users to buy ELO tokens before our public launch. The staking functionality will allow holders to stake their tokens and earn rewards, while the trading interface is aimed at providing liquidity and facilitating transactions among users.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Automated Storyboard Synthesis for Digital Advertising",
    description: "Developed an automated system that transforms textual descriptions of advertisement concepts and assets into detailed, visually compelling storyboards by integration of cutting-edge machine learning, natural language processing, and computer vision technologies to revolutionize the ad creation process.",
    image: "/images/projects/6.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/temesgen5335/Automated-Storyboard-Synthesis-for-Digital-Advertising.git",
    previewUrl: "/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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
