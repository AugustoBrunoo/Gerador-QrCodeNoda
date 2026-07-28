import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-noda-600 to-noda-accent flex items-center justify-center shadow-lg shadow-noda-600/20">
          <Code2 className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">Noda Soluções Dev</h1>
            <span className="px-2 py-0.5 text-xs font-semibold bg-noda-500/10 text-noda-400 border border-noda-500/20 rounded-full">
              QR Generator
            </span>
          </div>
          <p className="text-xs text-slate-400">Personalize e exporte com alta qualidade</p>
        </div>
      </div>

      <a
        href="https://www.nodasolucoes.dev/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-700/80 transition-all shadow-sm group"
      >
        <span>https://www.nodasolucoes.dev/</span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </motion.header>
  );
}
