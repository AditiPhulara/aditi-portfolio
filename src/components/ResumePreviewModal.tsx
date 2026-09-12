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
                    Aditi Phulara
                  </h1>
                  <p className="text-[9.5px] text-slate-600 font-mono tracking-wide">
                    aditifulara@gmail.com | +91 9414633810 | linkedin.com/in/aditi-fulara | github.com/AditiPhulara
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Professional Summary
                  </h4>
                  <p className="text-[9.5px] text-slate-700 leading-normal">
                    Computer Science undergraduate with hands-on experience in machine learning, deep learning, and full-stack web development. Completed an AI/ML research internship at CSIR-CEERI on biomedical signal processing and a software development internship. Built AI-powered applications with Python, TensorFlow, React.js, and Node.js. Seeking Software Engineering or AI/ML roles.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    Technical Skills
                  </h4>
                  <div className="space-y-0.5 text-[9.5px] text-slate-800">
                    <p><strong className="text-slate-900">Languages:</strong> C++, Python, Java, JavaScript, SQL</p>
                    <p><strong className="text-slate-900">Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Chart.js</p>
                    <p><strong className="text-slate-900">Backend:</strong> Node.js, Express.js, Flask, REST APIs</p>
                    <p><strong className="text-slate-900">AI / ML:</strong> Machine Learning, Deep Learning, CNN, Computer Vision, TensorFlow, Keras, OpenCV, NumPy, Streamlit, Gemini AI, OpenAI API</p>
                    <p><strong className="text-slate-900">Database & Tools:</strong> MySQL, Git, GitHub, Linux (Ubuntu), Docker, CI/CD, VS Code</p>
                    <p><strong className="text-slate-900">Core CS:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS</p>
                  </div>
                </div>

                {/* Experience / Internships */}
                <div className="space-y-2 mt-4">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    INTERNSHIPS
                  </h4>
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[10px] text-slate-900">
                      <span>AI/ML Research Intern</span>
                      <span className="font-normal text-slate-600">Jun '26 – Jul '26</span>
                    </div>
                    <p className="text-[9px] italic text-slate-600">CSIR – Central Electronics Engineering Research Institute (CEERI), Pilani</p>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Implemented deep learning and signal processing techniques for fetal ECG extraction from maternal ECG signals.</li>
                      <li>Developed and evaluated ECG feature detection models for accurate R-peak identification.</li>
                      <li>Preprocessed and analyzed physiological signal datasets to improve model training and evaluation workflows.</li>
                    </ul>
                  </div>

                  <div className="pt-1">
                    <div className="flex justify-between items-baseline font-bold text-[10px] text-slate-900">
                      <span>Software Developer Intern</span>
                      <span className="font-normal text-slate-600">May '26 – Jul '26</span>
                    </div>
                    <p className="text-[9px] italic text-slate-600">Byte Band Technologies Private Limited</p>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Contributed to software design, development, and testing activities.</li>
                      <li>Assisted in implementing and debugging application features.</li>
                      <li>Collaborated with the development team to improve functionality and code quality.</li>
                      <li>Participated in testing and validation of software modules.</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2 mt-4">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    PROJECTS
                  </h4>
                  
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[10px] text-slate-900">
                      <span>GestureTalk | Real-Time Sign Language to Speech Translation</span>
                      <span className="font-normal text-slate-600">Aug '25 – Nov '25</span>
                    </div>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Developed a real-time sign language translation system using computer vision and deep learning to convert hand gestures into spoken language.</li>
                      <li>Extracted 21 hand landmark keypoints using MediaPipe Hands and trained TensorFlow/Keras models on 63-dimensional feature vectors for gesture classification.</li>
                      <li>Integrated Gemini and Hugging Face APIs for confidence-based sentence reconstruction and contextual output generation.</li>
                      <li>Achieved 88% gesture recognition accuracy, 10–12 FPS processing performance, and ~2-second speech generation latency.</li>
                      <li><strong>Tech:</strong> Python, TensorFlow, Keras, MediaPipe, OpenCV, Gemini API, Hugging Face, pyttsx3, gTTS</li>
                    </ul>
                  </div>

                  <div className="pt-1">
                    <div className="flex justify-between items-baseline font-bold text-[10px] text-slate-900">
                      <span>AI-Powered Plant Disease Detection System</span>
                      <span className="font-normal text-slate-600">Jan '26 – May '26</span>
                    </div>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Engineered a deep learning-based plant disease detection system using CNNs and TensorFlow, capable of classifying 38 plant disease categories from leaf images.</li>
                      <li>Built an interactive web application using Streamlit and Flask, enabling real-time disease prediction with confidence scores and treatment recommendations.</li>
                      <li>Integrated a Gemini AI-powered chatbot to provide plant health guidance, disease information, and preventive recommendations.</li>
                      <li>Optimized image preprocessing and model inference pipelines, improving prediction speed and enhancing user experience.</li>
                      <li><strong>Tech:</strong> Python, TensorFlow, Keras, CNN, Streamlit, Flask, OpenCV, NumPy, Gemini AI</li>
                    </ul>
                  </div>

                  <div className="pt-1">
                    <div className="flex justify-between items-baseline font-bold text-[10px] text-slate-900">
                      <span>AI-Powered Chronic Pain Tracking & Analysis System</span>
                      <span className="font-normal text-slate-600">Jan '26 – May '26</span>
                    </div>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Architected and developed an AI-powered chronic pain monitoring platform for tracking pain intensity, affected regions, symptoms, and daily health patterns.</li>
                      <li>Built a full-stack web application featuring dashboards, pain history tracking, and trend visualization.</li>
                      <li>Implemented AI-driven pain analysis to generate personalized recommendations, identify recurring pain triggers, and provide domain-specific health insights.</li>
                      <li>Implemented interactive charts and analytics for monitoring pain progression and supporting data-driven self-management.</li>
                      <li><strong>Tech:</strong> React.js, Node.js, Express.js, MySQL, Chart.js, JavaScript, REST APIs, OpenAI API</li>
                    </ul>
                  </div>
                </div>

                {/* Certifications & Training */}
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    CERTIFICATIONS & TRAINING
                  </h4>
                  <div>
                    <div className="flex justify-between font-bold text-[9.5px] text-slate-900">
                      <span>DevOps & Cloud Engineering – EduNiketan</span>
                      <span className="font-normal text-slate-600">Jun '26 – Jul '26</span>
                    </div>
                    <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5 mt-0.5">
                      <li>Completed intensive hands-on training in DevOps and Cloud Engineering concepts, covering Git, GitHub, Linux, Docker, CI/CD pipelines, and cloud computing fundamentals.</li>
                      <li>Worked on deployment workflows, version control, and automation practices with practical exposure to industry cloud services and DevOps tools.</li>
                    </ul>
                  </div>
                  <div className="flex justify-between text-[9px] font-bold text-slate-900 pt-1">
                    <span>Database Management System – Infosys</span>
                    <span className="font-normal text-slate-600">Jul '26</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-bold text-slate-900">
                    <span>Database and SQL – Infosys</span>
                    <span className="font-normal text-slate-600">Sep '26</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-bold text-purple-800 uppercase tracking-wide border-b border-slate-200 pb-0.5 text-[10px]">
                    ACHIEVEMENTS
                  </h4>
                  <ul className="list-disc list-inside pl-1 text-[9px] text-slate-700 space-y-0.5">
                    <li>Solved 100+ DSA problems on LeetCode, strengthening problem-solving and algorithmic thinking skills.</li>
                    <li>Completed 2 technical internships in AI/ML and Software Development domains.</li>
                    <li>Built and deployed full-stack and AI-powered applications using modern web and machine learning technologies.</li>
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

