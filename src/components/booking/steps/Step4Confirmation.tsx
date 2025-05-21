import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useBooking } from "@/store/booking";
import { useNavigate } from "react-router-dom";

interface Props {
  onPrev: () => void;
}

export default function Step4Confirmation({ onPrev }: Props) {
  const { service, employee, date, time, bookingId, reset, petSize } =
    useBooking();

  const price = petSize?.price ?? service?.price ?? 0;
  const navigate = useNavigate();

  const nuevaReserva = () => {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPrev();
  };

  return (
    <section className="flex-1 flex flex-col items-center mt-10 space-y-6">
      <CheckCircle2 className="w-16 h-16 text-green-600" />
      <h1 className="text-3xl font-semibold text-center">
        ¡Solicitud enviada!
      </h1>
      <p className="text-muted-foreground text-center max-w-md">
        Te llegará un correo cuando confirmemos tu cita.
        <br />
        Id de reserva:&nbsp;
        <span className="font-medium">{bookingId}</span>
      </p>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Resumen de tu reserva</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <Row label="Servicio" value={service?.name} />
          <Row label="Encargado" value={employee?.name} />
          <Row label="Fecha" value={date} />
          <Row label="Hora" value={time} />
          <Row label="Total" value={service ? `$${price}` : undefined} bold />
        </CardContent>
      </Card>

      <Button
        onClick={() => {
          reset();
          navigate("/serivecesshow");
        }}
      >
        Hacer otra reserva
      </Button>
    </section>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value?: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={bold ? "font-semibold" : ""}>{value ?? "—"}</span>
    </div>
  );
}
