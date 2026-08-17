interface Step {
  number: number;
  text: string;
}

interface NumberedStepsProps {
  steps: Step[];
}

export function NumberedSteps({ steps }: NumberedStepsProps) {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step) => (
        <li key={step.number} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 font-mono text-[13px] font-bold text-primary-blue">
            {step.number}
          </span>
          <p className="pt-1 text-[14.5px] leading-relaxed text-grey">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
