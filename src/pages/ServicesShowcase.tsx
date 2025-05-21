import { useNavigate } from "react-router-dom";
import { getServicios } from "@/Service/serviceCache";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Servicio } from "@/types/Servicio";
import { SectionTitle } from "@/components/common/SectionTitle";

export default function ServicesShowcase() {
  const nav = useNavigate();
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    getServicios().then(setServicios);
  }, []);

  return (
    <main className="flex flex-col items-center w-full min-h-screen mt-20 px-4 md:px-2">
      <SectionTitle>Nuestros Servicios</SectionTitle>
      <div
        className="grid gap-6 w-full max-w-4xl
                      sm:grid-cols-2  lg:grid-cols-3"
      >
        {servicios.map((s) => (
          <Card
            key={s.idServicio}
            onClick={() => nav(`/booking?serviceId=${s.idServicio}`)}
            className="relative cursor-pointer hover:shadow-md transition h-[18rem] border-2 border-gray-400 bg-cover bg-center bg-no-repeat text-white flex justify-center items-center"
            style={{ backgroundImage: `url(${s.urlImagen})` }}
          >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/40 rounded-md"></div>

            <CardHeader className="relative z-10 text-center text-[2.5rem] break-words">
              <CardTitle className="leading-tight font-extrabold font-sans">
                {s.titulo}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
