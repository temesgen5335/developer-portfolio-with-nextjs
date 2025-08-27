import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLichess } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AviProfile() {
  return (
    <div className="flex justify-center items-center w-full h-fit">
      <motion.div
        className="relative w-full max-w-2xl bg-[#1f2937]/70 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-[#3f3f55] shadow-[0_0_30px_rgba(79,70,229,0.15)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 18,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="relative w-40 h-56 sm:w-56 sm:h-72">
            <Image
              src="/avi2.jpg"
              alt="Temesgen Gebreabzgi"
              fill
              className="rounded-xl object-cover shadow-xl border border-[#2f2f42]"
            />
          </div>


          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl font-semibold text-white mb-1 tracking-tight">
              Temesgen Gebreabzgi
            </h2>
            <h3 className="text-[#7f5af0] text-lg font-medium mb-2">
              AI Software Engineer
            </h3>
            <p className="text-sm text-[#adb7be] mb-4 leading-relaxed">
              Certified AI Engineer · Building Scalable Backend Systems
            </p>

            {/* Socials */}
            <div className="flex justify-center sm:justify-start gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/temesgen-gebreabzgi",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/temesgen5335",
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: "https://chess.com/member/theunderdogpeasant",
                  icon: SiLichess,
                  label: "Chess.com",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2d3748] hover:bg-[#7f5af0]/90 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
