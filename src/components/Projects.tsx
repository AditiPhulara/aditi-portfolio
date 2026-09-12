import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaServer, FaLaptopCode, FaVolumeUp } from 'react-icons/fa';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'aiml' | 'fullstack'>('all');

  const projects = [
    {
      id: 'gesture-talk',
      title: 'GestureTalk | Real-Time Sign Language to Speech Translation',
      duration: "Aug '25 – Nov '25",
      category: 'aiml',
      icon: <FaVolumeUp className="text-cyan-400 text-2xl" />,
      image: project1Img,
      description: 'A real-time sign language translation system using computer vision and deep learning to convert hand gestures into spoken language.',
      details: [
        'Developed a real-time sign language translation system using computer vision and deep learning to convert hand gestures into spoken language.',
        'Extracted 21 hand landmark keypoints using MediaPipe Hands and trained TensorFlow/Keras models on 63-dimensional feature vectors for gesture classification.',
        'Integrated Gemini and Hugging Face APIs for confidence-based sentence reconstruction and contextual output generation.',
        'Achieved 88% gesture recognition accuracy, 10–12 FPS processing performance, and ~2-second speech generation latency.'
      ],
      badges: ['Python', 'TensorFlow', 'Keras', 'MediaPipe', 'OpenCV', 'Gemini API', 'Hugging Face', 'pyttsx3', 'gTTS'],
      github: 'https://github.com/AditiPhulara',
      featured: true,
    },
    {
      id: 'plant-disease-detection',
      title: 'AI-Powered Plant Disease Detection System',
      duration: "Jan '26 – May '26",
      category: 'aiml',
      icon: <FaBrain className="text-purple-400 text-2xl" />,
      image: project1Img,
      description: 'An engineered deep learning-based plant disease detection system using CNNs and TensorFlow classifying 38 plant disease categories.',
      details: [
        'Engineered a deep learning-based plant disease detection system using CNNs and TensorFlow, capable of classifying 38 plant disease categories from leaf images.',
        'Built an interactive web application using Streamlit and Flask, enabling real-time disease prediction with confidence scores and treatment recommendations.',
        'Integrated a Gemini AI-powered chatbot to provide plant health guidance, disease information, and preventive recommendations.',
        'Optimized image preprocessing and model inference pipelines, improving prediction speed and enhancing user experience.'
      ],
      badges: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit', 'Flask', 'OpenCV', 'NumPy', 'Gemini AI'],
      github: 'https://github.com/AditiPhulara',
      featured: false,
    },
    {
      id: 'chronic-pain-tracking',
      title: 'AI-Powered Chronic Pain Tracking & Analysis System',
      duration: "Jan '26 – May '26",
      category: 'fullstack',
      icon: <FaLaptopCode className="text-indigo-400 text-2xl" />,
      image: project2Img,
      description: 'An AI-powered chronic pain monitoring platform for tracking pain intensity, affected regions, symptoms, and daily health patterns.',
      details: [
        'Architected and developed an AI-powered chronic pain monitoring platform for tracking pain intensity, affected regions, symptoms, and daily health patterns.',
        'Built a full-stack web application featuring dashboards, pain history tracking, and trend visualization.',
        'Implemented AI-driven pain analysis to generate personalized recommendations, identify recurring pain triggers, and provide domain-specific health insights.',
        'Implemented interactive charts and analytics for monitoring pain progression and supporting data-driven self-management.'
      ],
      badges: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Chart.js', 'JavaScript', 'REST APIs', 'OpenAI API'],
      github: 'https://github.com/AditiPhulara',
      featured: false,
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-950/90 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-[30%] left-[5%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaServer className="text-cyan-400" />
            <span>AI & Web Engineering Projects</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cloud">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center space-x-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'aiml', label: 'AI / Deep Learning' },
            { id: 'fullstack', label: 'Full-Stack Web' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 border-purple-400/40 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900/80 border-purple-500/20 text-slate-400 hover:text-slate-200 hover:border-purple-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight */}
        {filteredProjects.find(p => p.featured) && (
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-4">
              / Featured Computer Vision & NLP Project
            </span>
            <div className="glass-cloud-card p-8 sm:p-12 rounded-3xl border-purple-500/30 glow-purple grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-950/80 rounded-2xl border border-purple-500/30">
                    {projects[0].icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
                        MediaPipe & Gemini AI
                      </span>
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded-md">
                        {projects[0].duration}
                      </span>
                    </div>
                    <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {projects[0].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {projects[0].description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {projects[0].details.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-bold bg-purple-950/60 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-lg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-purple-500/20">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-slate-200 hover:text-purple-300 transition-colors bg-slate-900 border border-purple-500/30 px-4 py-2.5 rounded-xl"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              {/* Architecture diagram visualization */}
              <div className="lg:col-span-5 glass-cloud-card p-6 rounded-2xl border-purple-500/20 text-center space-y-4">
                <div className="font-mono text-xs text-purple-300 uppercase tracking-widest pb-2 border-b border-purple-500/20">
                  Gesture Translation Pipeline
                </div>
                <div className="space-y-3 font-mono text-xs text-left">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between text-slate-300">
                    <span>1. 21 Keypoints Extraction</span>
                    <span className="text-purple-400 font-bold">MediaPipe Hands</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-indigo-500/30 flex items-center justify-between text-slate-300">
                    <span>2. Gesture Classification</span>
                    <span className="text-indigo-400 font-bold">TensorFlow / Keras</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between text-slate-300">
                    <span>3. Sentence Reconstruction</span>
                    <span className="text-cyan-400 font-bold">Gemini & HuggingFace</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-green-500/30 flex items-center justify-between text-slate-300">
                    <span>4. Real-Time Speech Output</span>
                    <span className="text-green-400 font-bold">pyttsx3 / gTTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {filteredProjects.filter(p => !p.featured).map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-cloud-card p-8 rounded-3xl border border-purple-500/20 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-slate-950/80 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {proj.duration}
                    </span>
                    <h4 className="font-outfit text-xl font-bold text-white group-hover:text-purple-300 transition-colors mt-1">
                      {proj.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed font-sans">
                  {proj.description}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                  {proj.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[9px] font-bold bg-purple-950/40 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


