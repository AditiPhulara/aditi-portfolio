import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBrain,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaBolt
} from 'react-icons/fa';

export default function About() {
  const featureCards = [
    {
      title: 'AI / ML Researcher',
      description: 'Hands-on experience in deep learning, CNN, biomedical signal processing, and feature detection models at CSIR-CEERI.',
      icon: <FaBrain className="text-cyan-400 text-2xl" />,
      color: 'from-cyan-500/20 to-indigo-500/10 border-cyan-500/30',
    },
    {
      title: 'Full-Stack Developer',
      description: 'Architecting scalable web applications using React.js, Node.js, Express.js, Flask, REST APIs, and MySQL.',
      icon: <FaCode className="text-purple-400 text-2xl" />,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30',
    },
    {
      title: 'Problem Solver',
      description: 'Solved 100+ Data Structures & Algorithms problems on LeetCode using C++, Python, and Java.',
      icon: <FaBolt className="text-indigo-400 text-2xl" />,
      color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30',
    },
    {
      title: 'DevOps & Tooling',
      description: 'Proficient in Git, GitHub, Linux (Ubuntu), Docker, and CI/CD automated deployment workflows.',
      icon: <FaRocket className="text-pink-400 text-2xl" />,
      color: 'from-pink-500/20 to-purple-500/10 border-pink-500/30',
    },
  ];

  const educationHistory = [
    {
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      duration: 'Apr 2024 – Present',
      degree: 'B.Tech in Computer Science and Engineering',
      score: 'CGPA: 7.48',
    },
    {
      institution: 'HR College Amnour',
      location: 'Saran, Bihar',
      duration: 'Apr 2020 – Mar 2022',
      degree: 'Intermediate (Class XII)',
      score: 'Percentage: 77.40%',
    },
    {
      institution: 'Harijee Aphar High School',
      location: 'Saran, Bihar',
      duration: 'Apr 2019 – Mar 2020',
      degree: 'Matriculation (Class X)',
      score: 'Percentage: 79.20%',
    },
  ];

  const highlights = [
    { label: 'Internships', value: '2 Completed (CSIR-CEERI & Byte Band)' },
    { label: 'Current CGPA', value: '7.48 (B.Tech CSE)' },
    { label: 'LeetCode', value: '100+ Problems Solved' },
    { label: 'Core AI Stack', value: 'TensorFlow, Keras, OpenCV' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/80 relative overflow-hidden">
      {/* Glow ambient background spheres */}
      <div className="absolute top-[30%] -left-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaLightbulb className="text-cyan-400" />
            <span>About Aditi Phulara</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cloud">Summary & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Split: Bio & Profile */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 text-left space-y-5">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-100">
              Computer Science Undergraduate & AI/ML Developer
            </h3>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              I am a <strong className="text-purple-300">Computer Science undergraduate</strong> with hands-on experience in machine learning, deep learning, and full-stack web development.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              I completed an <strong className="text-cyan-300">AI/ML research internship at CSIR-CEERI</strong> (Central Electronics Engineering Research Institute) focusing on biomedical signal processing and fetal ECG extraction, as well as a <strong className="text-indigo-300">Software Developer internship at Byte Band Technologies</strong> across the full SDLC.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              Equipped with experience building AI-powered applications using Python, TensorFlow, React.js, and Node.js, I am actively seeking <strong className="text-green-300">Software Engineering or AI/ML roles</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-slate-900/80 border border-purple-500/20 p-3.5 rounded-xl">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono block">{h.label}</span>
                  <span className="text-xs font-bold text-slate-200 mt-1 block">{h.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Academic Panel */}
          <div className="lg:col-span-6">
            <div className="glass-cloud-card p-8 rounded-3xl border-purple-500/30 text-left space-y-6 glow-purple">
              <h4 className="font-outfit text-xl font-bold text-white flex items-center space-x-2 border-b border-purple-500/20 pb-4">
                <FaGraduationCap className="text-purple-400 text-2xl" />
                <span>Education Background</span>
              </h4>

              <div className="space-y-6">
                {educationHistory.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-purple-500/40">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h5 className="font-bold text-base text-slate-100">{edu.institution}</h5>
                        <p className="text-xs font-semibold text-purple-300 mt-0.5">{edu.degree}</p>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {edu.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-400 mt-2 font-mono">
                      <span>📍 {edu.location}</span>
                      <span className="font-bold text-green-400">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-cloud-card p-6 rounded-2xl bg-gradient-to-br ${card.color} border text-left flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 group`}
            >
              <div>
                <div className="p-3 bg-slate-950/80 rounded-xl w-fit border border-purple-500/20 mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="font-outfit text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

