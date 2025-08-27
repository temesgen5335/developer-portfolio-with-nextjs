"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const projects = [
    {
        title: "Chronos Finance",
        shortDescription: "Chronos Inc. is a next-gen, AI-powered financial super app that redefines personal finance through biometric-first security and intelligent automation.",
        fullDescription: "At Chronos, we are building an intelligent personal finance ecosystem powered by AI. Our platform acts as your smartest financial assistant, delivering personalized insights, budgeting strategies, and investment recommendations—all from your real transaction data.",
        tags: ["Fintech", "AI/ML", "AI Agents", "Banking"],
        live: "https://chronos-finance.vercel.app",
        images: ["/images/projects/chronos1.png", "/images/projects/chronos2.png", "/images/projects/chronos3.png", "/images/projects/chronos4.png", "/images/projects/chronos5.png"],
    },
    {
        title: "SolveIT AI Powered Call Center",
        shortDescription: "An AI-powered call center solution for businesses.",
        fullDescription: "SolveIT is an AI-powered call center solution that enhances customer support through real-time, human-like voice and text assistance. Leveraging advanced NLP and machine learning, it delivers accurate responses, contextual document Q&A, and seamless escalation. Designed for global scalability, SolveIT supports over 50 languages to provide always-on, multilingual service.",
        tags: ["AI", "NLP", "Customer Support", "CX"],
        live: "https://solveit.digital",
        images: ["/images/projects/solveit1.png", "/images/projects/solveit2.png", "/images/projects/solveit3.png", "/images/projects/solveit4.png"],
    },
    {
        title: "Ethiopian Startup Community platform",
        shortDescription: "A platform connecting Ethiopian startup stakeholders.",
        fullDescription: "A unified and thriving Ethiopian startup community platform, where entrepreneurs, investors, government bodies, and other ecosystem builders and support organizations collaborate to accelerate startup growth and innovation. Built an inclusive, accessible, and sustainable digital platform that connects and supports all stakeholders of the startup ecosystem—entrepreneurs, investors, accelerators, incubators, training providers, and government agencies—in fostering the growth and development of startups in Ethiopia.",
        tags: ["Next.js", "OpenAI API", "JavaScript"],
        images: ["/images/projects/1.png"],

    },
    {
        title: "Fetir Ecommerece Website",
        shortDescription: "A platform for artists to showcase and sell their creations.",
        fullDescription: "This project aims to empower creative artists and craftsmen by providing a platform to showcase, sell, and gain recognition for their unique and innovative creations.",
        tags: ["Next.js", "E-commerce", "TypeScript"],
        images: ["/images/projects/2.png"],
    },
    {
        title: "ELO A decentralized application (DApp)",
        shortDescription: "A decentralized application (DApp) for effortless food ordering.",
        fullDescription: "A decentralized application (DApp) ELO stands for Effortless Order Foods. ELO is designed to reward users for their orders. The pre-sale platform currently allows users to buy ELO tokens before our public launch. The staking functionality will allow holders to stake their tokens and earn rewards, while the trading interface is aimed at providing liquidity and facilitating transactions among users.",
        tags: ["DApp", "Blockchain", "Web3"],
        images: ["/images/projects/3.png"],
    },
    {
        title: "Crypto trading Engineering",
        shortDescription: "A platform for crypto back-testing trading strategies.",
        fullDescription: "Built a reliable and scalable platform for crypto back-testing trading strategies. That leverages advanced time-series forecasting methods to predict future price trends with greater accuracy.",
        images: ["/images/projects/4.jpg"],
        tags: ["FinTech", "AI/ML", "crypto"],
        repo: "https://github.com/temesgen5335/crypto-trading-engineering-scalable-backtesting-infrastructure.git",
    },
    {
        title: "Scalable Data Warehouse for LLM Fine-tuning ",
        shortDescription: "Built a scalable data warehouse for Large Language Model (LLM) fine-tuning with a team of 5.",
        fullDescription: "Built a scalable data warehouse for Large Language Model (LLM) fine-tuning with a team of 5. Empowered Amharic language customer support and engagement using LLM capabilities. We've achieved this by fine-tuning the Llama model on a dataset of Amharic news articles scraped from various websites.",
        images: ["/images/projects/5.png"],
        tags: [ "AI/ML", "Fine-tuning", "llama2", "hugging-face"],
        repo: "https://github.com/temesgen5335/data-warehouse-for-llm-finetuning.git",
    },
    {
        title: "Automated Storyboard Synthesis for Digital Advertising",
        shortDescription: "Developed an automated system that transforms textual descriptions of advertisement concepts and assets into detailed, visually compelling storyboards.",
        fullDescription: "Developed an automated system that transforms textual descriptions of advertisement concepts and assets into detailed, visually compelling storyboards by integration of cutting-edge machine learning, natural language processing, and computer vision technologies to revolutionize the ad creation process.",
        images: ["/images/projects/6.jpg"],
        tags: ["AI/ML", "computer-vision", "openCV", "yollo"],
        repo: "https://github.com/temesgen5335/Automated-Storyboard-Synthesis-for-Digital-Advertising.git",
    },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <Head>
        <title>Projects | AI Engineer & Frontend Developer</title>
      </Head>
      <main className="min-h-screen bg-[#0d0d11] text-[#e0e0ff] px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#7f5af0] mb-2">
            My Projects
          </h1>
          <p className="text-center text-gray-400 text-sm md:text-base mb-10">
            AI Engineer • Frontend Developer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1a22] border border-[#292940] hover:border-[#7f5af0] rounded-lg p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-[#7f5af0] mb-1">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      {project.shortDescription}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#2b2b3d] text-[#7f5af0] text-xs px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4">
                        {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#7f5af0] border border-[#7f5af0] px-3 py-1 rounded hover:bg-[#7f5af0] hover:text-black transition"
                        >
                            Repo
                        </a>
                        )}
                        {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#7f5af0] border border-[#7f5af0] px-3 py-1 rounded hover:bg-[#7f5af0] hover:text-black transition"
                        >
                            Live
                        </a>
                        )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-[#7f5af0] ml-4 text-2xl"
                  >
                    {expandedIndex === index ? "−" : "+"}
                  </button>
                </div>

                {/* Expanded Content */}
                {Array.isArray(project.images) && project.images.length > 0 ? (
                <div className="overflow-x-auto flex py-4 gap-4">
                    {project.images.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-64 h-40 object-cover rounded-lg border border-[#2a2a3d] shadow"
                    />
                    ))}
                </div>
                ) : (
                <p className="text-sm text-gray-500 italic">No preview images available.</p>
                )}

              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
