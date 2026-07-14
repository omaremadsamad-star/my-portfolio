import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for visual navbar style adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg shadow-slate-950/20 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="text-white font-semibold text-lg tracking-tight hover:text-blue-500 transition-colors duration-200"
        >
          Omar Emad<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-white font-medium text-sm transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Omar_CV.pdf"
            download="Omar_Emad_Samad_CV.pdf"
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none transition-colors duration-200"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden fixed top-[73px] left-0 w-full bg-slate-950/95 border-b border-slate-900 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white font-medium text-base py-2 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Omar_CV.pdf"
            download="Omar_Emad_Samad_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-2.5 text-base font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
