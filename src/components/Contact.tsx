import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowRight, Terminal, Send, Github, FileText } from 'lucide-react';

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-24">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-[1px] h-[800px] bg-gradient-to-b from-transparent via-[var(--color-neon-blue)] to-transparent opacity-30" />

        {/* Massive Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none flex flex-col items-center justify-center pointer-events-none">
          <h2 className="text-[15vw] font-orbitron font-black leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            CONNECT
          </h2>
          <h2 className="text-[15vw] font-orbitron font-black leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px var(--color-neon-blue)' }}>
            SYSTEM
          </h2>
        </div>

        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[var(--color-neon-blue)] opacity-10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Typography & Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col h-full justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[var(--color-neon-blue)] box-glow" />
                <span className="text-[var(--color-neon-blue)] font-exo tracking-[0.3em] uppercase text-sm font-bold">
                  Transmission
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-white uppercase tracking-tighter mb-6 leading-[1.1]">
                Initiate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-neon-blue)] text-glow">
                  Sequence.
                </span>
              </h2>

              <p className="text-lg font-space text-gray-400 leading-relaxed mb-12 max-w-md">
                Ready to build the next generation of digital experiences? Open a channel and let's collaborate on something extraordinary.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="mailto:muneebur2116@gmail.com?subject=Hello%20from%20your%20Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 interactive w-full"
                >
                  <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm group-hover:border-[var(--color-neon-blue)] transition-colors duration-500">
                    <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <Mail className="text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" size={20} />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[10px] font-exo text-[var(--color-neon-blue)] tracking-[0.2em] uppercase mb-1">Direct Line</p>
                    <p className="text-sm font-space text-white group-hover:text-glow transition-all duration-300">muneebur2116@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muneeb-ur-rehman-475a3a2b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 interactive w-full"
                >
                  <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm group-hover:border-[var(--color-neon-blue)] transition-colors duration-500">
                    <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <Linkedin className="text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" size={20} />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[10px] font-exo text-[var(--color-neon-blue)] tracking-[0.2em] uppercase mb-1">Network</p>
                    <p className="text-sm font-space text-white group-hover:text-glow transition-all duration-300">LinkedIn Profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com/muneeb693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 interactive w-full"
                >
                  <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm group-hover:border-[var(--color-neon-blue)] transition-colors duration-500">
                    <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <Github className="text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" size={20} />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[10px] font-exo text-[var(--color-neon-blue)] tracking-[0.2em] uppercase mb-1">Codebase</p>
                    <p className="text-sm font-space text-white group-hover:text-glow transition-all duration-300">GitHub Profile</p>
                  </div>
                </a>

                <a
                  href="/resume.html"
                  className="group flex items-center gap-4 interactive w-full"
                >
                  <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm group-hover:border-[var(--color-neon-blue)] transition-colors duration-500">
                    <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <FileText className="text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" size={20} />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[10px] font-exo text-[var(--color-neon-blue)] tracking-[0.2em] uppercase mb-1">Credentials</p>
                    <p className="text-sm font-space text-white group-hover:text-glow transition-all duration-300">View Resume</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-gray-900/50 pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-neon-blue)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-neon-blue)] pointer-events-none" />

            <div className="glass-panel p-8 md:p-12 bg-black/40 backdrop-blur-xl border border-gray-800/50 relative overflow-hidden">
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--color-neon-blue)] box-glow opacity-50 animate-scan" />

              <div className="flex items-center gap-3 mb-10 border-b border-gray-800 pb-6">
                <Terminal className="text-[var(--color-neon-blue)]" size={20} />
                <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">System.Contact.Form_v2.0</span>
              </div>

              <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>

                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white font-space text-lg focus:outline-none peer interactive placeholder-transparent"
                    placeholder="Name"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-gray-500 font-space text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-neon-blue)] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase cursor-text"
                  >
                    Identifier
                  </label>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-500 ease-out ${focused === 'name' ? 'w-full box-glow' : 'w-0'}`} />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white font-space text-lg focus:outline-none peer interactive placeholder-transparent"
                    placeholder="Email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-gray-500 font-space text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-neon-blue)] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase cursor-text"
                  >
                    Comms Link (Email)
                  </label>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-500 ease-out ${focused === 'email' ? 'w-full box-glow' : 'w-0'}`} />
                </div>

                <div className="relative group mt-4">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white font-space text-lg focus:outline-none peer resize-none interactive placeholder-transparent"
                    placeholder="Message"
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-gray-500 font-space text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-neon-blue)] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase cursor-text"
                  >
                    Payload (Message)
                  </label>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-500 ease-out ${focused === 'message' ? 'w-full box-glow' : 'w-0'}`} />
                </div>

                <button className="mt-8 relative w-full group/btn interactive overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-neon-blue)] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative flex items-center justify-center gap-4 px-8 py-6 border border-[var(--color-neon-blue)] bg-[var(--color-neon-blue-dark)] group-hover/btn:bg-transparent transition-colors duration-500">
                    <span className="font-orbitron font-bold text-white tracking-[0.2em] uppercase text-sm group-hover/btn:text-black transition-colors duration-300">
                      Transmit Data
                    </span>
                    <Send size={18} className="text-[var(--color-neon-blue)] group-hover/btn:text-black group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-full animate-pulse box-glow" />
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              System Online • Secure Connection
            </p>
          </div>
          <p className="text-xs font-space text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Muneeb Ur Rehman.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-exo text-gray-500 hover:text-[var(--color-neon-blue)] uppercase tracking-widest transition-colors interactive">Twitter</a>
            <a href="https://github.com/muneeb693" target="_blank" rel="noopener noreferrer" className="text-xs font-exo text-gray-500 hover:text-[var(--color-neon-blue)] uppercase tracking-widest transition-colors interactive">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
