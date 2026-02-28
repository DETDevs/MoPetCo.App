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
import { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

interface Props {
  selected?: Date;
  onSelect: (date: Date) => void;
  fromDate?: Date;
  toDate?: Date;
}

const HorizontalCalendar = forwardRef<HTMLUListElement, Props>(
  ({ selected, onSelect, fromDate = new Date(), toDate }: Props, ref) => {
    const maxDate = toDate ?? endOfYear(fromDate);

    const [currentMonth, setCurrentMonth] = useState(() =>
      startOfMonth(
        selected && !isBefore(selected, fromDate) ? selected : fromDate,
      ),
    );

    useEffect(() => {
      if (selected && !isSameMonth(selected, currentMonth)) {
        setCurrentMonth(startOfMonth(selected));
      }
    }, [selected]);

    useEffect(() => {
      setCurrentMonth((m) =>
        isBefore(m, fromDate) ? startOfMonth(fromDate) : m,
      );
    }, [fromDate]);

    const days = useMemo(
      () =>
        eachDayOfInterval({
          start: currentMonth,
          end: endOfMonth(currentMonth),
        }),
      [currentMonth],
    );

    const nextMonth = addMonths(currentMonth, 1);
    const canGoPrev = !isBefore(
      startOfMonth(currentMonth),
      startOfMonth(fromDate),
    );
    const canGoNext = !isAfter(nextMonth, startOfMonth(maxDate));

    const handleSelect = (day: Date, disabled: boolean) => {
      if (disabled) return;
      onSelect(day);
      setCurrentMonth(startOfMonth(day));
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-700 select-none px-1 tracking-wide">
            {format(currentMonth, "MMMM yyyy")}
          </p>

          <div className="flex gap-1">
            {canGoPrev && (
              <button
                onClick={() => setCurrentMonth((m) => addMonths(m, -1))}
                aria-label="Previous month"
                className="p-1.5 rounded-full hover:bg-pink-50 text-gray-500 hover:text-pink-500 transition-all duration-200 focus-visible:outline-pink-500"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {canGoNext && (
              <button
                onClick={() => setCurrentMonth((m) => addMonths(m, 1))}
                aria-label="Next month"
                className="p-1.5 rounded-full hover:bg-pink-50 text-gray-500 hover:text-pink-500 transition-all duration-200 focus-visible:outline-pink-500"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <ul
          ref={ref}
          className="flex gap-2 overflow-x-auto pb-2 scroll-smooth scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent"
        >
          {days.map((day) => {
            const disabled =
              isBefore(day, fromDate) || (maxDate && isAfter(day, maxDate));
            const isSelected = selected ? isSameDay(day, selected) : false;
            const isToday = isSameDay(day, new Date());

            return (
              <li
                key={day.toISOString()}
                className="flex-shrink-0"
                data-selected={isSelected || undefined}
              >
                <button
                  onClick={() => handleSelect(day, disabled)}
                  disabled={disabled}
                  className={clsx(
                    "relative flex flex-col items-center w-14 py-2.5 rounded-2xl border-2 transition-all duration-300 ease-out",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-500",
                    isSelected
                      ? "bg-gradient-to-b from-pink-500 to-pink-400 text-white border-pink-400 shadow-lg shadow-pink-200/50 scale-105"
                      : isToday
                        ? "border-pink-300 bg-pink-50 text-pink-600"
                        : "border-gray-100 bg-white",
                    disabled
                      ? "opacity-30 cursor-not-allowed"
                      : !isSelected &&
                          "hover:border-pink-200 hover:bg-pink-50/50 hover:-translate-y-0.5",
                  )}
                >
                  <span className="text-[0.6rem] font-semibold leading-none uppercase select-none tracking-wider">
                    {format(day, "EEE")}
                  </span>
                  <span className="text-base font-bold select-none mt-0.5">
                    {format(day, "d")}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default HorizontalCalendar;
