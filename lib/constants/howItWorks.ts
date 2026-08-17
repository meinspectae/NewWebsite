export interface HowItWorksStep {
  id: "setup" | "photograph" | "signatures" | "report";
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "setup",
    number: "01",
    title: "Set Up Property",
    description: "Add the property, unit, and everyone involved in seconds.",
  },
  {
    id: "photograph",
    number: "02",
    title: "Photograph Rooms",
    description: "Capture every room with a guided, timestamped camera.",
  },
  {
    id: "signatures",
    number: "03",
    title: "Collect Signatures",
    description: "Tenant, landlord, and agent all sign off digitally.",
  },
  {
    id: "report",
    number: "04",
    title: "Generate & Share",
    description: "A verified report assembles itself, ready to send.",
  },
];
