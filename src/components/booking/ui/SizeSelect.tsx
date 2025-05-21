import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { PriceItem } from "@/components/booking/types/Servicio"; // ✅

export default function SizeSelect({
  prices,
  value,
  onChange,
}: {
  prices: PriceItem[];
  value?: number;
  onChange: (idPrecio: number) => void;
}) {
  return (
    <RadioGroup
      value={value ? String(value) : undefined}
      onValueChange={(id) => onChange(Number(id))}
      className="grid sm:grid-cols-2 gap-3"
    >
      {prices.map((p) => (
        <div key={p.idPrecio} className="flex items-center gap-2">
          <RadioGroupItem value={String(p.idPrecio)} id={String(p.idPrecio)} />
          <Label htmlFor={String(p.idPrecio)} className="flex-1 cursor-pointer">
            {p.rangoPeso.nombre}: <span className="font-medium">${p.monto}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
