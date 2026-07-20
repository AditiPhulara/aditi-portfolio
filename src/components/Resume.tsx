import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaFilePdf, FaTerminal, FaLaptopCode, FaWrench } from 'react-icons/fa';
import Toast from './Toast';
import ResumePreviewModal from './ResumePreviewModal';

export default function Resume() {
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

  return (
    <section id="resume" className="py-24 bg-slate-950 relative overflow-hidden">
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
            <span>Academic Credentials</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curriculum <span className="text-gradient-cloud">Vitae & Profile</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => handleDownloadResume(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all active:scale-95 cursor-pointer border border-purple-400/30"
          >
            <FaFilePdf className="text-base text-cyan-300 animate-pulse" />
            <span>Download Full CV (ATS PDF)</span>
            <FaDownload className="text-xs opacity-80" />
          </button>

          <span className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>ATS Format Approved</span>
          </span>
        </div>

        {/* Resume Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-cloud-card p-8 sm:p-12 rounded-3xl border-purple-500/30 text-left shadow-2xl relative glow-purple"
        >
          {/* Header Grid */}
          <div className="border-b border-purple-500/20 pb-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 className="font-outfit text-3xl font-extrabold text-white">Aditi Fulara</h3>
              <p className="text-gradient-cloud font-semibold text-sm mt-1">
                Computer Science Engineering Student | Cloud Computing Enthusiast
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-slate-300 text-xs space-y-1 font-mono">
              <p>Email: aditifulara@gmail.com</p>
              <p>GitHub: github.com/AditiPhulara</p>
              <p>LinkedIn: linkedin.com/in/aditi-fulara-208346325/</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column: Education & Skills */}
            <div className="md:col-span-1 space-y-8">
              {/* Education */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaGraduationCap className="text-purple-400" />
                  <span>Education</span>
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-xs font-bold text-slate-100">Lovely Professional University</h5>
                    <p className="text-xs text-purple-300 font-semibold mt-0.5">Bachelor of Technology</p>
                    <p className="text-[10px] text-slate-300 mt-0.5">Computer Science Engineering</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaWrench className="text-cyan-400" />
                  <span>Skills</span>
                </h4>
                <div className="space-y-3 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-purple-300">Programming:</span>
                    <p className="mt-0.5 text-slate-400">C++, Python</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-300">Web Technologies:</span>
                    <p className="mt-0.5 text-slate-400">HTML, CSS, JavaScript, React.js, SQL</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-300">Cloud & Tools:</span>
                    <p className="mt-0.5 text-slate-400">Git, GitHub, Linux, Docker, AWS EC2, GitHub Actions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Experience, Projects & Achievements */}
            <div className="md:col-span-2 space-y-8 border-t md:border-t-0 md:border-l border-purple-500/20 pt-8 md:pt-0 md:pl-8">
              {/* Experience */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaBriefcase className="text-indigo-400" />
                  <span>Experience</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Computer Science Student actively learning Cloud Computing, Web Development, AWS, Docker, and Software Engineering through academic projects and self-learning.
                </p>
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaLaptopCode className="text-cyan-400" />
                  <span>Projects</span>
                </h4>
                <div className="space-y-4 text-xs text-slate-300">
                  <div>
                    <h5 className="font-bold text-slate-100">1. Cloud Resume Website with CI/CD</h5>
                    <ul className="list-disc list-inside mt-1.5 text-slate-400 space-y-1">
                      <li>Built a responsive personal portfolio website.</li>
                      <li>Containerized using Docker & deployed on AWS EC2.</li>
                      <li>Automated deployment using GitHub Actions CI/CD.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100">2. Student Management System</h5>
                    <ul className="list-disc list-inside mt-1.5 text-slate-400 space-y-1">
                      <li>Developed a full-stack web application using React.js, HTML, CSS, JavaScript, and SQL.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaTerminal className="text-purple-400" />
                  <span>Achievements</span>
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5">
                  <li>Built and deployed projects using AWS and Docker.</li>
                  <li>Implemented CI/CD pipelines using GitHub Actions.</li>
                  <li>Strong understanding of Git and Linux.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
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
