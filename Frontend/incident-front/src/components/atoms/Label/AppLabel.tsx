import { Label } from "@/components/ui/label";
import { type ComponentProps } from "react";

type AppLabelProps = ComponentProps<typeof Label> & {
  required?: boolean;
};

export function AppLabel({ required, children, ...props }: AppLabelProps) {
  return (
    <Label {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
  );
}