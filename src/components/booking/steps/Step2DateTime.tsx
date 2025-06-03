import { format, endOfYear } from "date-fns";
import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";         // ← íconos

import { Button } from "@/components/ui/button";
import { useBooking } from "@/store/booking";
import { useSlots } from "../hooks/useSlots";
import TimeSlotList from "../ui/TimeSlotList";
import HorizontalCalendar from "../ui/CalendarHoriz";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2DateTime({ onNext, onPrev }: Props) {
  const { service, employee, date, time, setDateTime } = useBooking();

  const today          = new Date();
  const endOfThisYear  = endOfYear(today);
  const [selectedDay, setSelectedDay] = useState<Date>(
    date ? new Date(date) : today
  );

  const iso           = format(selectedDay, "yyyy-MM-dd");
  const { slots, loading } = useSlots(service?.id, employee?.id, iso);

  const canContinue = !!time;
  const tzLabel     = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <section className="flex flex-col space-y-6 max-w-xl w-full md:w-[30vw] mx-auto rounded-xl shadow-lg bg-white py-6 px-4">
      {/* Título */}
      <h1 className="flex items-center gap-2 text-2xl font-semibold">
        <CalendarDays className="w-6 h-6 text-pink-500" />
        Seleccionar fecha y hora
      </h1>

      {/* Calendario horizontal */}
      <HorizontalCalendar
        selected={selectedDay}
        onSelect={(d) => {
          setSelectedDay(d);
          setDateTime(format(d, "yyyy-MM-dd"), "");   // reset hora
        }}
        fromDate={today}
        toDate={endOfThisYear}
      />

      {/* Etiqueta de zona horaria */}
      <p className="text-xs text-gray-500 -mt-2">
        Horarios mostrados en <span className="font-medium">{tzLabel}</span>
      </p>

      {/* Lista de horarios */}
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <Clock className="w-5 h-5 text-pink-500" />
          Horarios disponibles — {format(selectedDay, "dd MMM yyyy")}
        </h2>

        {loading ? (
          <p>Cargando horarios…</p>
        ) : (
          <TimeSlotList
            slots={slots}
            selected={time}
            onSelect={(t) => setDateTime(iso, t)}
          />
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" onClick={onPrev}>
          Atrás
        </Button>
        <Button disabled={!canContinue} onClick={onNext}>
          Continuar
        </Button>
      </div>
    </section>
  );
}
