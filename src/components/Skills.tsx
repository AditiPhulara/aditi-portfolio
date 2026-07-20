import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaTerminal, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <FaCode className="text-yellow-400 text-2xl" />,
      description: 'Core logic, object-oriented programming, data structures, and script development.',
      color: 'border-yellow-500/30 shadow-yellow-500/10',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 88 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: <FaLaptopCode className="text-indigo-400 text-2xl" />,
      description: 'Frontend user interface design, styling systems, component architecture, and relational queries.',
      color: 'border-indigo-500/30 shadow-indigo-500/10',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 85 },
        { name: 'SQL', level: 82 },
      ],
    },
    {
      title: 'Cloud & Tools',
      icon: <FaCloud className="text-cyan-400 text-2xl" />,
      description: 'Cloud hosting, containerization, operating system management, and automated deployments.',
      color: 'border-cyan-500/30 shadow-cyan-500/10',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'Linux', level: 85 },
        { name: 'Docker', level: 85 },
        { name: 'AWS EC2', level: 82 },
        { name: 'GitHub Actions', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaTerminal className="text-cyan-400" />
            <span>Technical Capabilities</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cloud">Technical Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-cloud-card p-8 rounded-3xl border ${category.color} text-left relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-purple-500/20">
                  <div className="p-3 bg-slate-950/80 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-6">
                  {category.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-1.5">
                        <span className="flex items-center space-x-2">
                          <FaCheckCircle className="text-purple-400 text-xs" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="font-mono text-purple-300">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-purple-500/20">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
