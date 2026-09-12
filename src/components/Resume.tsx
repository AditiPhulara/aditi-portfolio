import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaFilePdf, FaTerminal, FaLaptopCode, FaWrench, FaExternalLinkAlt, FaAward, FaCertificate } from 'react-icons/fa';
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
            <span>Academic & Professional Credentials</span>
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
            <span>ATS Formatted & Verified</span>
          </span>
        </div>

        {/* Resume Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-cloud-card p-8 sm:p-12 rounded-3xl border-purple-500/30 text-left shadow-2xl relative glow-purple"
        >
          {/* Header Grid */}
          <div className="border-b border-purple-500/20 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-outfit text-3xl font-extrabold text-white">Aditi Phulara</h3>
              <p className="text-gradient-cloud font-semibold text-sm mt-1">
                Computer Science Undergraduate | AI/ML & Software Engineer
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-slate-300 text-xs space-y-1 font-mono">
              <p>Email: aditifulara@gmail.com</p>
              <p>Phone: +91 9414633810</p>
              <p>GitHub: github.com/AditiPhulara</p>
              <p>LinkedIn: linkedin.com/in/aditi-fulara</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column: Education & Skills */}
            <div className="md:col-span-5 space-y-8">
              {/* Education */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaGraduationCap className="text-purple-400 text-base" />
                  <span>Education</span>
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500/40 pl-3">
                    <h5 className="text-xs font-bold text-slate-100">Lovely Professional University</h5>
                    <p className="text-xs text-purple-300 font-semibold mt-0.5">B.Tech in CSE | CGPA: 7.48</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Apr 2024 – Present | Punjab</p>
                  </div>
                  <div className="border-l-2 border-purple-500/40 pl-3">
                    <h5 className="text-xs font-bold text-slate-100">HR College Amnour</h5>
                    <p className="text-xs text-purple-300 font-semibold mt-0.5">Class XII | Percentage: 77.40%</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Apr 2020 – Mar 2022 | Saran, Bihar</p>
                  </div>
                  <div className="border-l-2 border-purple-500/40 pl-3">
                    <h5 className="text-xs font-bold text-slate-100">Harijee Aphar High School</h5>
                    <p className="text-xs text-purple-300 font-semibold mt-0.5">Class X | Percentage: 79.20%</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Apr 2019 – Mar 2020 | Saran, Bihar</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaWrench className="text-cyan-400 text-base" />
                  <span>Technical Skills</span>
                </h4>
                <div className="space-y-3 text-xs text-slate-300 font-sans">
                  <div>
                    <span className="font-bold text-purple-300">Languages:</span>
                    <p className="mt-0.5 text-slate-400">C++, Python, Java, JavaScript, SQL</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-300">AI / ML:</span>
                    <p className="mt-0.5 text-slate-400">TensorFlow, Keras, CNN, OpenCV, NumPy, Streamlit, Gemini AI, OpenAI API</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-300">Frontend & Backend:</span>
                    <p className="mt-0.5 text-slate-400">React.js, HTML5, CSS3, Chart.js, Node.js, Express.js, Flask, REST APIs</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-300">Database & Tools:</span>
                    <p className="mt-0.5 text-slate-400">MySQL, Git, GitHub, Linux (Ubuntu), Docker, CI/CD, VS Code</p>
                  </div>
                </div>
              </div>

              {/* Certifications & Training */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaCertificate className="text-yellow-400 text-base" />
                  <span>Certifications & Training</span>
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-slate-100 text-xs">DevOps & Cloud Engineering</h5>
                      <a
                        href="https://drive.google.com/file/d/1fq-ojFxV_eaCVjm_Z6en9UjFXgguirzO/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-cyan-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Verify</span>
                        <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                    <p className="text-[10px] text-purple-300 font-semibold">EduNiketan | Jun 2026 – Jul 2026</p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-slate-100 text-xs">Database Management System</h5>
                      <a
                        href="https://drive.google.com/file/d/1UJavp-IS9haryj9qNoPrYw9tNayGe-6X/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-cyan-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Verify</span>
                        <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                    <p className="text-[10px] text-purple-300 font-semibold">Infosys | Jul 2026</p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-slate-100 text-xs">Database and SQL</h5>
                      <a
                        href="https://drive.google.com/file/d/1UtX6qEQucs_9AcKERJ5uHITucEQEqXkz/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-cyan-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Verify</span>
                        <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                    <p className="text-[10px] text-purple-300 font-semibold">Infosys | Sep 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Experience, Projects & Achievements */}
            <div className="md:col-span-7 space-y-8 border-t md:border-t-0 md:border-l border-purple-500/20 pt-8 md:pt-0 md:pl-8">
              {/* Internships / Experience */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaBriefcase className="text-indigo-400 text-base" />
                  <span>Internships</span>
                </h4>
                <div className="space-y-6 text-xs text-slate-300">
                  {/* Internship 1 */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                    <div className="flex flex-wrap justify-between items-start mb-1">
                      <div>
                        <h5 className="font-bold text-sm text-slate-100">AI/ML Research Intern</h5>
                        <p className="text-xs text-purple-300 font-semibold italic">CSIR – Central Electronics Engineering Research Institute (CEERI), Pilani</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded">
                          Jun '26 – Jul '26
                        </span>
                        <a
                          href="https://drive.google.com/file/d/1lRgEBrISXH7g9XQH9QNiQQe2vM81AIdc/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-[10px] bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white px-2 py-0.5 rounded transition-colors"
                        >
                          <span>Verify</span>
                          <FaExternalLinkAlt className="text-[8px]" />
                        </a>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
                      <li>Implemented deep learning and signal processing techniques for fetal ECG extraction from maternal ECG signals.</li>
                      <li>Developed and evaluated ECG feature detection models for accurate R-peak identification.</li>
                      <li>Preprocessed and analyzed physiological signal datasets to improve model training and evaluation workflows.</li>
                    </ul>
                  </div>

                  {/* Internship 2 */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                    <div className="flex flex-wrap justify-between items-start mb-1">
                      <div>
                        <h5 className="font-bold text-sm text-slate-100">Software Developer Intern</h5>
                        <p className="text-xs text-purple-300 font-semibold italic">Byte Band Technologies Private Limited</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded">
                          May '26 – Jul '26
                        </span>
                        <a
                          href="https://drive.google.com/file/d/1TrDOJsSMIyRHQeOMiD9WurB40-JYhLxT/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-[10px] bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white px-2 py-0.5 rounded transition-colors"
                        >
                          <span>Verify</span>
                          <FaExternalLinkAlt className="text-[8px]" />
                        </a>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
                      <li>Contributed to software design, development, and testing activities.</li>
                      <li>Assisted in implementing and debugging application features.</li>
                      <li>Collaborated with the development team to improve functionality and code quality.</li>
                      <li>Participated in testing and validation of software modules.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaLaptopCode className="text-cyan-400 text-base" />
                  <span>Projects</span>
                </h4>
                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-sm text-slate-100">1. GestureTalk | Real-Time Sign Language to Speech Translation</h5>
                      <span className="text-[10px] font-mono text-purple-300">Aug '25 – Nov '25</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-slate-400 space-y-1">
                      <li>Developed a real-time sign language translation system using computer vision and deep learning to convert hand gestures into spoken language.</li>
                      <li>Extracted 21 hand landmark keypoints using MediaPipe Hands and trained TensorFlow/Keras models on 63-dimensional feature vectors for gesture classification.</li>
                      <li>Integrated Gemini and Hugging Face APIs for confidence-based sentence reconstruction and contextual output generation.</li>
                      <li>Achieved 88% gesture recognition accuracy, 10–12 FPS processing performance, and ~2-second speech generation latency.</li>
                    </ul>
                    <p className="text-[10px] font-mono text-cyan-400 mt-2">
                      Tech: Python, TensorFlow, Keras, MediaPipe, OpenCV, Gemini API, Hugging Face, pyttsx3, gTTS
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-sm text-slate-100">2. AI-Powered Plant Disease Detection System</h5>
                      <span className="text-[10px] font-mono text-purple-300">Jan '26 – May '26</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-slate-400 space-y-1">
                      <li>Engineered a deep learning-based plant disease detection system using CNNs and TensorFlow, capable of classifying 38 plant disease categories from leaf images.</li>
                      <li>Built an interactive web application using Streamlit and Flask, enabling real-time disease prediction with confidence scores and treatment recommendations.</li>
                      <li>Integrated a Gemini AI-powered chatbot to provide plant health guidance, disease information, and preventive recommendations.</li>
                      <li>Optimized image preprocessing and model inference pipelines, improving prediction speed and enhancing user experience.</li>
                    </ul>
                    <p className="text-[10px] font-mono text-cyan-400 mt-2">
                      Tech: Python, TensorFlow, Keras, CNN, Streamlit, Flask, OpenCV, NumPy, Gemini AI
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-sm text-slate-100">3. AI-Powered Chronic Pain Tracking & Analysis System</h5>
                      <span className="text-[10px] font-mono text-purple-300">Jan '26 – May '26</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-slate-400 space-y-1">
                      <li>Architected and developed an AI-powered chronic pain monitoring platform for tracking pain intensity, affected regions, symptoms, and daily health patterns.</li>
                      <li>Built a full-stack web application featuring dashboards, pain history tracking, and trend visualization.</li>
                      <li>Implemented AI-driven pain analysis to generate personalized recommendations, identify recurring pain triggers, and provide domain-specific health insights.</li>
                      <li>Implemented interactive charts and analytics for monitoring pain progression and supporting data-driven self-management.</li>
                    </ul>
                    <p className="text-[10px] font-mono text-cyan-400 mt-2">
                      Tech: React.js, Node.js, Express.js, MySQL, Chart.js, JavaScript, REST APIs, OpenAI API
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <FaAward className="text-green-400 text-base" />
                  <span>Achievements</span>
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-2">
                  <li>Solved 100+ DSA problems on LeetCode, strengthening problem-solving and algorithmic thinking skills.</li>
                  <li>Completed 2 technical internships in AI/ML and Software Development domains.</li>
                  <li>Built and deployed full-stack and AI-powered applications using modern web and machine learning technologies.</li>
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
