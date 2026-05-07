import { AppLabel } from "@/components/atoms";
import { AppSelect } from "@/components/atoms";

export type UserRole = "operator" | "technician";

const ROLES = [
  { value: "operator", label: "Operador" },
  { value: "technician", label: "Tecnico" },
];

type RoleSelectorProps = {
  label?: string;
  value: UserRole | "";
  onChange: (value: UserRole) => void;
  errorMessage?: string;
  disabled?: boolean;
};

export function RoleSelector({
  label = "Rol",
  value,
  onChange,
  errorMessage,
  disabled,
}: RoleSelectorProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <AppLabel>{label}</AppLabel>

      <AppSelect
        options={ROLES}
        placeholder="Selecciona tu rol"
        value={value}
        onValueChange={(v) => onChange(v as UserRole)}
        disabled={disabled}
      />

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}
