export interface EvidenceStage {
  id: "photo" | "timestamp" | "gps" | "condition" | "signature" | "report";
  label: string;
  icon: "camera" | "clock" | "map-pin" | "check-circle" | "pen-tool" | "file-text";
  tone: "blue" | "green";
}

export const EVIDENCE_STAGES: EvidenceStage[] = [
  { id: "photo", label: "Photo", icon: "camera", tone: "blue" },
  { id: "timestamp", label: "Timestamp", icon: "clock", tone: "blue" },
  { id: "gps", label: "GPS", icon: "map-pin", tone: "blue" },
  { id: "condition", label: "Condition", icon: "check-circle", tone: "green" },
  { id: "signature", label: "Signature", icon: "pen-tool", tone: "blue" },
  { id: "report", label: "Report", icon: "file-text", tone: "green" },
];
