import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { UIService } from "../types/Servicio";

interface Props {
  svc: UIService;
  selected: boolean;
  onSelect: () => void;
}

export default function ServiceCard({ svc, selected, onSelect }: Props) {
  return (
    <Card
      onClick={onSelect}
      className={`
        relative cursor-pointer transition-all duration-300 ease-out overflow-hidden group
        ${
          selected
            ? "border-pink-400 bg-gradient-to-br from-pink-50 to-white shadow-lg shadow-pink-100/50 scale-[1.02]"
            : "border-gray-100 bg-white hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50/40 hover:-translate-y-0.5"
        }
      `}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 transition-opacity duration-300 ${selected ? "opacity-100" : "group-hover:opacity-100"}`}
      />

      <CardHeader className="relative z-10">
        {selected && (
          <div className="absolute top-3 right-3">
            <div className="relative">
              <CheckCircle2 className="w-5 h-5 text-pink-500" />
              <span className="absolute inset-0 animate-ping">
                <CheckCircle2 className="w-5 h-5 text-pink-300 opacity-30" />
              </span>
            </div>
          </div>
        )}
        <CardTitle
          className={`text-base transition-colors ${selected ? "text-pink-700" : "text-gray-800"}`}
        >
          {svc.name}
        </CardTitle>
        <CardDescription className="text-gray-500">
          {svc.duration}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
