import { currency } from "./utilss/format";
import { useBooking } from "@/store/booking";
// import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AsideSummary() {
  const { service, petSize, employee, date, time, reset, client } =
    useBooking();

  const price = petSize?.price ?? service?.price ?? 0;

  return (
    <aside className="w-full lg:w-[22rem] shrink-0  rounded-md p-4 space-y-6  h-[30rem] shadow-lg shadow-slate-400">
      <h2 className="text-lg font-semibold">Resumen</h2>

      <section className="space-y-1">
        <h3 className="text-sm text-muted-foreground">Servicio</h3>
        {service ? (
          <p className="font-medium">{service.name}</p>
        ) : (
          <p className="italic text-muted-foreground">Sin seleccionar</p>
        )}
      </section>

      <section className="space-y-1">
        <h3 className="text-sm text-muted-foreground">Tamaño</h3>
        {petSize ? (
          <p className="flex justify-between">
            {petSize.label} <span>{currency(petSize.price)}</span>
          </p>
        ) : (
          <p className="italic text-muted-foreground">Sin seleccionar</p>
        )}
      </section>

      <section className="space-y-1">
        <h3 className="text-sm text-muted-foreground">Encargado</h3>
        {employee ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback>
                {employee.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{employee.name}</span>
          </div>
        ) : (
          <p className="italic text-muted-foreground">Sin seleccionar</p>
        )}
      </section>

      <section className="space-y-1">
        <h3 className="text-sm text-muted-foreground">Fecha y hora</h3>
        {date && time ? (
          <p>
            {date} – {time}
          </p>
        ) : (
          <p className="italic text-muted-foreground">Sin seleccionar</p>
        )}
      </section>

      <section className="space-y-1">
        <h3 className="text-sm text-muted-foreground">Cliente</h3>
        {client ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback>
                {client.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{client.name}</span>
          </div>
        ) : (
          <p className="italic text-muted-foreground">Sin seleccionar</p>
        )}
      </section>

      <section className="flex justify-between pt-4 border-t font-semibold">
        <span>Total</span>
        <span>{currency(price)}</span>
      </section>

      {/* <Button
        variant="outline"
        className="w-fullA shadow-md shadow-gray-400"
        onClick={reset}
        disabled={currentStep === totalSteps - 1}
      >
        Reiniciar flujo
      </Button> */}
    </aside>
  );
}
