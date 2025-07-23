import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getServicios } from "@/Service/serviceCache";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PawPrint } from "lucide-react";

import type { Servicio } from "@/types/Servicio";
import type { UIService } from "@/components/booking/types/Servicio";

import { useBooking } from "@/store/booking";
import { mapServicioToUIService } from "@/utils/mapServicio";

export default function ServicesShowcase() {
  const nav = useNavigate();
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const { reset, setService } = useBooking();

  useEffect(() => {
    getServicios().then(setServicios);
  }, []);

  const handleServiceClick = (svc: Servicio) => {
    reset(); // limpia paso anterior
    const uiSvc: UIService = mapServicioToUIService(svc);
    setService(uiSvc); // guarda en Zustand
    nav(`/booking?serviceId=${svc.idServicio}`);
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen mt-20 px-4 md:px-2">
      <SectionTitle>Nuestros Servicios</SectionTitle>

      <div className="grid gap-6 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s) => (
          <Card
            key={s.idServicio}
            role="button"
            tabIndex={0}
            onClick={() => handleServiceClick(s)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(s);
              }
            }}
            className="relative cursor-pointer h-[18rem] rounded-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 shadow-md"
            style={{
              backgroundImage: `url(${s.urlImagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label={`Seleccionar servicio ${s.titulo}`}
          >
            <div className="absolute inset-0 bg-black/50 z-0" />

            <CardHeader className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
              <PawPrint className="w-8 h-8 text-white mb-2 opacity-90" />
              <CardTitle className="text-white text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-lg">
                {s.titulo}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
