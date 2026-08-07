import { useState, useRef } from "react";
import { Link2 } from "lucide-react";
import QRCodeStyling from "qr-code-styling";

import { Header } from "./components/Header";
import { Toast } from "./components/ui/Toast";
import { Input } from "./components/ui/Input";
import { GlassCard } from "./components/ui/GlassCard";
import { ThemeSelector } from "./components/Controls/ThemeSelector";
import { Customization } from "./components/Controls/Customization";
import { QrCodePreview } from "./components/QrCodePreview";
import { ExportPanel } from "./components/ExportPanel";

import { DEFAULT_NODA_LOGO } from "./utils/constants";

export default function App() {
  const [url, setUrl] = useState("https://www.nodasolucoes.dev/");
  const [qrSize, setQrSize] = useState(280);
  const [downloadSize, setDownloadSize] = useState(1000);
  
  const [bgColor, setBgColor] = useState("#ffffff");
  const [dotColor, setDotColor] = useState("#0d9488");
  const [cornerColor, setCornerColor] = useState("#0f172a");
  const [dotType, setDotType] = useState("rounded");
  const [cornerType, setCornerType] = useState("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState("dot");
  
  const [includeLogo, setIncludeLogo] = useState(true);
  const [customLogo, setCustomLogo] = useState(DEFAULT_NODA_LOGO);
  const [logoSize, setLogoSize] = useState(0.25);
  
  const [frameText, setFrameText] = useState("Acesse Nosso Site");
  const [showFrame, setShowFrame] = useState(true);
  
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const qrCodeRef = useRef(null);

  const showNotification = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const applyPreset = (preset) => {
    setBgColor(preset.bgColor);
    setDotColor(preset.dotColor);
    setCornerColor(preset.cornerColor);
    setDotType(preset.dotType);
    setCornerType(preset.cornerType);
    setCornerDotType(preset.cornerDotType);
    showNotification(`Tema "${preset.name}" aplicado!`);
  };

  const handleDownload = (format) => {
    const downloadQr = new QRCodeStyling({
      width: downloadSize,
      height: downloadSize,
      type: "canvas",
      data: url || "https://nodasolucoes.dev",
      image: includeLogo ? customLogo : "",
      dotsOptions: { color: dotColor, type: dotType },
      backgroundOptions: { color: bgColor },
      imageOptions: { crossOrigin: "anonymous", margin: 4, imageSize: logoSize },
      cornersSquareOptions: { color: cornerColor, type: cornerType },
      cornersDotOptions: { color: dotColor, type: cornerDotType }
    });
    
    downloadQr.download({ name: "qrcode-noda-solucoes", extension: format });
    showNotification(`QR Code baixado em formato ${format.toUpperCase()}!`);
  };

  const handleCopyToClipboard = async () => {
    try {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.toBlob(async (blob) => {
          if (blob) {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            setCopied(true);
            showNotification("Imagem copiada para a área de transferência!");
            setTimeout(() => setCopied(false), 2500);
          }
        });
      }
    } catch (err) {
      showNotification("Não foi possível copiar diretamente. Utilize o botão de download.");
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setCustomLogo(uploadEvent.target.result);
        setIncludeLogo(true);
        showNotification("Logo customizada carregada!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full">
      <Header />
      <Toast message={toastMsg} isVisible={!!toastMsg} />

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start flex-1">
        <div className="lg:col-span-7 space-y-6">
          <GlassCard delay={0.0}>
            <Input 
              label="URL do Destino" 
              icon={Link2}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.nodasolucoes.dev/"
            />
          </GlassCard>

          <ThemeSelector applyPreset={applyPreset} />

          <Customization 
            bgColor={bgColor} setBgColor={setBgColor}
            dotColor={dotColor} setDotColor={setDotColor}
            cornerColor={cornerColor} setCornerColor={setCornerColor}
            dotType={dotType} setDotType={setDotType}
            cornerType={cornerType} setCornerType={setCornerType}
          />

          <GlassCard delay={0.3} className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Ícone / Logo Central
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={includeLogo} onChange={(e) => setIncludeLogo(e.target.checked)} className="sr-only peer" />
                <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-noda-500"></div>
              </label>
            </div>

            {includeLogo && (
              <div className="space-y-4 pt-1">
                <div className="flex items-center gap-3">
                  <button onClick={() => setCustomLogo(DEFAULT_NODA_LOGO)} className={`px-3 py-2 text-xs rounded-lg border transition-all ${customLogo === DEFAULT_NODA_LOGO ? 'bg-noda-500/20 border-noda-500 text-noda-400' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'}`}>
                    Logo Padrão
                  </button>
                  <label className="px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer transition-all flex items-center gap-1.5">
                    <span>Enviar Customizada</span>
                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                  </label>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Tamanho da Logo</span>
                    <span className="font-mono">{Math.round(logoSize * 100)}%</span>
                  </div>
                  <input type="range" min="0.1" max="0.35" step="0.01" value={logoSize} onChange={(e) => setLogoSize(parseFloat(e.target.value))} className="w-full accent-noda-500 bg-slate-800 rounded-lg h-1.5 cursor-pointer" />
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <QrCodePreview 
            url={url} qrSize={qrSize} bgColor={bgColor} dotColor={dotColor}
            cornerColor={cornerColor} dotType={dotType} cornerType={cornerType}
            cornerDotType={cornerDotType} includeLogo={includeLogo} customLogo={customLogo}
            logoSize={logoSize} showFrame={showFrame} frameText={frameText} qrCodeRef={qrCodeRef}
          />

          <ExportPanel 
            handleDownload={handleDownload} handleCopyToClipboard={handleCopyToClipboard}
            downloadSize={downloadSize} setDownloadSize={setDownloadSize} copied={copied}
          />
        </div>
      </main>

      <footer className="pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto">
        <p>© 2026 Noda Soluções Dev. Todos os direitos reservados.</p>
        <p className="font-mono text-[11px]">Desenvolvimento Web & Soluções Digitais</p>
      </footer>
    </div>
  );
}
