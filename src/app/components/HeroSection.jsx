"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AviProfile from "./AviProfile";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b50b3] to-[#6f74d3]">
                Building AI-Driven Systems
              </span>
              <br />
              <span className="text-white">for a Smarter Future</span>
            </h1>
            <p className="text-[#ADB7BE] text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Turning ideas into intelligent solutions—building scalable AI systems 
              that empower innovation and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-[#4b50b3] hover:bg-[#5c61c7] text-white font-medium transition-all duration-300 text-center"
              >
                Let&apos;s connect
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-full border-2 border-[#4b50b3] text-white hover:bg-[#4b50b3] transition-all duration-300 text-center"
              >
                Download CV
              </Link>
            </div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <AviProfile />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;