import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaDatabase, FaCloud, FaCheckCircle } from 'react-icons/fa';

export default function Certifications() {
  const certifications = [
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud Engineering',
      organization: 'EduNiketan',
      duration: 'Jun 2026 – Jul 2026',
      credentialLink: 'https://drive.google.com/file/d/1fq-ojFxV_eaCVjm_Z6en9UjFXgguirzO/view?usp=sharing',
      buttonText: 'Verify Credential',
      icon: <FaCloud className="text-cyan-400 text-2xl" />,
      badges: ['Git', 'GitHub', 'Linux', 'Docker', 'CI/CD Pipelines', 'Cloud Computing'],
      bullets: [
        'Completed intensive hands-on training in DevOps and Cloud Engineering concepts covering Git, GitHub, Linux, Docker, CI/CD pipelines, and cloud computing fundamentals.',
        'Worked on deployment workflows, version control, and automation practices with practical exposure to industry cloud services and DevOps tools.',
      ],
    },
    {
      id: 'dbms-infosys',
      title: 'Database Management System – Infosys',
      organization: 'Infosys',
      duration: 'Jul 2026',
      credentialLink: 'https://drive.google.com/file/d/1UJavp-IS9haryj9qNoPrYw9tNayGe-6X/view?usp=sharing',
      buttonText: 'Verify Button',
      icon: <FaDatabase className="text-indigo-400 text-2xl" />,
      badges: ['DBMS', 'Relational Data Modeling', 'Transaction Management', 'Database Indexing'],
      bullets: [
        'Comprehensive professional training and certification by Infosys covering fundamental DBMS architecture, normalization, ACID properties, and relational storage engines.',
      ],
    },
    {
      id: 'sql-infosys',
      title: 'Database and SQL – Infosys',
      organization: 'Infosys',
      duration: 'Sep 2026',
      credentialLink: 'https://drive.google.com/file/d/1UtX6qEQucs_9AcKERJ5uHITucEQEqXkz/view?usp=sharing',
      buttonText: 'Verify Button',
      icon: <FaDatabase className="text-purple-400 text-2xl" />,
      badges: ['SQL', 'Query Optimization', 'Joins & Subqueries', 'Database Administration'],
      bullets: [
        'Hands-on training and certification by Infosys focusing on writing complex SQL queries, data manipulation, schema constraints, and database performance optimization.',
      ],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-950/90 relative overflow-hidden">
      {/* Ambient glow backdrop */}
      <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaCertificate className="text-yellow-400" />
            <span>Verified Industry Qualifications</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-cloud">Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch text-left">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-cloud-card p-7 rounded-3xl border border-purple-500/30 glow-purple flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-purple-500/20">
                  <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                    <FaCalendarAlt className="text-[9px]" />
                    <span>{cert.duration}</span>
                  </span>
                </div>

                <h3 className="font-outfit text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mb-4 font-mono">
                  Issuing Organization: {cert.organization}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {cert.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start text-xs text-slate-300 leading-relaxed font-sans">
                      <FaCheckCircle className="text-cyan-400 text-xs mr-2 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[9px] font-mono font-semibold bg-purple-950/50 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 text-xs font-bold py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-lg shadow-purple-600/20 transition-all active:scale-95 border border-purple-400/30"
                >
                  <span>{cert.buttonText}</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
