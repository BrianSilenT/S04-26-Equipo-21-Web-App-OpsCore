import {
  IncidentReportForm,
  type IncidentReportData,
} from "@/components/organisms/incidents/IncidentReportForm";

// ─── Catálogos estáticos — reemplazar con llamadas a API ─────────────────────

const MACHINES = [
  { value: "cnc-22", label: "CNC-22" },
  { value: "cnc-15", label: "CNC-15" },
  { value: "press-01", label: "Prensa-01" },
  { value: "robot-03", label: "Robot-03" },
];

const AREAS = [
  { value: "production-line-3", label: "Línea de Producción 3" },
  { value: "production-line-1", label: "Línea de Producción 1" },
  { value: "warehouse", label: "Almacén" },
  { value: "maintenance", label: "Mantenimiento" },
];

const INCIDENT_TYPES = [
  { value: "failure", label: "Falla" },
  { value: "accident", label: "Accidente" },
  { value: "near_miss", label: "Casi accidente" },
  { value: "quality", label: "Calidad" },
  { value: "maintenance", label: "Mantenimiento preventivo" },
];

// ─── Service stub — reemplazar con tu capa de servicios ──────────────────────

async function submitIncident(data: IncidentReportData): Promise<void> {
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Incidente enviado:", data);
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function MobileIncidentReportPage() {
  const handleSubmit = async (data: IncidentReportData) => {
    await submitIncident(data);
    // router.push("/incidents/confirmation")
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <h1 className="text-lg font-semibold">Reportar Incidente</h1>
      </div>

      {/* Form */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <IncidentReportForm
          machines={MACHINES}
          areas={AREAS}
          incidentTypes={INCIDENT_TYPES}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
