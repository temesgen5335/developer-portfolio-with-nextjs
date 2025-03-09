import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLichess } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AviProfile() {
  return (
    <div className="flex justify-center items-center w-full">
      <motion.div 
        className="relative w-full max-w-md bg-[#1f2937] rounded-2xl p-6 sm:p-8"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/image.jpg"
              alt="Profile Image"
              width={160}
              height={160}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Temesgen Gebreabzgi
            </h2>
            <h3 className="text-[#4b50b3] text-lg mb-2">
              AI Software Engineer
            </h3>
            <p className="text-[#ADB7BE] text-sm mb-4">
              Certified AI Engineer | Building Scalable Backend Systems
            </p>
            
            <div className="flex justify-center sm:justify-start gap-4">
              {[
                {
                  href: "https://www.linkedin.com/in/temesgen-gebreabzgi",
                  icon: FaLinkedin,
                  label: "LinkedIn"
                },
                {
                  href: "https://github.com/temesgen5335",
                  icon: FaGithub,
                  label: "GitHub"
                },
                {
                  href: "https://chess.com/member/theunderdogpeasant",
                  icon: SiLichess,
                  label: "Chess.com"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2d3748] hover:bg-[#4b50b3] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
