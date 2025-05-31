import { format, endOfYear } from "date-fns";
import { useState } from "react";

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

  const today = new Date();
  const endOfThisYear = endOfYear(today);
  const [selectedDay, setSelectedDay] = useState<Date>(
    date ? new Date(date) : today
  );

  const iso = format(selectedDay, "yyyy-MM-dd");
  const { slots, loading } = useSlots(service?.id, employee?.id, iso);

  const canContinue = !!time;

  return (
    <section className="flex flex-col space-y-6 w-[20rem] md:w-[30vw] justify-center items-center shadow-lg shadow-slate-400 rounded-lg py-4 mt-10">
      <h1 className="mt-6 text-2xl font-semibold">Seleccionar fecha y hora</h1>

      <HorizontalCalendar
        selected={selectedDay}
        onSelect={(d) => {
          setSelectedDay(d);
          setDateTime(format(d, "yyyy-MM-dd"), ""); // resetea hora
        }}
        fromDate={today}
        toDate={endOfThisYear}
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
