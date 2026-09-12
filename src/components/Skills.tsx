import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTerminal, FaCheckCircle, FaLaptopCode, FaServer, FaTools, FaDatabase, FaLayerGroup } from 'react-icons/fa';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <FaCode className="text-yellow-400 text-2xl" />,
      description: 'Core programming and scripting languages.',
      color: 'border-yellow-500/30 shadow-yellow-500/10',
      skills: ['C++', 'Python', 'Java', 'SQL'],
    },
    {
      title: 'Frontend',
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />,
      description: 'User interface components, responsive layout, and modern web tech.',
      color: 'border-cyan-500/30 shadow-cyan-500/10',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: <FaServer className="text-indigo-400 text-2xl" />,
      description: 'Server frameworks, RESTful web services, and API architectures.',
      color: 'border-indigo-500/30 shadow-indigo-500/10',
      skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
    },
    {
      title: 'AI / ML',
      icon: <FaBrain className="text-purple-400 text-2xl" />,
      description: 'Machine learning models, deep learning frameworks, computer vision, and AI APIs.',
      color: 'border-purple-500/30 shadow-purple-500/10',
      skills: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Streamlit', 'Gemini AI', 'OpenAI API'],
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-emerald-400 text-2xl" />,
      description: 'Relational database systems and data modeling.',
      color: 'border-emerald-500/30 shadow-emerald-500/10',
      skills: ['MySQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools className="text-pink-400 text-2xl" />,
      description: 'Version control, containerization, environment orchestration, and development platforms.',
      color: 'border-pink-500/30 shadow-pink-500/10',
      skills: ['Git', 'GitHub', 'Linux (Ubuntu)', 'VS Code', 'Docker'],
    },
    {
      title: 'Core CS',
      icon: <FaLayerGroup className="text-orange-400 text-2xl" />,
      description: 'Computer science fundamental topics and algorithmic paradigms.',
      color: 'border-orange-500/30 shadow-orange-500/10',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
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
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaTerminal className="text-cyan-400" />
            <span>Technical Inventory</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cloud">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-cloud-card p-7 rounded-3xl border ${category.color} text-left relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-purple-500/20">
                  <div className="p-3 bg-slate-950/80 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-6">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center space-x-1.5 bg-slate-900/90 border border-purple-500/25 hover:border-cyan-400/50 text-slate-200 hover:text-white px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
                    >
                      <FaCheckCircle className="text-cyan-400 text-[10px]" />
                      <span>{skill}</span>
                    </span>
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
