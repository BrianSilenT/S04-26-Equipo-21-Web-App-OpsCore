import { Checkbox } from "@/components/ui/checkbox";
import { type ComponentProps } from "react";

type AppCheckboxProps = ComponentProps<typeof Checkbox>;

export function AppCheckbox({ ...props }: AppCheckboxProps) {
  return <Checkbox {...props} />;
}
