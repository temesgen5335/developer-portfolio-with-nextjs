"use client";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f2c59] via-[#355c8d] to-[#5c3b20]">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-400 rounded-full opacity-80"
          style={{
            width: `${Math.random() * 50 + 30}px`,
            height: `${Math.random() * 50 + 30}px`,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Background;
