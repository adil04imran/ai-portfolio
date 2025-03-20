import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(language);
    } else {
      console.error("i18n.changeLanguage is not available");
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Adil Imran | AI & Web Developer</h1>

        {/* Language Switcher - Dropdown */}
        <div className="relative">
          <select 
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="appearance-none bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link to="/" className="hover:text-primary">{t("Home") || "Home"}</Link></li>
          <li><Link to="/about" className="hover:text-primary">{t("about_me") || "About"}</Link></li>
          <li><Link to="/projects" className="hover:text-primary">{t("projects") || "Projects"}</Link></li>
          <li><Link to="/resume" className="hover:text-primary">{t("resume") || "Resume"}</Link></li>
          <li><Link to="/contact" className="hover:text-primary">{t("contact") || "Contact"}</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-900 w-full py-4 text-lg transition-all duration-300 transform scale-95">
          <li><Link to="/" className="py-2" onClick={() => setIsOpen(false)}>{t("home") || "Home"}</Link></li>
          <li><Link to="/about" className="py-2" onClick={() => setIsOpen(false)}>{t("about_me") || "About"}</Link></li>
          <li><Link to="/projects" className="py-2" onClick={() => setIsOpen(false)}>{t("projects") || "Projects"}</Link></li>
          <li><Link to="/resume" className="py-2" onClick={() => setIsOpen(false)}>{t("resume") || "Resume"}</Link></li>
          <li><Link to="/contact" className="py-2" onClick={() => setIsOpen(false)}>{t("contact") || "Contact"}</Link></li>
        </ul>
      )}
    </nav>
  );
}