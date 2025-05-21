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

  return (
    <div className="flex flex-col justify-around w-[80%] lg:flex-row gap-8">
      <div className="">
        <StepIndicator step={step} total={steps.length} /> 
        <StepComponent onNext={next} onPrev={prev} />
      </div>
       <AsideSummary currentStep={step} totalSteps={steps.length} />
    </div>
  );
}
