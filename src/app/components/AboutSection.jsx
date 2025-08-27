"use client";
import React, { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TabButton from "./TabButton"; // Assumes a styled button component

// ========== SkillBar ==========
const SkillBar = ({ skill, level, duration = 1.5 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm text-white mb-1">
        <span>{skill}</span>
        <span className="text-[#ADB7BE]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration }}
        />
      </div>
    </div>
  );
};

// ========== Tab Content Animation ==========
const TabContent = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

// ========== Tab Data ==========
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-8">
        {/* Programming + AI */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#192339] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">💻</span> Programming
            </h3>
            <SkillBar skill="Python" level={100} />
            <SkillBar skill="JavaScript" level={85} />
            <SkillBar skill="TypeScript" level={80} />
            <SkillBar skill="GoLang" level={65} />
          </div>
          <div className="bg-[#192339] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🧠</span> AI & Machine Learning
            </h3>
            <SkillBar skill="PyTorch / TensorFlow" level={88} />
            <SkillBar skill="Computer Vision" level={85} />
            <SkillBar skill="NLP" level={80} />
            <SkillBar skill="MLOps" level={75} />
          </div>
        </div>

        {/* Specializations */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend & Web",
              icon: "🌐",
              skills: ["React", "Next.js", "Svelte", "Tailwind CSS", "Flask"],
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Cloud & DevOps",
              icon: "☁️",
              skills: ["Docker", "CI/CD", "AWS", "Kubernetes", "Linux"],
              color: "from-orange-500 to-yellow-500",
            },
            {
              title: "Databases",
              icon: "🗄️",
              skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs"],
              color: "from-green-500 to-teal-500",
            },
          ].map((cat, i) => (
            <motion.div
              key={i}
              className="bg-[#192339] rounded-xl p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-bold flex items-center mb-2">
                <span className="text-2xl mr-2">{cat.icon}</span> {cat.title}
              </h3>
              <div className={`h-1 w-full bg-gradient-to-r ${cat.color} mb-3 rounded-full`} />
              <ul className="text-sm text-[#ADB7BE] space-y-1">
                {cat.skills.map((s, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white transition duration-200 pl-1"
                  >
                    • {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: "🎓",
            degree: "BSc. in Information Systems",
            school: "Addis Ababa University",
            location: "Ethiopia",
            url: "http://www.aau.edu.et/",
          },
          {
            icon: "🤖",
            degree: "AI/ML Engineering Program",
            school: "10Academy",
            location: "Remote",
            url: "https://www.10academy.org/",
          },
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-[#192339] rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="text-3xl mb-3 block">{edu.icon}</span>
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <a
              href={edu.url}
              className="text-[#ADB7BE] hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {edu.school}
            </a>
            <p className="text-sm text-[#ADB7BE] mt-1">{edu.location}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "AI Fundamentals",
            org: "IBM",
            url: "https://www.credly.com/org/ibm/badge/artificial-intelligence-fundamentals",
            icon: "🤖",
          },
          {
            title: "Machine Learning",
            org: "Kaggle",
            url: "https://www.kaggle.com/learn/certification/intermediate-machine-learning",
            icon: "📊",
          },
          {
            title: "Data Analysis",
            org: "Udacity",
            url: "https://graduation.udacity.com/",
            icon: "📈",
          },
          {
            title: "Python Programming",
            org: "Udemy",
            url: "https://www.udemy.com/certificate/",
            icon: "🐍",
          },
          {
            title: "Cybersecurity",
            org: "Cisco",
            url: "https://www.credly.com/org/cisco/badge/",
            icon: "🔒",
          },
        ].map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#192339] rounded-xl p-6 block hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="text-3xl mb-3 block">{cert.icon}</span>
            <h4 className="text-lg font-bold">{cert.title}</h4>
            <p className="text-sm text-[#ADB7BE]">{cert.org}</p>
          </motion.a>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Image and Intro */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            <Image
              src="/images/about-image.jpeg"
              width={500}
              height={500}
              alt="Portrait of the developer"
              className="rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#7f5af0]">About Me</h2>
            <p className="text-lg text-[#ADB7BE] leading-relaxed">
              I'm a full-stack developer and AI engineer with a passion for creating smart, scalable, and accessible digital solutions. My work blends advanced machine learning techniques with clean, modern frontend experiences. I enjoy building tools that not only solve problems but also delight users.
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              selectTab={() => handleTabChange(t.id)}
              active={tab === t.id}
            >
              {t.title}
            </TabButton>
          ))}
        </div>

        {/* Tab Content */}
        <TabContent>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </TabContent>
      </div>
    </section>
  );
};

export default AboutSection;
