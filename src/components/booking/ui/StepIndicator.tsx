import { useTranslation } from "@/i18n";

type Props = {
  step: number;
  total: number;
  onGoToStep?: (step: number) => void;
};

export default function StepIndicator({ step, total, onGoToStep }: Props) {
  const { t } = useTranslation();
  const label = `${t("booking.step")} ${step + 1} ${t("booking.step.of")} ${total}`;

  return (
    <div className="w-full space-y-3">
      <p className="text-sm font-semibold text-pink-600 tracking-wide">
        {label}
      </p>

      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const isCompleted = i < step;
          const isCurrent = i === step;
          const canClick = isCompleted && !!onGoToStep;

          return (
            <div key={i} className="flex items-center gap-2 flex-1">
              <button
                disabled={!canClick}
                onClick={() => canClick && onGoToStep!(i)}
                className={`
                  relative h-2.5 w-full rounded-full transition-all duration-500 ease-out
                  ${
                    isCurrent
                      ? "bg-gradient-to-r from-pink-500 to-pink-400 shadow-sm shadow-pink-200"
                      : ""
                  }
                  ${
                    isCompleted
                      ? "bg-gradient-to-r from-pink-500 to-pink-400 cursor-pointer hover:shadow-md hover:shadow-pink-200"
                      : ""
                  }
                  ${!isCompleted && !isCurrent ? "bg-gray-200" : ""}
                `}
                title={canClick ? `${t("booking.step")} ${i + 1}` : undefined}
              >
                {isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-pink-400 animate-pulse opacity-30" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
