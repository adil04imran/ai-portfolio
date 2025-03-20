import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function Hero() {
  return (
    <motion.section
      className="relative h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-8 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side - Professional Intro */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Hello, I'm <span className="text-blue-400">Adil Imran</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          AI Engineer | Web Developer
        </p>
        <div className="flex gap-6 justify-center md:justify-start">
          <motion.a
            href="https://github.com/adil04imran"
            className="text-gray-300 text-3xl hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/adilimran04"
            className="text-gray-300 text-3xl hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="hidden md:block ml-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/adil.jpg"  
          alt="Adil Imran"
          className="w-72 h-72 rounded-full shadow-lg border-2 border-blue-400"
        />
      </motion.div>
    </motion.section>
  );
}