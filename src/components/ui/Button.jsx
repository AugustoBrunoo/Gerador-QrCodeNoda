import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export function Button({ className, variant = "primary", children, ...props }) {
  const baseStyles = "flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#07090e]";
  
  const variants = {
    primary: "bg-noda-600 hover:bg-noda-500 text-white shadow-lg shadow-noda-600/20 focus:ring-noda-500",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 focus:ring-slate-500",
    outline: "bg-transparent border border-slate-700/80 hover:bg-slate-800 text-slate-300 focus:ring-slate-600",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
