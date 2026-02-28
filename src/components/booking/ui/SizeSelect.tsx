import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PriceItem } from "@/components/booking/types/Servicio";

export default function SizeSelect({
  prices,
  value,
  onChange,
}: {
  prices: PriceItem[];
  value?: number;
  onChange: (idPrecio: number) => void;
}) {
  const iconBySize = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("extra small")) return "🐾";
    if (l.includes("small")) return "🐶";
    if (l.includes("medium")) return "🐕";
    if (l.includes("large")) return "🦮";
    if (l.includes("x large")) return "🐕‍🦺";
    return "🐾";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prices.map((p) => {
        const isSelected = p.idPrecio === value;
        return (
          <Tooltip key={p.idPrecio}>
            <TooltipTrigger asChild>
              <button
                onClick={() => onChange(p.idPrecio)}
                className={cn(
                  "relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ease-out text-left group overflow-hidden",
                  isSelected
                    ? "border-pink-400 bg-gradient-to-br from-pink-50 to-white shadow-lg shadow-pink-100/50 scale-[1.02]"
                    : "border-gray-200 bg-white hover:border-pink-200 hover:shadow-md hover:shadow-pink-50/30 hover:-translate-y-0.5",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 transition-opacity duration-300",
                    isSelected ? "opacity-100" : "group-hover:opacity-100",
                  )}
                />

                {isSelected && (
                  <CheckCircle2 className="absolute top-2.5 right-2.5 w-4 h-4 text-pink-500 z-10" />
                )}

                <div
                  className={cn(
                    "text-2xl transition-transform duration-300",
                    isSelected ? "scale-110" : "group-hover:scale-105",
                  )}
                >
                  {iconBySize(p.rangoPeso.nombre)}
                </div>

                <div className="flex flex-col relative z-10">
                  <span
                    className={cn(
                      "font-semibold transition-colors",
                      isSelected ? "text-pink-700" : "text-gray-800",
                    )}
                  >
                    {p.rangoPeso.nombre}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-pink-500" : "text-gray-500",
                    )}
                  >
                    ${p.monto}
                  </span>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-white text-black border border-gray-200 shadow-lg rounded-xl px-3 py-2">
              {p.rangoPeso.pesoMin}–{p.rangoPeso.pesoMax} lbs
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
