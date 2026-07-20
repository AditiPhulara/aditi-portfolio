import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaFilePdf, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export default function ResumePreviewModal({
  isOpen,
  onClose,
  onDownload,
}: ResumePreviewModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    onDownload();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-lg"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-slate-900 border border-purple-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl z-10 font-sans glow-purple"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-slate-950/80">
              <div className="flex items-center space-x-2.5">
                <FaFilePdf className="text-cyan-400 text-lg" />
                <h3 className="font-outfit text-base sm:text-lg font-bold text-white">
                  Resume ATS Preview
                </h3>
                <span className="bg-purple-950/80 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
                  Verified Format
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-600/20 cursor-pointer"
                >
                  {downloaded ? (
                    <>
                      <FaCheck className="text-xs" />
                      <span>Downloaded</span>
                    </>
                  ) : (
                    <>
                      <FaDownload className="text-xs" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-800 border border-purple-500/20 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  <FaTimes className="text-xs" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950/60 flex-1 space-y-8 select-text">
              {/* Document Container */}
              <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-xl max-w-2xl mx-auto border border-slate-200 text-left leading-relaxed text-xs">
                {/* Header */}
                <div className="text-center border-b border-slate-200 pb-4 mb-5">
                  <h1 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-1">
                    Aditi Fulara
                  </h1>
                  <p className="text-[10px] text-slate-600 font-mono tracking-wide">
                    aditifulara@gmail.com | github.com/AditiPhulara | linkedin.com/in/aditi-fulara-208346325/
                  </p>
                </div>

                {/* About Me */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    About Me
                  </h4>
                  <p className="text-[10px] text-slate-700">
                    Computer Science Engineering Student at Lovely Professional University. Passionate about Cloud Computing, Web Development, AWS services, Docker, Linux, Git, and Problem Solving. Continuously improving technical skills through practical implementations and hands-on projects.
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-1.5 mt-5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Education
                  </h4>
                  <div className="font-bold text-[10px] text-slate-800">
                    Lovely Professional University
                  </div>
                  <div className="text-[9.5px] italic text-slate-600">
                    Bachelor of Technology in Computer Science Engineering
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-1.5 mt-5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Skills
                  </h4>
                  <div className="space-y-1 text-[10px] text-slate-800">
                    <p>
                      <strong className="text-slate-900">Programming:</strong> C++, Python
                    </p>
                    <p>
                      <strong className="text-slate-900">Web Technologies:</strong> HTML, CSS, JavaScript, React.js, SQL
                    </p>
                    <p>
                      <strong className="text-slate-900">Cloud & Tools:</strong> Git, GitHub, Linux, Docker, AWS EC2, GitHub Actions
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-1.5 mt-5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Experience
                  </h4>
                  <p className="text-[10px] text-slate-700">
                    Computer Science Student actively learning Cloud Computing, Web Development, AWS, Docker, and Software Engineering through academic projects and self-learning.
                  </p>
                </div>

                {/* Projects */}
                <div className="space-y-2 mt-5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Projects
                  </h4>
                  
                  <div>
                    <h5 className="font-bold text-[10px] text-slate-800">
                      1. Cloud Resume Website with CI/CD
                    </h5>
                    <ul className="list-disc list-inside pl-1.5 text-[9.5px] text-slate-700 space-y-0.5">
                      <li>Built a responsive personal portfolio website.</li>
                      <li>Containerized using Docker & deployed on AWS EC2 with GitHub Actions CI/CD.</li>
                    </ul>
                  </div>

                  <div className="pt-1">
                    <h5 className="font-bold text-[10px] text-slate-800">
                      2. Student Management System
                    </h5>
                    <ul className="list-disc list-inside pl-1.5 text-[9.5px] text-slate-700 space-y-0.5">
                      <li>Developed a full-stack web application using React.js, HTML, CSS, JavaScript, and SQL.</li>
                    </ul>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-1.5 mt-5">
                  <h4 className="font-bold text-purple-700 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Achievements
                  </h4>
                  <ul className="list-disc list-inside pl-1.5 text-[9.5px] text-slate-700 space-y-0.5">
                    <li>Built and deployed projects using AWS and Docker.</li>
                    <li>Implemented CI/CD pipelines using GitHub Actions.</li>
                    <li>Strong understanding of Git and Linux.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-950 px-6 py-3.5 border-t border-purple-500/20 text-center text-[10px] text-slate-400 font-medium">
              Applicant Tracking System (ATS) Parsed Resume Preview
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
