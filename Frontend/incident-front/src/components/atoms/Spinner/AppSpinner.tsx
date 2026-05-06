interface AppSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
};

export function AppSpinner({ size = "md", className = "" }: AppSpinnerProps) {
  return (
    <span
      className={`inline-block rounded-full border-2 border-current border-t-transparent animate-spin ${sizeMap[size]} ${className}`}
      role="status"
      aria-label="Cargando"
    />
  );
}