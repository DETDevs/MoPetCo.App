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
import { useTranslation } from "@/i18n";

interface EmployeeMock {
  id: string;
  name: string;
  avatar: string;
  serviceId: string;
}

export default function Step1ServiceSelect({ onNext }: { onNext: () => void }) {
  const {
    service,
    employee,
    petSize,
    setService,
    setEmployee,
    setPetSize,
    reset,
  } = useBooking();
  const { services, loading, error, refetch } = useServicios();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        (e) => String(e.serviceId) === service.id,
      )
    : [];

  const canContinue = !!service && !!employee && !!petSize;

  if (loading) {
    return (
      <section className="w-full px-5 py-8 bg-white rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100 space-y-4">
        <div className="animate-pulse space-y-5">
          <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl w-1/3" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-5 py-12 bg-white rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100 text-center space-y-4">
        <p className="text-red-500 font-medium">{t("booking.errorServices")}</p>
        <Button
          onClick={refetch}
          variant="outline"
          className="rounded-full px-6"
        >
          {t("common.retry")}
        </Button>
      </section>
    );
  }

  return (
    <section className="w-full px-5 py-8 bg-white rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
      <div className="mb-4">
        <button
          onClick={() => {
            reset();
            navigate("/services-showcase");
          }}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-gray-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-500 text-gray-500 transition-all duration-200 shadow-sm"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i>
        </button>
      </div>

      {!service && (
        <Tabs defaultValue={categories[0]} className="space-y-4">
          <TabsList className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c} className="text-sm">
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent
              key={c}
              value={c}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
            <div className="space-y-4 mt-4">
              <h2 className="text-base sm:text-lg font-bold">
                {t("booking.selectSize")}
              </h2>
              <SizeSelect
                prices={service.prices}
                value={petSize?.idPrecio}
                onChange={(idPrecio) => {
                  const item = service.prices.find(
                    (p) => p.idPrecio === idPrecio,
                  )!;
                  setPetSize({
                    idPrecio: item.idPrecio,
                    label: item.rangoPeso.nombre,
                    price: item.monto,
                  });
                }}
              />
              {petSize && (
                <div className="text-sm bg-pink-50 border border-pink-200 rounded-md px-4 py-2">
                  {t("booking.selectedSize")}{" "}
                  <strong className="text-pink-600">{petSize.label}</strong> –{" "}
                  {t("booking.price")}{" "}
                  <strong className="text-pink-600">${petSize.price}</strong>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {t("booking.noPrices")}
            </p>
          )}

          <div className="space-y-2 mt-6">
            <h2 className="text-base sm:text-lg font-bold">
              {t("booking.selectEmployee")}
            </h2>
            <EmployeeSelect
              empleados={empleados}
              value={employee?.id}
              onChange={(id) => setEmployee(empleados.find((e) => e.id === id))}
            />
          </div>
        </>
      )}

      <div className="flex justify-center mt-8">
        <Button
          className="w-full sm:w-2/3 cursor-pointer rounded-full h-12 text-base font-semibold bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 shadow-lg shadow-pink-200/50 transition-all duration-300 disabled:opacity-40 disabled:shadow-none"
          disabled={!canContinue}
          onClick={onNext}
        >
          {t("booking.continue")}
        </Button>
      </div>
    </section>
  );
}
