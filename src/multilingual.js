import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translations from public/locales folder
  .use(LanguageDetector) // Detect user's language preference
  .use(initReactI18next) // Connect with React
  .init({
    fallbackLng: "en", // Default language
    debug: false, // Disable debug in production
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    react: {
      useSuspense: false, // Avoids issues with Suspense
    },
  });

export default i18n;