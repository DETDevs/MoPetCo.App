// src/components/booking/StepIndicator.tsx
export default function StepIndicator({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <p className="text-sm font-medium text-muted-foreground mb-4">
      Paso {step + 1} de {total}
    </p>
  );
}
