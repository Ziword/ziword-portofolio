import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Github, Linkedin, FileText } from "lucide-react";

export const Hero: React.FC = () => {
  const roles = [
    "Senior Software Engineer",
    "IT Supervisor & Tech Lead",
    "System & Database Administrator",
    "Full-Stack Developer",
    "IoT & Infrastructure Specialist",
  ];

  return (
    <section className="relative min-h-screen px-6 flex flex-col items-center justify-center overflow-hidden pt-24 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base font-medium text-black dark:text-slate-400 mb-6 tracking-wide"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-[6.5rem] font-extrabold tracking-tighter mb-4 font-display leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Muhammad{" "}
          <span className="text-gradient">Fikri</span>
        </motion.h1>

        {/* Role Rotator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="h-[40px] overflow-hidden relative w-full mb-8 max-w-md"
        >
          <motion.div
            animate={{
              y: [0, -40, -80, -120, -160, 0],
            }}
            transition={{
              duration: 12.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            {roles.map((role) => (
              <div
                key={role}
                className="text-base md:text-lg font-semibold tracking-tight text-black dark:text-slate-300 h-[40px] flex items-center justify-center"
              >
                {role}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-sm md:text-base text-black dark:text-slate-400 max-w-lg leading-relaxed mb-4 font-medium"
        >
          Senior Software Engineer &amp; IT Supervisor with 5+ years of experience architecting enterprise systems, high-availability database clusters, and plant-to-cloud IoT solutions.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-primary-500" />
          <span className="text-xs font-medium text-black dark:text-slate-400 tracking-wide">
            Surabaya, East Java, Indonesia
          </span>
        </motion.div>

        {/* Social & Languages */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ziword"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ziword/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0A66C2] dark:hover:text-[#3b82f6] transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Languages */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50">
              🇮🇩 Indonesian — Native
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50">
              🇬🇧 English — Professional Working
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            View Projects
          </a>
          <a
            href="resume/CV_Muhammad_Fikri.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-slate-300 dark:border-slate-700 text-black dark:text-slate-300 rounded-full text-sm font-semibold tracking-wide hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Resume / CV
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-slate-300 dark:border-slate-700 text-black dark:text-slate-300 rounded-full text-sm font-semibold tracking-wide hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center justify-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-slate-400 dark:text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};
