import { FiChevronUp, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm py-12 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Title */}
        <div className="flex flex-col items-center md:items-start">
          <a 
            href="#home" 
            className="text-white font-semibold text-base tracking-tight hover:text-blue-500 transition-colors duration-200"
          >
            Omar Emad<span className="text-blue-500">.</span>
          </a>
          <p className="text-slate-500 text-xs mt-1.5 text-center md:text-left">
            © {new Date().getFullYear()} Omar Emad Samad. All rights reserved.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/omaremadsamad-star"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white text-lg transition-colors duration-200"
              aria-label="GitHub Link"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-emad-0194a71b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white text-lg transition-colors duration-200"
              aria-label="LinkedIn Link"
            >
              <FiLinkedin />
            </a>
          </div>

          <div className="h-4 w-px bg-slate-800" />

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg transition-all duration-200 shadow-md shadow-slate-950/40 hover:-translate-y-0.5 group"
            aria-label="Back to top"
          >
            <FiChevronUp className="text-lg group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
