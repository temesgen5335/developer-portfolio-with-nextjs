"use client";
import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import AviProfile from "./AviProfile"; 

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene here
    if (typeof window !== "undefined" && containerRef.current) {
      import("./three").then((module) => {
        module.initializeScene(containerRef.current);
      });
    }
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 flex flex-col sm:flex-row items-center justify-center"
        >
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Building Intelligent Systems for a Smarter Future
              </span>
              <br></br>
            </h2>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptuous.
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Let's connect
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </div>
          <div className="sm:w-1/2">
            <AviProfile /> 
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;