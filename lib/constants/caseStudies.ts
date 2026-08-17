export interface CaseStudy {
  id: string;
  fileNumber: string;
  stat: string;
  category: string;
  description: string;
  status: string;
  photo: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "deposit-dispute",
    fileNumber: "001",
    stat: "AED 4,000",
    category: "Deposit Dispute",
    description: "Move-in evidence proved the issue was pre-existing.",
    status: "Dispute resolved",
    photo: "/rooms/living-room.jpg",
  },
  {
    id: "cracked-tile",
    fileNumber: "002",
    stat: "Pre-existing",
    category: "Cracked Tile",
    description: "MeInspect records protected the tenant from an unfair charge.",
    status: "Dispute resolved",
    photo: "/rooms/bathroom.jpg",
  },
  {
    id: "portfolio",
    fileNumber: "003",
    stat: "60+ Property",
    category: "Portfolio",
    description: "Property managers use MeInspect for consistent handovers.",
    status: "Time saved daily",
    photo: "/rooms/kitchen.jpg",
  },
];
