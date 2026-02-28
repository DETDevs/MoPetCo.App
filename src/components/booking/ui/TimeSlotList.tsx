interface Slot {
  time: string;
  available: boolean;
}

export default function TimeSlotList({
  slots,
  selected,
  onSelect,
}: {
  slots: Slot[];
  selected?: string;
  onSelect: (t: string) => void;
}) {
  if (!slots.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {slots.map((s) => {
        const isSelected = s.time === selected;
        return (
          <button
            key={s.time}
            disabled={!s.available}
            onClick={() => onSelect(s.time)}
            className={`
              relative py-2.5 px-4 rounded-full text-sm font-medium
              transition-all duration-300 ease-out
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2
              ${
                isSelected
                  ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg shadow-pink-200/50 scale-105"
                  : s.available
                    ? "bg-white border border-gray-200 text-gray-700 hover:border-pink-300 hover:text-pink-600 hover:shadow-md hover:shadow-pink-50/40 hover:-translate-y-0.5"
                    : "bg-gray-50 border border-gray-100 text-gray-300 cursor-not-allowed"
              }
            `}
          >
            {s.time}
            {isSelected && (
              <span className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-10" />
            )}
          </button>
        );
      })}
    </div>
  );
}
