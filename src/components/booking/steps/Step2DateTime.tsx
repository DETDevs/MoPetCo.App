import { useEffect, useRef, useState } from "react";
import { format, endOfYear } from "date-fns";
import { CalendarDays, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useBooking } from "@/store/booking";
import { useSlots } from "../hooks/useSlots";
import TimeSlotList from "../ui/TimeSlotList";
import HorizontalCalendar from "../ui/CalendarHoriz";
import { useTranslation } from "@/i18n";

const SkeletonSlots = () => (
  <div className="grid grid-cols-3 gap-2 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-10 rounded bg-gray-200 dark:bg-gray-700" />
    ))}
  </div>
);

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2DateTime({ onNext, onPrev }: Props) {
  const { service, employee, date, time, setDateTime } = useBooking();
  const { t } = useTranslation();

  const today = new Date();
  const endOfThisYear = endOfYear(today);

  const [selectedDay, setSelectedDay] = useState<Date>(
    date ? new Date(date) : today,
  );

  const calRef = useRef<HTMLUListElement | null>(null);

  const iso = format(selectedDay, "yyyy-MM-dd");

  const { slots, loading } = useSlots(service?.id, employee?.id, iso);

  const canContinue = !!time;

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const chip = calRef.current?.querySelector('[data-selected="true"]');
    chip?.scrollIntoView({
      behavior: "instant",
      block: "nearest",
      inline: "center",
    });
  }, [selectedDay]);

  return (
    <section className="flex flex-col space-y-6 w-full max-w-xl mx-auto rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100 bg-white py-8 px-5">
      <h1 className="flex items-center gap-2 text-xl font-bold text-gray-800">
        <CalendarDays className="w-6 h-6 text-pink-500" />
        {t("booking.selectDatetime")}
      </h1>

      <HorizontalCalendar
        ref={calRef}
        selected={selectedDay}
        onSelect={(d) => {
          setSelectedDay(d);
          setDateTime(format(d, "yyyy-MM-dd"), "");
        }}
        fromDate={today}
        toDate={endOfThisYear}
      />

      <p className="text-xs text-gray-500 -mt-2">
        {t("booking.timezoneNote")}&nbsp;
        <span className="font-medium">
          {t("booking.localTime")}&nbsp;(GMT‑
          {Math.abs(today.getTimezoneOffset() / 60)}, {tz})
        </span>
      </p>

      <div className="space-y-2">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <Clock className="w-5 h-5 text-pink-500" />
          {t("booking.availableSlots")} — {format(selectedDay, "dd MMM yyyy")}
        </h2>

        {loading ? (
          <SkeletonSlots />
        ) : slots.length === 0 ? (
          <p className="text-sm text-gray-500 italic py-4 text-center">
            {t("booking.noSlots")}
          </p>
        ) : (
          <TimeSlotList
            slots={slots}
            selected={time}
            onSelect={(t) => setDateTime(iso, t)}
          />
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          className="rounded-full px-6 border-2 border-gray-200 hover:border-pink-200 hover:bg-pink-50 transition-all duration-200"
        >
          {t("booking.back")}
        </Button>
        <Button
          disabled={!canContinue}
          title={!canContinue ? t("booking.selectTime") : undefined}
          onClick={onNext}
          className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 shadow-lg shadow-pink-200/50 transition-all duration-300 disabled:opacity-40 disabled:shadow-none font-semibold"
        >
          {t("booking.continue")}
        </Button>
      </div>
    </section>
  );
}
