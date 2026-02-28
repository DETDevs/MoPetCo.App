import { useState } from "react";

import AsideSummary from "./AsideSummary";
import {
  Step1ServiceSelect,
  Step2DateTime,
  Step3ClientForm,
  Step4Confirmation,
} from "./steps";
import StepIndicator from "./ui/StepIndicator";

const steps = [
  Step1ServiceSelect,
  Step2DateTime,
  Step3ClientForm,
  Step4Confirmation,
] as const;

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const goToStep = (n: number) => {
    if (n < step) setStep(n);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 overflow-x-hidden min-h-[80vh]">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full">
        <div className="w-full lg:w-2/3 xl:w-3/5">
          <div className="mb-6">
            <StepIndicator
              step={step}
              total={steps.length}
              onGoToStep={goToStep}
            />
          </div>
          <div className="transition-all duration-300 ease-out">
            <StepComponent onNext={next} onPrev={prev} />
          </div>
        </div>

        <div className="w-full lg:w-1/3 xl:w-2/5 lg:sticky lg:top-24">
          <AsideSummary />
        </div>
      </div>
    </div>
  );
}
