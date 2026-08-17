export interface ReportField {
  label: string;
  value: string;
}

export const PROPERTY_FIELDS: ReportField[] = [
  { label: "Property", value: "Skyline Residences, Unit 14B" },
  { label: "Address", value: "220 Marina Boulevard" },
  { label: "Property Type", value: "2 Bed · 2 Bath Apartment" },
  { label: "Inspection Date", value: "14 Aug 2026" },
  { label: "Inspector", value: "M. Chen — Licensed Agent" },
];

export const SUMMARY_STATS: ReportField[] = [
  { label: "Overall Condition", value: "Good" },
  { label: "Rooms Inspected", value: "6" },
  { label: "Photos Captured", value: "128" },
  { label: "Issues Flagged", value: "3" },
];

export interface ReportRoom {
  name: string;
  photo: string;
}

export const REPORT_ROOMS: ReportRoom[] = [
  { name: "Living Room", photo: "/rooms/living-room.jpg" },
  { name: "Kitchen", photo: "/rooms/kitchen.jpg" },
  { name: "Bedroom", photo: "/rooms/bedroom.jpg" },
  { name: "Bathroom", photo: "/rooms/bathroom.jpg" },
];

export interface ConditionRating {
  room: string;
  rating: "Good" | "Fair";
}

export const CONDITION_RATINGS: ConditionRating[] = [
  { room: "Living Room", rating: "Good" },
  { room: "Kitchen", rating: "Good" },
  { room: "Bedroom", rating: "Good" },
  { room: "Bathroom", rating: "Fair" },
];

export interface ReportIssue {
  label: string;
  room: string;
}

export const REPORT_ISSUES: ReportIssue[] = [
  { label: "Soft chip on window frame", room: "Living Room" },
  { label: "Crack on tile", room: "Bathroom" },
  { label: "Scuff mark on cabinet door", room: "Kitchen" },
];

export interface Signatory {
  role: "Tenant" | "Landlord" | "Agent";
  name: string;
}

export const SIGNATORIES: Signatory[] = [
  { role: "Tenant", name: "Adam" },
  { role: "Landlord", name: "Eve" },
  { role: "Agent", name: "Tom" },
];

export interface ReportStat {
  value: number;
  label: string;
}

export const REPORT_STATS: ReportStat[] = [
  { value: 128, label: "Evidence Items" },
  { value: 6, label: "Rooms" },
  { value: 3, label: "Signatures" },
];

export interface ReportPageMeta {
  id: "property" | "summary" | "photos" | "conditions" | "issues" | "signatures";
  number: number;
  title: string;
}

export const REPORT_PAGES: ReportPageMeta[] = [
  { id: "property", number: 1, title: "Property Information" },
  { id: "summary", number: 2, title: "Inspection Summary" },
  { id: "photos", number: 3, title: "Room Photographs" },
  { id: "conditions", number: 4, title: "Condition Ratings" },
  { id: "issues", number: 5, title: "Issues" },
  { id: "signatures", number: 6, title: "Signatures" },
];
