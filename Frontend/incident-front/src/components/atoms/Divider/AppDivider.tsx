import { Separator } from "@/components/ui/separator";

interface AppDividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function AppDivider({
  orientation = "horizontal",
  className = "",
}: AppDividerProps) {
  return <Separator orientation={orientation} className={className} />;
}