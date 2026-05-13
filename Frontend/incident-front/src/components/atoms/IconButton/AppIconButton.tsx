import { Button } from "@/components/ui/button";
import { type ComponentProps, type ReactNode } from "react";

type AppIconButtonProps = ComponentProps<typeof Button> & {
  icon: ReactNode;
  "aria-label": string;
};

export function AppIconButton({ icon, ...props }: AppIconButtonProps) {
  return (
    <Button size="icon" variant="ghost" {...props}>
      {icon}
    </Button>
  );
}

