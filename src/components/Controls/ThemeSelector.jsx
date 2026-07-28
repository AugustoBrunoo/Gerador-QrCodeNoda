import { GlassCard } from "../ui/GlassCard";
import { PRESETS } from "../../utils/constants";

export function ThemeSelector({ applyPreset }) {
  return (
    <GlassCard delay={0.1} className="space-y-3">
      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
        Estilos Predefinidos
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => applyPreset(preset)}
            className="flex flex-col items-center p-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left group active:scale-95"
          >
            <div className="w-full h-8 rounded-lg mb-2 flex items-center justify-center border border-slate-700/50" style={{ backgroundColor: preset.bgColor }}>
              <div className="w-4 h-4 rounded-xs" style={{ backgroundColor: preset.dotColor }}></div>
            </div>
            <span className="text-[11px] font-medium text-slate-300 group-hover:text-white truncate w-full text-center">
              {preset.name}
            </span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
