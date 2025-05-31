import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/store/booking";
import { useServicios } from "../hooks/useServicios";
import ServiceCard from "../ui/ServiceCard";
import EmployeeSelect from "../ui/EmployeeSelect";
import SizeSelect from "../ui/SizeSelect";
import empleadosData from "@/data/empleados.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface EmployeeMock {
  id: string;
  name: string;
  avatar: string;
  serviceId: string;
}

export default function Step1ServiceSelect({ onNext }: { onNext: () => void }) {
  const { service, employee, petSize, setService, setEmployee, setPetSize } =
    useBooking();
  const { services, loading } = useServicios();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!services.length) return;
    const idFromUrl = params.get("serviceId");
    if (idFromUrl && !service) {
      const pre = services.find((s) => s.id === idFromUrl);
      if (pre) setService(pre);
    }
  }, [services, params, service, setService]);

  const categories = [...new Set(services.map((s) => s.category))];
  const empleados = service
    ? (empleadosData as EmployeeMock[]).filter(
        (e) => String(e.serviceId) === service.id
      )
    : [];

  const canContinue = !!service && !!employee && !!petSize;

  if (loading) return <p className="p-6">Cargando servicios…</p>;

  return (
    <section className="flex flex-col h-[36rem] md:h-[30rem] justify-evenly shadow-lg shadow-slate-400 rounded-lg md:w-[30vw] px-4">
      <div className="my-2">
        <button
          onClick={() => navigate("/serivecesshow")}
          aria-label="servicedetail"
          className="text-black font-bold px-2 py-1 rounded-full shadow-md bg-white hover:bg-slate-200 transition duration-300"
        >
          <i className="fa-solid fa-arrow-left text-pink-500"></i>
        </button>
      </div>
      {!service && (
        <Tabs defaultValue={categories[0]} className="space-y-4">
          <TabsList className="flex flex-wrap gap-4">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent
              key={c}
              value={c}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {services
                .filter((s) => s.category === c)
                .map((svc) => (
                  <ServiceCard
                    key={svc.id}
                    svc={svc}
                    selected={false}
                    onSelect={() => {
                      setService(svc);
                      setEmployee(undefined);
                      setPetSize(undefined);
                    }}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      )}

      {service && (
        <>
          {service.prices.length ? (
            <div className="space-y-2">
              <h2 className="text-lg font-bold">
                Elige el tamaño de tu mascota
              </h2>
              <SizeSelect
                prices={service.prices}
                value={petSize?.idPrecio}
                onChange={(idPrecio) => {
                  const item = service.prices.find(
                    (p) => p.idPrecio === idPrecio
                  )!;
                  setPetSize({
                    idPrecio: item.idPrecio,
                    label: item.rangoPeso.nombre,
                    price: item.monto,
                  });
                }}
              />
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Este servicio no tiene precios configurados.
            </p>
          )}

          <div className="space-y-2 mt-4">
            <h2 className="text-lg font-bold">
              Elige el encargado de tu servicio:
              {/* <span className="font-semibold">{service.name}</span> */}
            </h2>
            <EmployeeSelect
              empleados={empleados}
              value={employee?.id}
              onChange={(id) => setEmployee(empleados.find((e) => e.id === id))}
            />
          </div>
        </>
      )}

      <Button className="my-4   w-28" disabled={!canContinue} onClick={onNext}>
        Continuar
      </Button>
    </section>
  );
}
