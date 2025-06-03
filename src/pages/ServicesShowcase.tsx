import { useNavigate } from "react-router-dom";
import { getServicios } from "@/Service/serviceCache";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Servicio } from "@/types/Servicio";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PawPrint } from "lucide-react"; // ícono opcional

export default function ServicesShowcase() {
  const nav = useNavigate();
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    getServicios().then(setServicios);
  }, []);

  return (
    <main className="flex flex-col items-center w-full min-h-screen mt-20 px-4 md:px-2">
      <SectionTitle>Nuestros Servicios</SectionTitle>
      <div className="grid gap-6 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s) => (
          <Card
            key={s.idServicio}
            onClick={() => nav(`/booking?serviceId=${s.idServicio}`)}
            className="relative cursor-pointer h-[18rem] rounded-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 shadow-md"
            style={{
              backgroundImage: `url(${s.urlImagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
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
