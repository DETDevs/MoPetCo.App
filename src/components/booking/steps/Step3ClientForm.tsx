import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/store/booking";

import { createBooking, BookingRequest } from "../api/booking";

const schema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  idNumber: z.string().min(5, "Documento inválido"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3ClientForm({ onNext, onPrev }: Props) {
  const {
    service,
    employee,
    date,
    time,
    setClient,
    setBookingId,
  } = useBooking();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!service || !employee || !date || !time) return;

    setClient(data);

    const body: BookingRequest = {
      serviceId: service.id,
      employeeId: employee.id,
      date,
      time,
      client: data,
    };

    try {
      const resp = await createBooking(body);
      setBookingId(resp.id);        
      onNext();                     
    } catch (e) {
      console.error("Error creando reserva", e);
      alert("No se pudo crear la reserva. Intenta de nuevo.");
    }
  };

  return (
    <section className="relative flex flex-col py-2 px-3 space-y-6 w-[22rem] md:w-[24vw] h-[35rem] shadow-lg shadow-slate-400 rounded-lg">
      <h1 className="text-2xl font-semibold">Tus datos</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <Field label="Nombre completo" error={errors.name?.message}>
          <Input {...register("name")} />
        </Field>

        <Field label="Documento de identidad" error={errors.idNumber?.message}>
          <Input {...register("idNumber")} />
        </Field>

        <Field label="Correo electrónico" error={errors.email?.message}>
          <Input type="email" {...register("email")} />
        </Field>

        <Field label="Teléfono" error={errors.phone?.message}>
          <Input {...register("phone")} />
        </Field>

        <div className="absolute bottom-6 flex gap-4 pt-4">
          <Button variant="outline" type="button" onClick={onPrev}>
            Atrás
          </Button>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Enviando…" : "Confirmar reserva"}
          </Button>
        </div>
      </form>
    </section>
  );
}

/* -------- componente auxiliar ---------- */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
