export default function Footer() {
  return (
    <footer className="bg-gray-900 text-light py-6 text-center">
      <p className="text-gray-400">© 2025 Adil Imran. All Rights Reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/adilimran04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/adil04imran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}