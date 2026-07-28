import { GlassCard } from "../ui/GlassCard";

export function Customization({
  bgColor, setBgColor,
  dotColor, setDotColor,
  cornerColor, setCornerColor,
  dotType, setDotType,
  cornerType, setCornerType
}) {
  return (
    <GlassCard delay={0.2} className="space-y-5">
      <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-800">
        Personalização Visual
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Cor dos Pontos", value: dotColor, setter: setDotColor },
          { label: "Cor dos Cantos", value: cornerColor, setter: setCornerColor },
          { label: "Cor do Fundo", value: bgColor, setter: setBgColor }
        ].map(({ label, value, setter }, i) => (
          <div key={i} className="space-y-1.5">
            <label className="text-xs text-slate-400">{label}</label>
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 transition-colors focus-within:border-noda-500">
              <input
                type="color"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 shrink-0"
              />
              <span className="text-xs font-mono text-slate-300 uppercase truncate">{value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="space-y-1.5">
          <label className="text-xs text-slate-400">Estilo dos Pontos</label>
          <select
            value={dotType}
            onChange={(e) => setDotType(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl p-2.5 outline-none focus:border-noda-500 transition-colors"
          >
            <option value="rounded">Arredondado (Suave)</option>
            <option value="dots">Círculos (Pontilhado)</option>
            <option value="classy">Elegante (Classy)</option>
            <option value="classy-rounded">Elegante Arredondado</option>
            <option value="square">Quadrado Padrão</option>
            <option value="extra-rounded">Super Arredondado</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-slate-400">Moldura de Canto</label>
          <select
            value={cornerType}
            onChange={(e) => setCornerType(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl p-2.5 outline-none focus:border-noda-500 transition-colors"
          >
            <option value="extra-rounded">Arredondado Moderno</option>
            <option value="square">Quadrado Clássico</option>
            <option value="dot">Círculo Suave</option>
          </select>
        </div>
      </div>
    </GlassCard>
  );
}
