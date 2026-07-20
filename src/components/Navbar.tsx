import { useState, useEffect } from 'react';
import { FaCloud, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-cloud py-3.5 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2.5 font-outfit text-xl font-extrabold tracking-wider hover:scale-105 transition-transform group"
        >
          <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:border-purple-500/80 group-hover:bg-purple-900/50 group-hover:text-cyan-400 transition-all shadow-md shadow-purple-500/10">
            <FaCloud className="text-lg animate-pulse" />
          </div>
          <span className="font-bold text-lg">
            <span className="text-slate-100">&lt;</span>
            <span className="text-gradient-cloud">Aditi</span>
            <span className="text-purple-400 font-mono text-sm ml-1">.Cloud /&gt;</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-purple-300 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400'
                    : 'text-slate-400 hover:text-purple-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#projects"
            className="hidden sm:inline-flex items-center space-x-2 text-xs font-bold px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-lg shadow-purple-600/20 hover:shadow-purple-500/40 transition-all active:scale-95 border border-purple-400/20"
          >
            <span>View Projects</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-purple-500/20 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-nav-cloud border-b border-purple-500/20 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-3.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold py-1.5 transition-colors ${
                  isActive ? 'text-purple-300 border-l-2 border-purple-500 pl-3' : 'text-slate-400 pl-1 hover:text-purple-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
