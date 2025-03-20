import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-dark text-light py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I am a passionate developer with expertise in AI, Machine Learning, and Web Development.
        I love building intelligent applications that make an impact.
      </motion.p>
    </section>
  );
}