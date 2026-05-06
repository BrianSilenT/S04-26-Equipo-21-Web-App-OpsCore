import { Badge } from "@/components/ui/badge";
import { type ComponentProps } from "react";

type AppBadgeProps = ComponentProps<typeof Badge> & {
  label: string;
};

export function AppBadge({ label, ...props }: AppBadgeProps) {
  return <Badge {...props}>{label}</Badge>;
}