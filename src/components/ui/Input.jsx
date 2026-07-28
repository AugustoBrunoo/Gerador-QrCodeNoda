import { cn } from "../../utils/cn";

export function Input({ className, label, icon: Icon, ...props }) {
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            "w-full bg-slate-950/80 border border-slate-700/80 focus:border-noda-500 focus:ring-1 focus:ring-noda-500 text-slate-100 font-mono text-sm rounded-xl px-4 py-3 outline-none transition-all",
            Icon && "pr-10",
            className
          )}
          {...props}
        />
        {Icon && (
          <div className="absolute right-3 top-3.5 text-slate-500">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export function Label({ className, children, ...props }) {
  return (
    <label className={cn("text-xs text-slate-400 block", className)} {...props}>
      {children}
    </label>
  );
}
