
import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";

type AppButtonProps = ComponentProps<typeof Button> & {
  label?: string;
};

export function AppButton({ label, children, ...props }: AppButtonProps) {
  return (
    <Button {...props}>
      {label ?? children}
    </Button>
  );
}
