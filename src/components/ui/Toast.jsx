import { motion, AnimatePresence } from "framer-motion";

export function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-5 right-5 z-50 bg-slate-900 border border-noda-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-noda-400 animate-ping absolute"></span>
          <span className="w-2 h-2 rounded-full bg-noda-400 relative"></span>
          <span className="text-xs font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
