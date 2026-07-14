import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Available for Internships Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 transition-transform duration-300 hover:scale-105">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Available for Internships & Projects
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
          Omar Emad Samad
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-medium text-slate-200 mb-2">
          Software Engineering Student <span className="text-blue-500 font-normal">|</span> Software Engineering Intern
        </h2>

        {/* Subtitle / University */}
        <p className="text-sm md:text-base font-medium text-blue-500/90 tracking-wide uppercase mb-6">
          University of Kurdistan Hawler
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed mb-10">
          Passionate about building modern web applications, mobile applications, and scalable software systems. 
          Currently expanding my expertise in React, Laravel, MySQL, and modern software engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-900/20 group"
          >
            View Projects
            <HiArrowRight className="ml-2.5 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/omaremadsamad-star"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub Profile"
            >
              <FaGithub className="mr-2 h-5 w-5" />
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/omar-emad-0194a71b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="mr-2 h-5 w-5 text-blue-500" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
