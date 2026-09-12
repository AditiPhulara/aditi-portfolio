import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaCodeBranch, FaCheckCircle } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      id: 'leetcode',
      title: 'LeetCode Problem Solver (100+ Solved)',
      icon: <FaTrophy className="text-yellow-400 text-2xl" />,
      description:
        'Solved 100+ DSA problems on LeetCode, strengthening problem-solving and algorithmic thinking skills.',
      badge: 'Data Structures & Algorithms',
      highlight: '100+ Problems',
    },
    {
      id: 'internships-completion',
      title: 'Completed 2 Technical Internships',
      icon: <FaCodeBranch className="text-cyan-400 text-2xl" />,
      description:
        'Completed 2 technical internships in AI/ML and Software Development domains.',
      badge: 'Industry & Research Experience',
      highlight: '2 Internships',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaAward className="text-green-400" />
            <span>Milestones & Key Highlights</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Honors & <span className="text-gradient-cloud">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-cloud-card p-8 rounded-3xl border border-purple-500/30 glow-purple flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/20">
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-green-400 bg-green-950/40 border border-green-500/30 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <div className="flex items-start text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  <FaCheckCircle className="text-cyan-400 text-base mr-3 mt-1 flex-shrink-0" />
                  <span>{item.description}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-lg">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
