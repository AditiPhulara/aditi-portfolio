import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaCheckCircle, FaLaptopCode, FaBrain } from 'react-icons/fa';

export default function Internships() {
  const internships = [
    {
      id: 'csir-ceeri',
      title: 'AI/ML Research Intern',
      organization: 'CSIR – Central Electronics Engineering Research Institute (CEERI), Pilani',
      duration: 'Jun 2026 – Jul 2026',
      credentialLink: 'https://drive.google.com/file/d/1lRgEBrISXH7g9XQH9QNiQQe2vM81AIdc/view?usp=sharing',
      icon: <FaBrain className="text-cyan-400 text-xl" />,
      badges: ['AI / ML', 'Biomedical Signal Processing', 'Deep Learning', 'Python'],
      responsibilities: [
        'Implemented deep learning and signal processing techniques for fetal ECG extraction from maternal ECG signals.',
        'Developed and evaluated ECG feature detection models for accurate R-peak identification.',
        'Preprocessed and analyzed physiological signal datasets to improve model training and evaluation workflows.',
      ],
    },
    {
      id: 'byte-band',
      title: 'Software Developer Intern',
      organization: 'Byte Band Technologies Private Limited',
      duration: 'May 2026 – Jul 2026',
      credentialLink: 'https://drive.google.com/file/d/1TrDOJsSMIyRHQeOMiD9WurB40-JYhLxT/view?usp=sharing',
      icon: <FaLaptopCode className="text-purple-400 text-xl" />,
      badges: ['Software Engineering', 'Feature Debugging', 'SDLC', 'Quality Validation'],
      responsibilities: [
        'Contributed to software design, development, and testing activities.',
        'Assisted in implementing and debugging application features.',
        'Collaborated with the development team to improve functionality and code quality.',
        'Participated in testing and validation of software modules.',
      ],
    },
  ];

  return (
    <section id="internships" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[25%] left-[5%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaBriefcase className="text-cyan-400" />
            <span>Industry & Research Experience</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cloud">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative text-left">
          {/* Vertical Timeline Bar */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500/30" />

          <div className="space-y-12">
            {internships.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative sm:pl-20"
              >
                {/* Timeline Icon Marker */}
                <div className="hidden sm:flex absolute left-0 top-1.5 w-16 h-16 rounded-2xl bg-slate-900 border border-purple-500/40 shadow-xl shadow-purple-950/50 items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* Card Container */}
                <div className="glass-cloud-card p-8 rounded-3xl border border-purple-500/30 glow-purple hover:border-purple-500/60 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4 pb-4 border-b border-purple-500/20">
                    <div>
                      <h3 className="font-outfit text-2xl font-extrabold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-purple-300 text-sm font-semibold mt-1">
                        <FaBuilding className="text-xs text-cyan-400" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end space-y-2">
                      <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-xl">
                        <FaCalendarAlt className="text-[10px]" />
                        <span>{item.duration}</span>
                      </span>

                      <a
                        href={item.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/20 transition-all active:scale-95 border border-purple-400/30"
                      >
                        <span>View Credential</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  </div>

                  {/* Responsibilities Bullets */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Key Responsibilities & Deliverables:
                    </h4>
                    <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start">
                          <FaCheckCircle className="text-cyan-400 text-sm mr-3 mt-1 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-purple-500/15">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-mono font-bold bg-purple-950/60 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-lg"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
