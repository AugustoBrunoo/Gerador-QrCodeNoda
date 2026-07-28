import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export function GlassCard({ className, children, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(
        "glass-panel rounded-2xl p-5 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
