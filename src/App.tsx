import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import NeuralCanvas from './components/NeuralCanvas';
import AICursor from './components/AICursor';
import { FaChevronUp, FaCloud } from 'react-icons/fa';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [path, setPath] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Router listener
  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scrollspy & Scroll-to-top handler
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setPath('/');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center font-mono text-xs text-purple-300 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-slate-950 to-indigo-950/20" />
        <div className="relative z-10 max-w-md w-full glass-cloud-card p-8 rounded-3xl border-purple-500/30 shadow-2xl text-left space-y-3.5 glow-purple">
          <div className="flex items-center space-x-2.5 border-b border-purple-500/20 pb-3 mb-4 text-purple-400 font-bold">
            <FaCloud className="text-cyan-400 text-lg animate-pulse" />
            <span className="font-outfit text-sm">cloud-system.init</span>
          </div>
          <p className="text-slate-500">[2026-07-20] Initializing Portfolio Environment...</p>
          <p className="text-green-400 font-semibold">✔ Loading core stylesheets & assets</p>
          <p className="text-green-400 font-semibold">✔ Initializing AWS EC2 & Docker registry</p>
          <p className="text-green-400 font-semibold">✔ Loading GitHub Actions workflows</p>
          <p className="text-cyan-400 animate-pulse mt-4 font-bold">Launching Portfolio for Aditi Fulara...</p>
        </div>
      </div>
    );
  }

  // 404 Route
  if (path !== '/' && path !== '' && path !== '/index.html') {
    return <NotFound onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-purple-500/30 selection:text-purple-300">
      <NeuralCanvas />
      <AICursor />

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-xl shadow-purple-600/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-purple-400/30"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="text-base" />
        </button>
      )}
    </div>
  );
}
