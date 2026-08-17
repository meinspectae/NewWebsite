export interface SideContent {
  role: "TENANTS" | "LANDLORDS";
  tone: "green" | "blue";
  headline: string;
  benefits: string[];
  photo: string;
}

export interface EvidenceSnapshot {
  photo: string;
  caption: string;
  date: string;
}

export const TENANT_SIDE: SideContent = {
  role: "TENANTS",
  tone: "green",
  headline: "Protect what belongs to you.",
  benefits: ["Pre-existing damage", "Security deposit protection", "Fair inspections", "Peace of mind"],
  photo: "/rooms/living-room.jpg",
};

export const LANDLORD_SIDE: SideContent = {
  role: "LANDLORDS",
  tone: "blue",
  headline: "Protect what belongs to your property.",
  benefits: ["Property condition", "Accountability", "Better handovers", "Dispute protection"],
  photo: "/rooms/bedroom.jpg",
};

export const TENANT_EVIDENCE: EvidenceSnapshot = {
  photo: "/rooms/kitchen.jpg",
  caption: "Soft chip on window frame",
  date: "14 Aug 2026",
};

export const LANDLORD_EVIDENCE: EvidenceSnapshot = {
  photo: "/rooms/bathroom.jpg",
  caption: "Crack on tile",
  date: "14 Aug 2027",
};
