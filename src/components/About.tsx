import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaCloud,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaBolt
} from 'react-icons/fa';

export default function About() {
  const featureCards = [
    {
      title: 'Problem Solver',
      description: 'Logical thinker leveraging C++, Python, and Data Structures to solve complex algorithmic challenges efficiently.',
      icon: <FaBolt className="text-cyan-400 text-2xl" />,
      color: 'from-cyan-500/20 to-indigo-500/10 border-cyan-500/30',
    },
    {
      title: 'Cloud Explorer',
      description: 'Gaining hands-on experience with AWS EC2 cloud infrastructure, Linux system management, and Docker containers.',
      icon: <FaCloud className="text-purple-400 text-2xl" />,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30',
    },
    {
      title: 'Web Developer',
      description: 'Building responsive frontend interfaces and clean web applications using React.js, JavaScript, HTML, and CSS.',
      icon: <FaCode className="text-indigo-400 text-2xl" />,
      color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30',
    },
    {
      title: 'Continuous Learner',
      description: 'Constantly expanding technical knowledge through practical implementations, open source projects, and automation pipelines.',
      icon: <FaRocket className="text-pink-400 text-2xl" />,
      color: 'from-pink-500/20 to-purple-500/10 border-pink-500/30',
    },
  ];

  const highlights = [
    { label: 'Degree', value: 'B.Tech in CSE' },
    { label: 'Core Languages', value: 'C++ & Python' },
    { label: 'Cloud Services', value: 'AWS EC2 & Docker' },
    { label: 'Version Control', value: 'Git & GitHub' },
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
            <span>About Aditi Fulara</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building <span className="text-gradient-cloud">Scalable Systems & Code</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Split: Bio & Profile */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left space-y-5">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-100">
              Passionate Computer Science Engineering Student
            </h3>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              I am a <strong className="text-purple-300">Computer Science Engineering Student</strong> at Lovely Professional University with a strong interest in <strong className="text-cyan-300">Cloud Computing, Web Development, AWS, Docker, and Linux</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              I enjoy building responsive web applications, exploring cloud services like AWS EC2, containerizing applications with Docker, and setting up automated workflows using GitHub Actions and Git.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              Driven by <strong className="text-indigo-300">Continuous Learning and Problem Solving</strong>, I am dedicated to honing my technical skills through practical implementations and hands-on projects.
            </p>
          </div>

          {/* Right Highlights Panel */}
          <div className="lg:col-span-5">
            <div className="glass-cloud-card p-8 rounded-3xl border-purple-500/30 text-left space-y-6 glow-purple">
              <h4 className="font-outfit text-xl font-bold text-white flex items-center space-x-2 border-b border-purple-500/20 pb-4">
                <FaGraduationCap className="text-purple-400 text-2xl" />
                <span>Academic Overview</span>
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-lg text-slate-100">Lovely Professional University</h5>
                  <p className="text-sm font-semibold text-purple-300 mt-0.5">
                    Bachelor of Technology in Computer Science Engineering
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-500/20">
                  {highlights.map((h) => (
                    <div key={h.label} className="bg-slate-900/80 border border-purple-500/20 p-3 rounded-xl">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono block">{h.label}</span>
                      <span className="text-xs font-bold text-slate-200 mt-1 block">{h.value}</span>
                    </div>
                  ))}
                </div>
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
