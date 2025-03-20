import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send(
        "service_uq0wgdka",
        "template_u3vdrnf",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rKePEbUbYubCCPX1i"
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => setSubmitted(false), 5000);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-lg w-full p-8 rounded-xl shadow-2xl bg-gray-800 bg-opacity-80 backdrop-blur-md hover:shadow-primary transition-shadow duration-300">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">Get in Touch</h2>
        {submitted ? (
          <p className="text-green-400 text-lg text-center">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute left-4 top-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 pl-12 rounded-lg bg-gray-700 text-light focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-400" : "focus:ring-primary"
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 pl-12 rounded-lg bg-gray-700 text-light focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-400" : "focus:ring-primary"
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-gray-700 text-light focus:outline-none focus:ring-2 ${
                  errors.message ? "border-red-400" : "focus:ring-primary"
                }`}
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className={`w-full flex items-center justify-center py-3 rounded-lg font-bold transition-all duration-300 ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-light text-dark"
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}