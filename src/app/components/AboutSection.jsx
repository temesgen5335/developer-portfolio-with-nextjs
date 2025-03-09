"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillBar = ({ skill, level, duration = 1.5 }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white">{skill}</span>
        <span className="text-[#ADB7BE]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: duration }}
        />
      </div>
    </div>
  );
};

const TabContent = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#192339] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">💻</span>
              Programming Proficiency
            </h3>
            <SkillBar skill="Python" level={100} />
            <SkillBar skill="JavaScript" level={80} />
            <SkillBar skill="TypeScript" level={85} />
            <SkillBar skill="Java" level={75} />
            <SkillBar skill="GoLang" level={60} />
          </div>
          
          <div className="bg-[#192339] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🤖</span>
              AI & ML Expertise
            </h3>
            <SkillBar skill="TensorFlow/PyTorch" level={88} />
            <SkillBar skill="Computer Vision" level={85} />
            <SkillBar skill="NLP" level={82} />
            <SkillBar skill="MLOps" level={78} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Web Dev",
              icon: "🌐",
              skills: ["React", "Svelte", "Next.js", "Flask", "Django", "FastAPI"],
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "DevOps & Cloud",
              icon: "☁️",
              skills: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes"],
              color: "from-orange-500 to-red-500"
            },
            {
              title: "Databases",
              icon: "🗄️",
              skills: ["PostgreSQL", "MongoDB", "MySQL", "Vector DBs"],
              color: "from-green-500 to-emerald-500"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#192339] rounded-2xl p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className={`h-1 w-full bg-gradient-to-r ${category.color} mb-4 rounded-full`} />
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="text-[#ADB7BE] hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {skill}
                  </motion.li>
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
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            school: "Addis Ababa University",
            degree: "BSc. in Information System",
            location: "Ethiopia",
            url: "http://www.aau.edu.et/",
            icon: "🎓"
          },
          {
            school: "10Academy",
            degree: "AI and Machine Learning Engineering",
            location: "Remote",
            url: "https://www.10academy.org/",
            icon: "🤖"
          }
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#192339] rounded-xl p-6 card-hover-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-3xl mb-4 block">{edu.icon}</span>
            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ADB7BE] hover:text-white transition-colors duration-200"
            >
              {edu.school}
            </a>
            <p className="text-[#ADB7BE] mt-2">{edu.location}</p>
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
            icon: "🤖"
          },
          {
            title: "Machine Learning",
            org: "Kaggle",
            url: "https://www.kaggle.com/learn/certification/intermediate-machine-learning",
            icon: "📊"
          },
          {
            title: "Data Analysis",
            org: "Udacity",
            url: "https://graduation.udacity.com/",
            icon: "📈"
          },
          {
            title: "Python Programming",
            org: "Udemy",
            url: "https://www.udemy.com/certificate/",
            icon: "🐍"
          },
          {
            title: "Cybersecurity",
            org: "Cisco",
            url: "https://www.credly.com/org/cisco/badge/",
            icon: "🔒"
          }
        ].map((cert, index) => (
          <motion.a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#192339] rounded-xl p-6 card-hover-effect block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-3xl mb-4 block">{cert.icon}</span>
            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
            <p className="text-[#ADB7BE]">{cert.org}</p>
          </motion.a>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" ref={ref}>
      <div className="container mx-auto px-4 py-8">
        {/* Top Section - Image and About Text */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <Image 
              src="/images/about-image.jpeg" 
              width={400} 
              height={400}
              className="rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 w-full"
              alt="About me image"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
          </div>

          <div className="text-left">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-base lg:text-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I am a full stack developer and AI engineer with a passion for creating
              intelligent and responsive applications. With expertise in both web development
              and machine learning, I bridge the gap between innovative AI solutions and
              user-friendly applications. I thrive on challenging projects that combine
              cutting-edge technology with practical business solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Section - Tabs and Content */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-row justify-center space-x-4 mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8 w-full">
            <TabContent>
              {TAB_DATA.find((t) => t.id === tab).content}
            </TabContent>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
