import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCloud, FaLaptopCode, FaServer } from 'react-icons/fa';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'cloud' | 'web'>('all');

  const projects = [
    {
      id: 'cloud-resume',
      title: 'Cloud Resume Website with CI/CD',
      category: 'cloud',
      icon: <FaCloud className="text-cyan-400 text-2xl" />,
      image: project1Img,
      description: 'A responsive personal portfolio website containerized using Docker, deployed on AWS EC2, and automated with GitHub Actions CI/CD.',
      details: [
        'Built a responsive personal portfolio website.',
        'Containerized using Docker.',
        'Deployed on AWS EC2.',
        'Automated deployment using GitHub Actions CI/CD.'
      ],
      badges: ['Docker', 'AWS EC2', 'GitHub Actions', 'CI/CD', 'Linux', 'Git'],
      github: 'https://github.com/AditiPhulara',
      demo: '#',
      featured: true,
    },
    {
      id: 'student-management',
      title: 'Student Management System',
      category: 'web',
      icon: <FaLaptopCode className="text-purple-400 text-2xl" />,
      image: project2Img,
      description: 'Developed a responsive full-stack web application for managing student records, course enrollments, and academic performance reporting.',
      details: [
        'Designed frontend components using React.js, HTML, and CSS.',
        'Integrated relational SQL database for efficient record storage and query execution.',
        'Implemented modular code architecture with version control via Git & GitHub.'
      ],
      badges: ['React.js', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git'],
      github: 'https://github.com/AditiPhulara',
      demo: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-950/90 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-[30%] left-[5%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaServer className="text-cyan-400" />
            <span>Practical Implementations</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cloud">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center space-x-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'cloud', label: 'Cloud Infrastructure' },
            { id: 'web', label: 'Web Applications' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 border-purple-400/40 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900/80 border-purple-500/20 text-slate-400 hover:text-slate-200 hover:border-purple-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight */}
        {filteredProjects.find(p => p.featured) && (
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-4">
              / Featured Pipeline Case Study
            </span>
            <div className="glass-cloud-card p-8 sm:p-12 rounded-3xl border-purple-500/30 glow-purple grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-950/80 rounded-2xl border border-purple-500/30">
                    {projects[0].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
                      Cloud Deployment
                    </span>
                    <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {projects[0].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {projects[0].description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {projects[0].details.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-bold bg-purple-950/60 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-lg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-purple-500/20">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-slate-200 hover:text-purple-300 transition-colors bg-slate-900 border border-purple-500/30 px-4 py-2.5 rounded-xl"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub Code</span>
                  </a>
                  <a
                    href={projects[0].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/30 border border-cyan-500/30 px-4 py-2.5 rounded-xl"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Site</span>
                  </a>
                </div>
              </div>

              {/* Architecture diagram visualization */}
              <div className="lg:col-span-5 glass-cloud-card p-6 rounded-2xl border-purple-500/20 text-center space-y-4">
                <div className="font-mono text-xs text-purple-300 uppercase tracking-widest pb-2 border-b border-purple-500/20">
                  CI/CD Deployment Flow
                </div>
                <div className="space-y-3 font-mono text-xs text-left">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between text-slate-300">
                    <span>1. Code Commit</span>
                    <span className="text-purple-400 font-bold">Git & GitHub</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-indigo-500/30 flex items-center justify-between text-slate-300">
                    <span>2. Automated Pipeline</span>
                    <span className="text-indigo-400 font-bold">GitHub Actions</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between text-slate-300">
                    <span>3. Containerization</span>
                    <span className="text-cyan-400 font-bold">Docker Image</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-green-500/30 flex items-center justify-between text-slate-300">
                    <span>4. Cloud Server</span>
                    <span className="text-green-400 font-bold">AWS EC2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {filteredProjects.filter(p => !p.featured).map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-cloud-card p-8 rounded-3xl border border-purple-500/20 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-slate-950/80 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <h4 className="font-outfit text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h4>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed font-sans">
                  {proj.description}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                  {proj.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[9px] font-bold bg-purple-950/40 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub Code</span>
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
