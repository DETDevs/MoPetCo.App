import { addDays, format } from "date-fns";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/store/booking";

import { useSlots } from "../hooks/useSlots";
import TimeSlotList from "../ui/TimeSlotList";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2DateTime({ onNext, onPrev }: Props) {
  const { service, employee, date, time, setDateTime } = useBooking();

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date>(
    date ? new Date(date) : today,
  );

  const iso = format(selectedDay, "yyyy-MM-dd");
  const { slots, loading } = useSlots(service?.id, employee?.id, iso);

  const canContinue = !!time;

  return (
    <section className="flex-1 space-y-6">
      <h1 className="text-2xl font-semibold">Seleccionar fecha y hora</h1>

      <Calendar
        mode="single"
        selected={selectedDay}
        disabled={(d) => d < today}
        initialFocus
        fromDate={today}
        toDate={addDays(today, 60)} // 2 meses vista
        onSelect={(d) => {
          if (!d) return;
          setSelectedDay(d);
          setDateTime(format(d, "yyyy-MM-dd"), "");
        }}
      />

      <div className="space-y-2">
        <h2 className="text-lg font-medium">
          Horarios disponibles – {format(selectedDay, "dd MMM yyyy")}
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

      <div className="flex gap-4 pt-6">
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
