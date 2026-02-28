import { useEffect, useState, useCallback } from "react";
import { getServicios } from "@/Service/serviceCache";
import type { Servicio as ApiServicio } from "@/types/Servicio";
import { UIService } from "../types/Servicio";

export function useServicios() {
  const [services, setServices] = useState<UIService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const api = await getServicios();
      setServices(api.map(mapToUI));
    } catch (e) {
      console.error("Error servicios:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { services, loading, error, refetch: fetch };
}

function safeParseIncludes(raw: unknown): { id: number; descripcion: string }[] {
  if (!raw || typeof raw !== "string") return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function mapToUI(s: ApiServicio): UIService {
  return {
    id: String(s.idServicio),
    name: s.titulo,
    category: s.subTitulo ?? "General",
    duration: "1 h",
    price: Number(s.precio?.[0]?.monto ?? 0),
    prices: s.precio ?? [],
    description: s.descripcion,
    includes: safeParseIncludes(s.incluye),
    note: s.nota,
  };
}
