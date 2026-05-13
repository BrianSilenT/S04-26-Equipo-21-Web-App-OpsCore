import { Textarea } from "@/components/ui/textarea";
import { type ComponentProps } from "react";

type AppTextareaProps = ComponentProps<typeof Textarea> & {
  errorMessage?: string;
};

export function AppTextarea({ errorMessage, ...props }: AppTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <Textarea {...props} />
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}