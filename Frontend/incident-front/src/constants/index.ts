import type { SafetyItem } from "@/components/molecules/incidents/SafetyCheckList";

export const SAFETY_ITEMS: SafetyItem[] = [
  { id: "emergency_stop", label: "Paro de emergencia activado" },
  { id: "area_secured", label: "Área asegurada" },
  { id: "supervisor_notified", label: "Supervisor notificado" },
  { id: "ppe_verified", label: "EPP verificado" },
];
