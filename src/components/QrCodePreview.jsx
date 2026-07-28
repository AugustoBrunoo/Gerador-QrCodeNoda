import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "../utils/cn";

export function QrCodePreview({
  url,
  qrSize = 280,
  bgColor,
  dotColor,
  cornerColor,
  dotType,
  cornerType,
  cornerDotType,
  includeLogo,
  customLogo,
  logoSize,
  showFrame,
  frameText,
  qrCodeRef
}) {
  const qrContainerRef = useRef(null);

  useEffect(() => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling({
        width: qrSize,
        height: qrSize,
        type: "canvas",
        data: url || "https://nodasolucoes.dev",
        image: includeLogo ? customLogo : "",
        dotsOptions: { color: dotColor, type: dotType },
        backgroundOptions: { color: bgColor },
        imageOptions: { crossOrigin: "anonymous", margin: 4, imageSize: logoSize },
        cornersSquareOptions: { color: cornerColor, type: cornerType },
        cornersDotOptions: { color: dotColor, type: cornerDotType }
      });

      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = "";
        qrCodeRef.current.append(qrContainerRef.current);
      }
    } else {
      qrCodeRef.current.update({
        width: qrSize,
        height: qrSize,
        data: url || "https://nodasolucoes.dev",
        image: includeLogo ? customLogo : "",
        dotsOptions: { color: dotColor, type: dotType },
        backgroundOptions: { color: bgColor },
        imageOptions: { margin: 4, imageSize: logoSize },
        cornersSquareOptions: { color: cornerColor, type: cornerType },
        cornersDotOptions: { color: dotColor, type: cornerDotType }
      });
    }
  }, [url, qrSize, bgColor, dotColor, cornerColor, dotType, cornerType, cornerDotType, includeLogo, customLogo, logoSize, qrCodeRef]);

  return (
    <GlassCard delay={0.2} className="flex flex-col items-center justify-center text-center">
      <div className="absolute top-3 left-4 text-[11px] font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Ao Vivo
      </div>

      <div className={cn("mt-6 p-6 rounded-3xl transition-all shadow-2xl duration-300", showFrame ? "bg-slate-900 border border-slate-700/60 shadow-noda-600/10" : "bg-transparent")}>
        <div className="p-3 rounded-2xl bg-white shadow-inner flex items-center justify-center">
          <div ref={qrContainerRef} className="flex items-center justify-center overflow-hidden rounded-xl"></div>
        </div>

        {showFrame && (
          <div className="mt-4 pt-2">
            <p className="text-sm font-bold text-slate-200 tracking-wide">{frameText}</p>
            <p className="text-[11px] font-mono text-noda-400 mt-0.5">nodasolucoes.dev</p>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
