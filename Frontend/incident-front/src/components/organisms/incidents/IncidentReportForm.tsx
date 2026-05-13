import { AppButton } from "@/components/atoms";
import { AppLabel } from "@/components/atoms";
import { AppSelect } from "@/components/atoms";
import { AppTextarea } from "@/components/atoms";
import { AppDivider } from "@/components/atoms";
import {
  SeveritySelector,
  type Severity,
} from "@/components/molecules/incidents/SeveritySelector";
import { SafetyChecklist } from "@/components/molecules/incidents/SafetyCheckList";
import { EvidenceUploader } from "@/components/molecules/incidents/EvidenceUploader";
import { useState } from "react";
import { SAFETY_ITEMS } from "@/constants";

// ─── Types ───────────────────────────────────────────────────────────────────

export type IncidentReportData = {
  machine: string;
  area: string;
  incidentType: string;
  severity: Severity;
  safetyChecklist: Record<string, boolean>;
  description: string;
};

type FormErrors = Partial<Record<keyof IncidentReportData, string>>;

type IncidentReportFormProps = {
  machines: { value: string; label: string }[];
  areas: { value: string; label: string }[];
  incidentTypes: { value: string; label: string }[];
  onSubmit: (data: IncidentReportData) => Promise<void> | void;
  isLoading?: boolean;
};

// ─── Organism ────────────────────────────────────────────────────────────────

export function IncidentReportForm({
  machines,
  areas,
  incidentTypes,
  onSubmit,
  isLoading,
}: IncidentReportFormProps) {
  const [machine, setMachine] = useState("");
  const [area, setArea] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [severity, setSeverity] = useState<Severity | "">("");
  const [safetyChecklist, setSafetyChecklist] = useState<
    Record<string, boolean>
  >({});
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChecklistChange = (id: string, value: boolean) => {
    setSafetyChecklist((prev) => ({ ...prev, [id]: value }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!machine) e.machine = "Selecciona una máquina";
    if (!area) e.area = "Selecciona un área";
    if (!incidentType) e.incidentType = "Selecciona el tipo de incidente";
    if (!severity) e.severity = "Selecciona la severidad";
    if (!description.trim()) e.description = "La descripción es requerida";

    const allChecked = SAFETY_ITEMS.every((item) => safetyChecklist[item.id]);
    if (!allChecked)
      e.safetyChecklist = "Completa todos los puntos del checklist";

    return e;
  };

  const handleSubmit = async () => {
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    await onSubmit({
      machine,
      area,
      incidentType,
      severity: severity as Severity,
      safetyChecklist,
      description,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Sección: Datos del incidente */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <AppLabel>Máquina</AppLabel>
          <AppSelect
            options={machines}
            placeholder="Selecciona una máquina"
            value={machine}
            onValueChange={setMachine}
            disabled={isLoading}
          />
          {errors.machine && (
            <span className="text-xs text-red-500">{errors.machine}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <AppLabel>Área</AppLabel>
          <AppSelect
            options={areas}
            placeholder="Selecciona un área"
            value={area}
            onValueChange={setArea}
            disabled={isLoading}
          />
          {errors.area && (
            <span className="text-xs text-red-500">{errors.area}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <AppLabel>Tipo de incidente</AppLabel>
          <AppSelect
            options={incidentTypes}
            placeholder="Selecciona el tipo"
            value={incidentType}
            onValueChange={setIncidentType}
            disabled={isLoading}
          />
          {errors.incidentType && (
            <span className="text-xs text-red-500">{errors.incidentType}</span>
          )}
        </div>

        <SeveritySelector
          value={severity}
          onChange={setSeverity}
          errorMessage={errors.severity}
          disabled={isLoading}
        />
      </div>

      <AppDivider />

      {/* Sección: Checklist de seguridad */}
      <SafetyChecklist
        checked={safetyChecklist}
        onChange={handleChecklistChange}
        errorMessage={errors.safetyChecklist}
        disabled={isLoading}
      />

      <AppDivider />

      {/* Sección: Descripción y evidencia */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <AppLabel>Descripción</AppLabel>
          <AppTextarea
            placeholder="Describe el incidente con el mayor detalle posible..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            errorMessage={errors.description}
            disabled={isLoading}
            rows={4}
          />
        </div>

        <EvidenceUploader />
      </div>

      <AppButton
        className="w-full"
        onClick={handleSubmit}
        disabled={isLoading}
        label={isLoading ? "Enviando..." : "Enviar Incidente"}
      />
    </div>
  );
}
