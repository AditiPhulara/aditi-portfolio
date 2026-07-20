import { FaGithub, FaLinkedin, FaEnvelope, FaCloud } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left space-y-2">
          <a
            href="#home"
            className="font-outfit text-lg font-extrabold tracking-wider hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-100">&lt;</span>
            <span className="text-gradient-cloud">Aditi</span>
            <span className="text-purple-400 font-mono text-sm ml-1">.Cloud /&gt;</span>
          </a>
          <p className="text-xs text-slate-400 font-sans">
            &copy; {new Date().getFullYear()} Aditi Fulara. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-400">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links & Status */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <a
              href="https://github.com/AditiPhulara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-400 hover:text-purple-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://linkedin.com/in/aditi-fulara-208346325/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-400 hover:text-purple-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href="mailto:aditifulara@gmail.com"
              className="p-2 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-base" />
            </a>
          </div>

          <div className="flex items-center space-x-1.5 text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-3 py-1 rounded-full">
            <FaCloud className="text-cyan-400 text-xs animate-pulse" />
            <span>Cloud Infrastructure | LPU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
