import { useState } from "react";
import {
  LoginForm,
  type LoginCredentials,
} from "@/components/organisms/auth/LoginForm";
import {
  TwoFactorForm,
  type TwoFactorPayload,
} from "@/components/organisms/auth/TwoFactorForm";

// ─── Step machine ────────────────────────────────────────────────────────────
type Step = "login" | "2fa";

// ─── Service stubs — swap for your real API layer ────────────────────────────
async function signIn(
  credentials: LoginCredentials,
): Promise<{ requires2fa: boolean }> {
  await new Promise((r) => setTimeout(r, 800));
  return { requires2fa: credentials.role === "technician" };
}

async function verify2fa(payload: TwoFactorPayload): Promise<void> {
  await new Promise((r) => setTimeout(r, 800));
  if (payload.code !== "123456")
    throw new Error("Codigo 2FA inválido. intenta otra vez.");
}

// ─── Page ────────────────────────────────────────────────────────────────────
export function LoginPage() {
  const [step, setStep] = useState<Step>("login");
  const [isLoading, setIsLoading] = useState(false);
  const [pageError, setPageError] = useState<string | undefined>();
  const [pendingCredentials, setPendingCredentials] =
    useState<LoginCredentials | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setPageError(undefined);
    try {
      const { requires2fa } = await signIn(credentials);
      setPendingCredentials(credentials);
      if (requires2fa) {
        setStep("2fa");
      } else {
        redirectToDashboard(credentials.role);
      }
    } catch (err) {
      setPageError(
        err instanceof Error
          ? err.message
          : "Ingreso fallido. intenta otra vez.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handle2fa = async (payload: TwoFactorPayload) => {
    setIsLoading(true);
    setPageError(undefined);
    try {
      await verify2fa(payload);
      redirectToDashboard(pendingCredentials?.role ?? "technician");
    } catch (err) {
      setPageError(
        err instanceof Error
          ? err.message
          : "Verificación fallida. intenta otra vez.",
      );
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep("login");
    setPageError(undefined);
  };

  const redirectToDashboard = (role: string) => {
    // e.g. router.push(`/dashboard/${role}`)
    console.log(`Redirecting ${role} to dashboard`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">OpsCore</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {step === "login"
              ? "Inicia sesión en tu cuenta"
              : "Autenticación de dos factores"}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          {/* Page-level error (API errors, not field validation) */}
          {pageError && (
            <div
              role="alert"
              className="mb-4 rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-2.5 text-sm text-destructive"
            >
              {pageError}
            </div>
          )}

          {step === "login" && (
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          )}

          {step === "2fa" && (
            <TwoFactorForm
              onSubmit={handle2fa}
              onBack={handleBack}
              isLoading={isLoading}
            />
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          OpsCore · Incident Operations Platform
        </p>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Team 21 - NoCountry
        </p>
      </div>
    </div>
  );
}
