// src/components/booking/StepIndicator.tsx
export default function StepIndicator({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <p className="absolute right-2 md:left-32 top-1 md:top-0 text-md font-medium text-muted-foreground mb-4">
      Paso <span className="text-pink-500">{step + 1}</span> de <span className="text-pink-500">{total}</span>
    </p>
  );
}
