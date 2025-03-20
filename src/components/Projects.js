import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A smart chatbot for museums with multilingual support and ticket booking.",
    link: "#",
  },
  {
    title: "Fake News Detection",
    description: "A machine learning model that detects fake news using NLP techniques.",
    link: "#",
  },
  {
    title: "Salary Predictor",
    description: "A machine learning model that predicts salaries based on experience and skill set.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: 1.5,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 mt-4 block hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}