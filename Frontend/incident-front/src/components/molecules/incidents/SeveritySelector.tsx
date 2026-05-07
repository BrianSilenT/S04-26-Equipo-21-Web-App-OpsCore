import { AppLabel } from "@/components/atoms";
import { AppText } from "@/components/atoms";

export type Severity = "low" | "medium" | "critical";

const OPTIONS: { value: Severity; label: string }[] = [
  { value: "low", label: "Baja" },
  { value: "medium", label: "Media" },
  { value: "critical", label: "Crítica" },
];

type SeveritySelectorProps = {
  value: Severity | "";
  onChange: (value: Severity) => void;
  errorMessage?: string;
  disabled?: boolean;
};

export function SeveritySelector({
  value,
  onChange,
  errorMessage,
  disabled,
}: SeveritySelectorProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <AppLabel>Severidad</AppLabel>

      <div className="flex gap-4" role="radiogroup" aria-label="Severidad">
        {OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-1.5 cursor-pointer select-none"
          >
            <input
              type="radio"
              name="severity"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={disabled}
              className="accent-primary"
            />
            <AppText className="text-sm">{opt.label}</AppText>
          </label>
        ))}
      </div>

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}
