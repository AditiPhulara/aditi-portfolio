import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCloud } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      value: 'github.com/AditiPhulara',
      icon: <FaGithub className="text-purple-300 text-xl" />,
      href: 'https://github.com/AditiPhulara',
      color: 'border-purple-500/30 hover:border-purple-500/70',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/aditi-fulara-208346325',
      icon: <FaLinkedin className="text-indigo-400 text-xl" />,
      href: 'https://linkedin.com/in/aditi-fulara-208346325/',
      color: 'border-indigo-500/30 hover:border-indigo-500/70',
    },
    {
      name: 'Email',
      value: 'aditifulara@gmail.com',
      icon: <FaEnvelope className="text-cyan-400 text-xl" />,
      href: 'mailto:aditifulara@gmail.com',
      color: 'border-cyan-500/30 hover:border-cyan-500/70',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace('form-', '')]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setFeedbackMsg('Please complete all form fields.');
      return;
    }

    setStatus('loading');
    
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:aditifulara@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setFeedbackMsg('Thank you! Opening your email client...');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3"
          >
            <FaCloud className="text-cyan-400" />
            <span>Connect & Collaborate</span>
          </motion.div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cloud">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-cloud-card p-5 rounded-2xl flex items-center space-x-4 border ${link.color} shadow-lg hover:scale-[1.02] transition-all duration-300 block group`}
              >
                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {link.name}
                  </h4>
                  <span className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors mt-0.5 block">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}

            {/* Quote Box */}
            <div className="glass-cloud-card p-6 rounded-2xl border-purple-500/30 text-left space-y-2 mt-6">
              <h5 className="font-outfit text-sm font-bold text-purple-300 uppercase tracking-wider">
                ⚡ Open for Opportunities
              </h5>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                Looking to connect regarding software engineering projects, web development, or cloud initiatives? Feel free to reach out directly!
              </p>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-cloud-card p-8 sm:p-10 rounded-3xl border-purple-500/30 text-left shadow-2xl glow-purple"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="form-name" className="text-xs font-bold text-slate-300 mb-2 font-mono">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Aditi Fulara"
                      className="bg-slate-950/90 border border-purple-500/20 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-email" className="text-xs font-bold text-slate-300 mb-2 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="aditifulara@gmail.com"
                      className="bg-slate-950/90 border border-purple-500/20 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-message" className="text-xs font-bold text-slate-300 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Aditi, I'd like to connect regarding a project opportunity..."
                    className="bg-slate-950/90 border border-purple-500/20 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-none"
                  />
                </div>

                {status !== 'idle' && (
                  <div
                    className={`text-xs font-bold px-4 py-2.5 rounded-xl ${
                      status === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : status === 'error'
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                        : 'bg-purple-500/10 border border-purple-500/30 text-purple-300'
                    }`}
                  >
                    {feedbackMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all active:scale-[0.98] cursor-pointer border border-purple-400/30"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
