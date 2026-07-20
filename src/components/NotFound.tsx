import { FaUndo, FaCloud } from 'react-icons/fa';

interface NotFoundProps {
  onBackToHome: () => void;
}

export default function NotFound({ onBackToHome }: NotFoundProps) {
  return (
    <section className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 relative overflow-hidden text-left">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg glass-cloud-card p-8 sm:p-12 rounded-3xl border-purple-500/30 shadow-2xl glow-purple">
        <div className="inline-flex p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-cyan-400 mb-6 animate-pulse">
          <FaCloud className="text-4xl" />
        </div>

        <h1 className="font-outfit text-6xl font-extrabold text-white leading-none tracking-tight mb-2">
          404
        </h1>
        <h2 className="font-outfit text-lg font-bold text-purple-300 mb-4 uppercase tracking-wider">
          RESOURCE_NOT_FOUND
        </h2>
        
        <p className="text-slate-300 text-sm mb-8 leading-relaxed font-mono">
          The requested route does not exist in the routing table.
        </p>

        <button
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all active:scale-95 cursor-pointer"
        >
          <FaUndo className="text-sm" />
          <span>Back to Home</span>
        </button>
      </div>
    </section>
  );
}
