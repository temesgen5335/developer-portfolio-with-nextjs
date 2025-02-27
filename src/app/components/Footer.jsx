import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white bg-[#121212] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href={"/"} className="text-xl md:text-3xl text-neonCy font-semibold">
            Temesgen<span className="text-neonCyan">.AI</span>
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="text-slate-400 hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com/temesgen_5335" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/temesgen5335" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/temesgen-gebreabzgi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/temesgen5335" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center text-slate-600">
        <span>Temesgen 2025 &copy; All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
