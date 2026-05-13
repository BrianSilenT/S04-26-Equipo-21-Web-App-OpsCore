import { Input } from "@/components/ui/input";
import { type ComponentProps } from "react";

type AppInputProps = ComponentProps<typeof Input> & {
  errorMessage?: string;
};

export function AppInput({ errorMessage, ...props }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Input {...props} />
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}