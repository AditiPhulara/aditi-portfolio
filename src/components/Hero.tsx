import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
  FaReact,
  FaPython,
  FaCloud,
  FaArrowRight,
  FaFilePdf,
  FaDownload,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';
import avatarImg from '../assets/aditi_avatar.png';
import Toast from './Toast';
import ResumePreviewModal from './ResumePreviewModal';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const words = [
    'Cloud Computing',
    'AWS Services',
    'Docker Containers',
    'Python & C++',
    'Web Development',
    'Problem Solving'
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownloadResume = (triggerModal = true) => {
    const link = document.createElement('a');
    link.href = 'resume/Aditi_Fulara_Resume.pdf';
    link.download = 'Aditi_Fulara_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastVisible(true);

    if (triggerModal) {
      setModalOpen(true);
    }
  };

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIdx];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(currentWord.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 40);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(currentWord.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 90);
    }

    if (!isDeleting && charIdx === currentWord.length) {
      timer = window.setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx]);

  // Floating technology icons around avatar
  const techIcons = [
    { icon: <FaGitAlt className="text-xl text-orange-500" />, label: 'Git', position: '-top-4 left-6', delay: 0 },
    { icon: <FaGithub className="text-2xl text-white" />, label: 'GitHub', position: 'top-10 -right-4', delay: 0.5 },
    { icon: <FaDocker className="text-xl text-cyan-400" />, label: 'Docker', position: 'bottom-20 -left-6', delay: 1 },
    { icon: <FaLinux className="text-xl text-yellow-400" />, label: 'Linux', position: '-bottom-4 right-10', delay: 1.5 },
    { icon: <FaAws className="text-2xl text-orange-400" />, label: 'AWS', position: 'top-1/2 -left-8', delay: 2 },
    { icon: <FaReact className="text-2xl text-cyan-300 animate-spin-slow" />, label: 'React', position: 'bottom-4 -right-4', delay: 2.5 },
    { icon: <FaPython className="text-xl text-yellow-300" />, label: 'Python', position: '-top-6 right-16', delay: 3 },
    { icon: <FaCloud className="text-xl text-indigo-400" />, label: 'Cloud', position: 'top-1/3 -right-6', delay: 3.5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-slate-950/60"
    >
      {/* Background glow mesh */}
      <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[15%] right-[10%] w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[40%] right-[30%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT SIDE: Intro */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 mb-6 w-fit shadow-lg shadow-purple-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Lovely Professional University</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-3"
          >
            Aditi <span className="text-gradient-cloud">Fulara</span>
          </motion.h1>

          {/* EXACT REQUESTED TITLE & SUBTITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-3xl font-bold text-indigo-300 tracking-wide mb-3"
          >
            Computer Science Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base font-semibold text-purple-300 tracking-wide mb-6 flex flex-wrap gap-2"
          >
            <span className="px-3 py-1 rounded-lg bg-purple-900/40 border border-purple-500/20">Cloud Computing Enthusiast</span>
            <span className="px-3 py-1 rounded-lg bg-indigo-900/40 border border-indigo-500/20">AWS Learner</span>
            <span className="px-3 py-1 rounded-lg bg-cyan-900/40 border border-cyan-500/20">Problem Solver</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-cloud-card p-5 rounded-2xl mb-8 border-purple-500/20 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p className="mb-2 text-slate-300">
              I enjoy building scalable web applications, exploring AWS services, and learning modern software development practices.
            </p>
            <div className="flex items-center text-purple-300 font-mono text-sm font-semibold">
              <span className="mr-2 text-cyan-400">▹ Exploring:</span>
              <span className="text-white underline decoration-cyan-400 decoration-2 underline-offset-4">
                {typedText}
              </span>
              <span className="inline-block w-1.5 h-5 bg-cyan-400 ml-1 typewriter-cursor align-middle" />
            </div>
          </motion.div>

          {/* Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all group scale-100 active:scale-95 border border-purple-400/30"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => handleDownloadResume(true)}
              className="inline-flex items-center space-x-2 bg-slate-900/90 border border-purple-500/30 hover:border-cyan-500/50 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer hover:bg-purple-950/40"
            >
              <FaFilePdf className="text-cyan-400 text-sm animate-pulse" />
              <span>Download Resume</span>
              <FaDownload className="text-xs opacity-60" />
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-0 sm:ml-2">
              <a
                href="https://github.com/AditiPhulara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/90 border border-purple-500/20 text-slate-400 hover:text-purple-300 hover:border-purple-500/60 rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center hover:bg-purple-950/40"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/aditi-fulara-208346325/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/90 border border-purple-500/20 text-slate-400 hover:text-purple-300 hover:border-purple-500/60 rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center hover:bg-purple-950/40"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:aditifulara@gmail.com"
                className="p-3 bg-slate-900/90 border border-purple-500/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/60 rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center hover:bg-purple-950/40"
                aria-label="Email Aditi"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Circular Female Student Avatar Frame & Floating Tech Icons */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Outer Glowing Gradient Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full blur-xl opacity-40 animate-pulse-glow" />

            {/* Circular Avatar Container */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl glow-purple overflow-visible">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-purple-900/80">
                <img
                  src={avatarImg}
                  alt="Aditi Fulara - Computer Science Engineering Student"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Technology Icons */}
              {techIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 + idx * 0.5,
                    ease: 'easeInOut',
                    delay: item.delay,
                  }}
                  className={`absolute ${item.position} glass-cloud-card p-3 rounded-2xl border-purple-500/30 flex items-center space-x-2 shadow-xl backdrop-blur-xl hover:border-cyan-400/60 transition-all cursor-pointer`}
                >
                  {item.icon}
                  <span className="text-[10px] font-bold text-slate-200 tracking-wider font-mono">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-cloud-card px-5 py-2.5 rounded-full border-purple-500/40 text-xs font-bold text-purple-300 flex items-center space-x-2 shadow-2xl whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Computer Science Engineering | LPU</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Toast
        message="Resume Download Started"
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      <ResumePreviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onDownload={() => handleDownloadResume(false)}
      />
    </section>
  );
}
