import { useState } from "react";
import { AppButton } from "@/components/atoms";

import { FormField } from "@/components/molecules/FormField";
import {
  RoleSelector,
  type UserRole,
} from "@/components/molecules/auth/RoleSelector";

export type LoginCredentials = {
  email: string;
  password: string;
  role: UserRole;
};

type LoginFormErrors = Partial<Record<keyof LoginCredentials, string>>;

type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => Promise<void> | void;
  isLoading?: boolean;
};

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole | "">("");
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const validate = (): LoginFormErrors => {
    const e: LoginFormErrors = {};
    if (!email) e.email = "Email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Ingresa un email válido";
    if (!password) e.password = "Password es requerido";
    if (!role) e.role = "Selecciona un rol para continuar";
    return e;
  };

  const handleSubmit = async () => {
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    await onSubmit({ email, password, role: role as UserRole });
  };

  return (
    <div className="flex flex-col gap-5">
      <FormField
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={errors.email}
        disabled={isLoading}
      />

      <FormField
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={errors.password}
        disabled={isLoading}
      />

      <RoleSelector
        label="Rol"
        value={role}
        onChange={setRole}
        errorMessage={errors.role}
        disabled={isLoading}
      />

      <AppButton
        className="w-full mt-2"
        onClick={handleSubmit}
        disabled={isLoading}
        label={isLoading ? "Ingresando" : "Ingresar"}
      />
    </div>
  );
}
