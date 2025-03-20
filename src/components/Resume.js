import React from "react";

export default function Resume() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">My Resume</h2>

      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Education Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
          <p className="text-lg">🎓 AI/ML Engineering Student</p>
          <p className="text-gray-400">CMR ENGINEERING COLLEGE | 2026</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">Skills</h3>
          <p className="text-lg"> Machine Learning | Deep Learning | React.js | Python | Web Development</p>
          <p className="text-lg"> TensorFlow | PyTorch | OpenCV | NLP | Data Science</p>
        </div>

        {/* View and Download Resume Buttons */}
        <div className="flex gap-4 justify-center">
          {/* View Resume (Opens in New Tab) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            🔍 View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Adil_Imran_Resume.pdf"
            className="bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}