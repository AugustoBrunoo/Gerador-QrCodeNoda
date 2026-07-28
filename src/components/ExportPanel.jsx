import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { Download, Copy, Check } from "lucide-react";

export function ExportPanel({ handleDownload, handleCopyToClipboard, downloadSize, setDownloadSize, copied }) {
  return (
    <GlassCard delay={0.3} className="space-y-4">
      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
        Exportar & Compartilhar
      </span>

      <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
        <span>Resolução:</span>
        <div className="flex items-center gap-2">
          {[500, 1000, 2000].map((res) => (
            <button
              key={res}
              onClick={() => setDownloadSize(res)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                downloadSize === res
                  ? 'bg-noda-500 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {res}px
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button variant="primary" className="flex-col py-3 px-2" onClick={() => handleDownload('png')}>
          <span className="text-sm">PNG</span>
          <span className="text-[10px] opacity-80 font-normal">Alta Qualidade</span>
        </Button>
        <Button variant="secondary" className="flex-col py-3 px-2" onClick={() => handleDownload('svg')}>
          <span className="text-sm">SVG</span>
          <span className="text-[10px] text-slate-400 font-normal">Vetor Gráfico</span>
        </Button>
        <Button variant="secondary" className="flex-col py-3 px-2" onClick={() => handleDownload('webp')}>
          <span className="text-sm">WEBP</span>
          <span className="text-[10px] text-slate-400 font-normal">Otimizado Web</span>
        </Button>
      </div>

      <Button
        variant="outline"
        className="w-full text-xs"
        onClick={handleCopyToClipboard}
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400 group-hover:text-noda-400 transition-colors" />}
        <span>{copied ? "Copiado!" : "Copiar Imagem"}</span>
      </Button>
    </GlassCard>
  );
}
