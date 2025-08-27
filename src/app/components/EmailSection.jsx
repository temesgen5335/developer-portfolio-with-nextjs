"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mqadaepr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-24 bg-[#0D0F1A] text-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Message & Socials */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#7f5af0]">
            Let&apos;s Connect
          </h2>
          <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
            I&apos;m open to new opportunities that involve building smart, scalable
            systems and solving meaningful problems. Feel free to reach out, 
            I&apos;ll do my best to respond promptly.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/temesgen5335"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Image src={GithubIcon} alt="GitHub icon" width={32} height={32} />
            </a>
            <a
              href="https://linkedin.com/in/temesgen-gebreabzgi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Image src={LinkedinIcon} alt="LinkedIn icon" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-[#161B22] p-6 rounded-xl shadow-lg">
          {emailSubmitted ? (
            <p className="text-green-500 text-sm">
              ✅ Email sent successfully. I’ll get back to you soon!
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-[#0F111A] border border-[#2A2D3A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  placeholder="Let's collaborate"
                  className="w-full px-4 py-2 bg-[#0F111A] border border-[#2A2D3A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Tell me what’s on your mind..."
                  className="w-full px-4 py-2 bg-[#0F111A] border border-[#2A2D3A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7f5af0] hover:bg-[#5c3dd0] text-white font-medium py-2.5 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

