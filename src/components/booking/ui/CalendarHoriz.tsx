import { useEffect, useMemo, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfYear,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
} from "date-fns";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Props {
  selected?: Date;
  onSelect: (date: Date) => void;
  fromDate?: Date;
  toDate?: Date;
}

export default function HorizontalCalendar({
  selected,
  onSelect,
  fromDate = new Date(),
  toDate,
}: Props) {
  const maxDate = toDate ?? endOfYear(fromDate);

  const [currentMonth, setCurrentMonth] = useState(() =>
    startOfMonth(
      selected && !isBefore(selected, fromDate) ? selected : fromDate
    )
  );

  useEffect(() => {
    if (selected && !isSameMonth(selected, currentMonth)) {
      setCurrentMonth(startOfMonth(selected));
    }
  }, [selected]);

  useEffect(() => {
    setCurrentMonth((m) =>
      isBefore(m, fromDate) ? startOfMonth(fromDate) : m
    );
  }, [fromDate]);

  const days = useMemo(
    () =>
      eachDayOfInterval({
        start: currentMonth,
        end: endOfMonth(currentMonth),
      }),
    [currentMonth]
  );

  const canGoPrev = !isBefore(
    startOfMonth(currentMonth),
    startOfMonth(fromDate)
  );

  const nextMonth = addMonths(currentMonth, 1);
  const canGoNext = !isAfter(nextMonth, startOfMonth(maxDate)); // ≤ maxDate

  const handleSelect = (day: Date, disabled: boolean) => {
    if (disabled) return;
    onSelect(day);
    setCurrentMonth(startOfMonth(day));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium select-none px-4">
          {format(currentMonth, "MMMM yyyy")}
        </p>

        <div className="flex gap-1">
          {canGoPrev && (
            <button
              onClick={() => setCurrentMonth((m) => addMonths(m, -1))}
              aria-label="Mes anterior"
              className="p-1 rounded-md hover:bg-slate-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {canGoNext && (
            <button
              onClick={() => setCurrentMonth((m) => addMonths(m, 1))}
              aria-label="Mes siguiente"
              className="p-1 rounded-md hover:bg-slate-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Lista de días */}
      <ul className="flex gap-2 overflow-x-auto pb-1 scroll-smooth">
        {days.map((day) => {
          const disabled =
            isBefore(day, fromDate) || (maxDate && isAfter(day, maxDate));
          const isSelected = selected ? isSameDay(day, selected) : false;

          return (
            <li key={day.toISOString()} className="flex-shrink-0 px-2">
              <button
                onClick={() => handleSelect(day, disabled)}
                disabled={disabled}
                className={`flex flex-col items-center w-14 py-2 rounded-lg border transition 
                  ${
                    isSelected
                      ? "bg-pink-500 text-white border-pink-500"
                      : "border-slate-200"
                  }
                  ${
                    disabled
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-slate-100"
                  }`}
              >
                <span className="text-[0.65rem] font-medium leading-none uppercase select-none">
                  {format(day, "EEE")}
                </span>
                <span className="text-sm font-semibold select-none">
                  {format(day, "d")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
